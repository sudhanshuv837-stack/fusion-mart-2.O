const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT || 8080);
const DATA_DIR = path.join(__dirname, 'data');
const STORE_FILE = path.join(DATA_DIR, 'store.json');
const JWT_SECRET = process.env.JWT_SECRET || 'change-me';

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive:true });
if (!fs.existsSync(STORE_FILE)) {
  fs.writeFileSync(STORE_FILE, JSON.stringify({ products:[], orders:[], payments:[], users:[] }, null, 2));
}

const rateWindowMs = 60 * 1000;
const rateMap = new Map();

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => { raw += chunk; if (raw.length > 2 * 1024 * 1024) req.destroy(); });
    req.on('end', () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch (err) { reject(new Error('Invalid JSON body')); }
    });
    req.on('error', reject);
  });
}

function send(res, code, data) {
  res.writeHead(code, { 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*' });
  res.end(JSON.stringify(data));
}

function readStore() {
  try {
    const parsed = JSON.parse(fs.readFileSync(STORE_FILE, 'utf8'));
    return parsed && typeof parsed === 'object' ? parsed : { products:[], orders:[], payments:[], users:[] };
  } catch {
    return { products:[], orders:[], payments:[], users:[] };
  }
}

function writeStore(next) {
  fs.writeFileSync(STORE_FILE, JSON.stringify(next, null, 2));
}

function signToken(payload, expiresSec = 86400) {
  const header = Buffer.from(JSON.stringify({ alg:'HS256', typ:'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + expiresSec })).toString('base64url');
  const sig = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${sig}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const [header, body, sig] = token.split('.');
  if (!header || !body || !sig) return null;
  const expected = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url');
  if (expected !== sig) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

function extractUser(req) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  return verifyToken(token);
}

function rateLimit(req, res) {
  const key = req.socket.remoteAddress || 'anon';
  const now = Date.now();
  const row = rateMap.get(key) || { count:0, start:now };
  const active = now - row.start <= rateWindowMs ? row : { count:0, start:now };
  active.count += 1;
  rateMap.set(key, active);
  if (active.count > 120) {
    send(res, 429, { error:'Rate limit exceeded' });
    return false;
  }
  return true;
}

function productScore(base, candidate) {
  const textA = `${base.title || ''} ${base.category || ''} ${base.description || ''}`.toLowerCase();
  const textB = `${candidate.title || ''} ${candidate.category || ''} ${candidate.description || ''}`.toLowerCase();
  let score = 0;
  if (base.category === candidate.category) score += 30;
  if (textA.split(' ').some((w) => w.length > 3 && textB.includes(w))) score += 20;
  const p1 = Number(base.price || 0);
  const p2 = Number(candidate.price || 0);
  if (p1 > 0 && p2 > 0) score += Math.max(0, 20 - Math.abs(p1 - p2) / Math.max(p1, p2) * 20);
  return score;
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':'Content-Type,Authorization',
    });
    return res.end();
  }

  if (!rateLimit(req, res)) return;
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && url.pathname === '/health') {
    return send(res, 200, { ok:true, service:'fusionmart-backend', now:new Date().toISOString() });
  }

  if (req.method === 'POST' && url.pathname === '/api/auth/login') {
    const body = await parseBody(req).catch(() => null);
    if (!body || !body.email) return send(res, 400, { error:'email is required' });
    const role = body.role === 'admin' ? 'admin' : body.role === 'seller' ? 'seller' : 'user';
    const token = signToken({ email:String(body.email).toLowerCase(), role });
    return send(res, 200, { token, role });
  }

  if (req.method === 'GET' && url.pathname === '/api/products') {
    const store = readStore();
    return send(res, 200, { items:store.products });
  }

  if (req.method === 'POST' && url.pathname === '/api/products') {
    const user = extractUser(req);
    if (!user || (user.role !== 'admin' && user.role !== 'seller')) return send(res, 401, { error:'Unauthorized' });
    const body = await parseBody(req).catch(() => null);
    if (!body || !body.title || !Number(body.price)) return send(res, 400, { error:'title and price are required' });
    const store = readStore();
    const row = {
      id: `P-${Date.now()}`,
      title: String(body.title),
      category: String(body.category || 'Electronics'),
      price: Number(body.price),
      stock: Math.max(0, Number(body.stock || 0)),
      description: String(body.description || ''),
      tags: Array.isArray(body.tags) ? body.tags : [],
      createdAt: new Date().toISOString(),
    };
    store.products.push(row);
    writeStore(store);
    return send(res, 201, { item:row });
  }

  if (req.method === 'GET' && url.pathname.startsWith('/api/recommendations/')) {
    const id = url.pathname.split('/').pop();
    const store = readStore();
    const base = store.products.find((item) => item.id === id);
    if (!base) return send(res, 404, { error:'Product not found' });
    const items = store.products
      .filter((item) => item.id !== base.id)
      .map((item) => ({ ...item, score:productScore(base, item) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    return send(res, 200, { items });
  }

  if (req.method === 'POST' && url.pathname === '/api/payments/checkout') {
    const user = extractUser(req);
    if (!user) return send(res, 401, { error:'Unauthorized' });
    const body = await parseBody(req).catch(() => null);
    if (!body || !Array.isArray(body.items) || !body.gateway) return send(res, 400, { error:'items and gateway are required' });
    const store = readStore();
    const amount = Number(body.amount || 0);
    const payment = {
      id:`PAY-${Date.now()}`,
      user:user.email,
      gateway:String(body.gateway),
      amount,
      status:'success',
      txnRef:`TXN-${Math.floor(Math.random() * 1000000)}`,
      createdAt:new Date().toISOString(),
    };
    const order = {
      id:`ORD-${Date.now()}`,
      user:user.email,
      amount,
      status:'confirmed',
      items:body.items,
      createdAt:new Date().toISOString(),
    };
    store.payments.unshift(payment);
    store.orders.unshift(order);
    writeStore(store);
    return send(res, 200, { payment, order });
  }

  if (req.method === 'GET' && url.pathname === '/api/admin/metrics') {
    const user = extractUser(req);
    if (!user || user.role !== 'admin') return send(res, 401, { error:'Unauthorized' });
    const store = readStore();
    const totalRevenue = store.orders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
    return send(res, 200, {
      totalRevenue,
      products:store.products.length,
      orders:store.orders.length,
      payments:store.payments.length,
      users:store.users.length,
    });
  }

  return send(res, 404, { error:'Not found' });
});

server.listen(PORT, () => {
  console.log(`Fusion Mart backend listening on http://localhost:${PORT}`);
});
