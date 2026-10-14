/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const CATEGORIES = ['All','Electronics','Fashion','Home & Kitchen','Sports','Books','Beauty','Toys'];

const INITIAL_PRODUCTS = [
  { id:1, title:'Sony WH-1000XM5 Headphones', category:'Electronics', price:24999, originalPrice:34999, image:'image/img_027.jpg', emoji:'box', rating:4.8, reviews:2847, stock:15, desc:'Noise canceling headphones.', tag:'Bestseller' },
  { id:2, title:'Nike Air Max 270 Running Shoes', category:'Fashion', price:8499, originalPrice:12999, image:'image/nike-air.avif', emoji:'box', rating:4.6, reviews:1923, stock:42, desc:'Comfortable running shoes.', tag:'Trending' },
  { id:3, title:'Instant Pot Duo 7-in-1', category:'Home & Kitchen', price:6999, originalPrice:9999, image:'image/img_010.jpg', emoji:'box', rating:4.9, reviews:8321, stock:28, desc:'Multi-use cooker.', tag:'Top Rated' },
  { id:4, title:'Apple iPad Air M1', category:'Electronics', price:59900, originalPrice:69900, image:'image/img_028.jpg', emoji:'box', rating:4.9, reviews:4520, stock:8, desc:'Powerful iPad.', tag:'New' },
  { id:5, title:'Yoga Mat Premium', category:'Sports', price:1899, originalPrice:2999, image:'image/img_009.jpg', emoji:'box', rating:4.5, reviews:956, stock:65, desc:'Non-slip yoga mat.', tag:'Sale' },
  { id:6, title:'Atomic Habits', category:'Books', price:399, originalPrice:799, image:'image/img_029.jpg', emoji:'box', rating:4.8, reviews:12045, stock:200, desc:'Best self-help book.', tag:'Bestseller' },
  { id:7, title:'The Ordinary Niacinamide', category:'Beauty', price:799, originalPrice:1099, image:'image/img_015.jpg', emoji:'box', rating:4.7, reviews:3218, stock:90, desc:'Skin serum.', tag:'Trending' },
  { id:8, title:'LEGO Star Wars Falcon', category:'Toys', price:14999, originalPrice:19999, image:'image/img_022.jpg', emoji:'box', rating:4.9, reviews:721, stock:5, desc:'LEGO set.', tag:'Limited' },

  { id:9, title:'Bose QuietComfort Ultra Headphones', category:'Electronics', price:28999, originalPrice:36999, image:'image/img_006.jpg', emoji:'box', rating:4.7, reviews:1642, stock:22, desc:'Premium wireless noise-canceling headphones.', tag:'Premium' },
  { id:10, title:'Samsung Galaxy Buds2 Pro', category:'Electronics', price:10999, originalPrice:14999, image:'image/img_021.jpg', emoji:'box', rating:4.6, reviews:2103, stock:34, desc:'High-fidelity true wireless earbuds.', tag:'Trending' },
  { id:11, title:'Dell Inspiron 15 Laptop', category:'Electronics', price:54999, originalPrice:64999, image:'image/img_005.jpg', emoji:'box', rating:4.5, reviews:1398, stock:17, desc:'Everyday performance laptop with SSD.', tag:'Deal' },

  { id:12, title:'Adidas Ultraboost 22', category:'Fashion', price:11999, originalPrice:15999, image:'image/img_018.jpg', emoji:'box', rating:4.7, reviews:2407, stock:30, desc:'Responsive running shoes for daily training.', tag:'Top Rated' },
  { id:13, title:'Levi\'s Slim Fit Denim Jacket', category:'Fashion', price:3499, originalPrice:4999, image:'image/img_014.jpg', emoji:'box', rating:4.4, reviews:1186, stock:49, desc:'Classic washed denim jacket.', tag:'Popular' },
  { id:14, title:'Puma Essential Hoodie', category:'Fashion', price:2499, originalPrice:3999, image:'image/img_025.jpg', emoji:'box', rating:4.5, reviews:904, stock:58, desc:'Soft fleece hoodie for everyday wear.', tag:'Sale' },

  { id:15, title:'Philips Air Fryer 4.1L', category:'Home & Kitchen', price:8499, originalPrice:11999, image:'image/img_010.jpg', emoji:'box', rating:4.6, reviews:1733, stock:19, desc:'Crispy frying with up to 90% less oil.', tag:'Healthy Pick' },
  { id:16, title:'NutriBlend Mixer Grinder', category:'Home & Kitchen', price:2999, originalPrice:4499, image:'image/img_010.jpg', emoji:'box', rating:4.3, reviews:1422, stock:40, desc:'Compact mixer for smoothies and chutneys.', tag:'Value' },
  { id:17, title:'Non-Stick Cookware Set (5pc)', category:'Home & Kitchen', price:3899, originalPrice:5999, image:'image/img_010.jpg', emoji:'box', rating:4.4, reviews:988, stock:27, desc:'Durable cookware set with induction base.', tag:'Kitchen Essential' },

  { id:18, title:'Adjustable Dumbbell Pair 20kg', category:'Sports', price:7499, originalPrice:9999, image:'image/img_011.jpg', emoji:'box', rating:4.6, reviews:1337, stock:13, desc:'Space-saving adjustable dumbbells.', tag:'Fitness' },
  { id:19, title:'Skipping Rope Speed Pro', category:'Sports', price:699, originalPrice:1199, image:'image/img_023.jpg', emoji:'box', rating:4.2, reviews:751, stock:120, desc:'Lightweight speed rope with ball bearings.', tag:'Budget Pick' },
  { id:20, title:'Wilson Basketball Size 7', category:'Sports', price:1299, originalPrice:1999, image:'image/img_013.jpg', emoji:'box', rating:4.5, reviews:864, stock:76, desc:'Indoor-outdoor grip basketball.', tag:'Popular' },

  { id:21, title:'Deep Work by Cal Newport', category:'Books', price:349, originalPrice:699, image:'image/img_007.jpg', emoji:'box', rating:4.7, reviews:5342, stock:180, desc:'Rules for focused success in a distracted world.', tag:'Editor\'s Pick' },
  { id:22, title:'The Psychology of Money', category:'Books', price:299, originalPrice:599, image:'image/img_004.jpg', emoji:'box', rating:4.8, reviews:7840, stock:240, desc:'Timeless lessons on wealth and behavior.', tag:'Must Read' },

  { id:23, title:'CeraVe Foaming Cleanser', category:'Beauty', price:1099, originalPrice:1499, image:'image/img_020.jpg', emoji:'box', rating:4.6, reviews:2135, stock:84, desc:'Gentle cleanser for normal to oily skin.', tag:'Derm Recommended' },
  { id:24, title:'Minimalist SPF 50 Sunscreen', category:'Beauty', price:499, originalPrice:699, image:'image/img_015.jpg', emoji:'box', rating:4.5, reviews:1721, stock:110, desc:'Broad-spectrum lightweight sun protection.', tag:'Daily Use' },

  { id:25, title:'Hot Wheels 20-Car Gift Pack', category:'Toys', price:2299, originalPrice:3299, image:'image/img_022.jpg', emoji:'box', rating:4.7, reviews:1602, stock:33, desc:'Collection of 20 die-cast toy cars.', tag:'Kids Favorite' },
  { id:26, title:'Barbie Dreamhouse Doll Set', category:'Toys', price:9999, originalPrice:12999, image:'image/img_022.jpg', emoji:'box', rating:4.6, reviews:579, stock:11, desc:'Interactive doll house playset.', tag:'New Arrival' },
  { id:27, title:'Amazfit GTR Smartwatch', category:'Electronics', price:10999, originalPrice:14999, image:'image/img_016.jpg', emoji:'box', rating:4.5, reviews:1288, stock:26, desc:'AMOLED smartwatch with fitness and sleep tracking.', tag:'Trending' },
  { id:28, title:'Logitech G304 Wireless Mouse', category:'Electronics', price:3299, originalPrice:4999, image:'image/img_017.jpg', emoji:'box', rating:4.6, reviews:1964, stock:48, desc:'Lightweight gaming mouse with low-latency wireless.', tag:'Top Rated' },
  { id:29, title:'Cargo Jogger Pants', category:'Fashion', price:1799, originalPrice:2799, image:'image/img_002.jpg', emoji:'box', rating:4.3, reviews:834, stock:72, desc:'Comfort-fit joggers with utility pockets.', tag:'Popular' },
  { id:30, title:'Drip Coffee Maker 1.5L', category:'Home & Kitchen', price:2599, originalPrice:3999, image:'image/img_010.jpg', emoji:'box', rating:4.4, reviews:1112, stock:29, desc:'Programmable coffee maker with keep-warm mode.', tag:'Kitchen Pick' },
  { id:31, title:'Yonex Badminton Racket', category:'Sports', price:2199, originalPrice:3299, image:'image/img_026.jpg', emoji:'box', rating:4.5, reviews:972, stock:54, desc:'Balanced racket ideal for intermediate players.', tag:'Best Seller' },
  { id:32, title:'Rich Dad Poor Dad', category:'Books', price:289, originalPrice:499, image:'image/img_003.jpg', emoji:'box', rating:4.7, reviews:6421, stock:210, desc:'Classic personal finance and mindset book.', tag:'Must Read' },
  { id:33, title:'Argan Hair Repair Serum', category:'Beauty', price:599, originalPrice:899, image:'image/img_015.jpg', emoji:'box', rating:4.4, reviews:1387, stock:87, desc:'Frizz-control serum for smooth, shiny hair.', tag:'Daily Care' },
  { id:34, title:'1000-Piece Landscape Puzzle', category:'Toys', price:999, originalPrice:1499, image:'image/img_024.jpg', emoji:'box', rating:4.5, reviews:643, stock:61, desc:'Premium cardboard puzzle with vivid print quality.', tag:'Family Fun' },
  { id:35, title:'27-inch IPS Monitor', category:'Electronics', price:16999, originalPrice:21999, image:'image/img_006.jpg', emoji:'box', rating:4.6, reviews:1409, stock:23, desc:'High-color-accuracy monitor for work and media.', tag:'New' },
  { id:36, title:'Waterproof Laptop Backpack', category:'Fashion', price:1999, originalPrice:2999, image:'image/img_019.jpg', emoji:'box', rating:4.5, reviews:1822, stock:93, desc:'Spacious anti-theft backpack with USB port.', tag:'Value' }
];

const CATEGORY_IMAGE_FALLBACKS = {
  default: 'image/img_001.jpg',
  'Electronics': 'image/img_012.jpg',
  'Fashion': 'image/img_001.jpg',
  'Home & Kitchen': 'image/img_010.jpg',
  'Sports': 'image/img_009.jpg',
  'Books': 'image/img_007.jpg',
  'Beauty': 'image/img_015.jpg',
  'Toys': 'image/img_008.jpg',
};

const IMAGE_LIBRARY = [
  'image/img_001.jpg','image/img_002.jpg','image/img_003.jpg','image/img_004.jpg',
  'image/img_005.jpg','image/img_006.jpg','image/img_007.jpg','image/img_008.jpg',
  'image/img_009.jpg','image/img_010.jpg','image/img_011.jpg','image/img_012.jpg',
  'image/img_013.jpg','image/img_014.jpg','image/img_015.jpg','image/img_016.jpg',
  'image/img_017.jpg','image/img_018.jpg','image/img_019.jpg','image/img_020.jpg',
  'image/img_021.jpg','image/img_022.jpg','image/img_023.jpg','image/img_024.jpg',
  'image/img_025.jpg','image/img_026.jpg','image/img_027.jpg','image/img_028.jpg',
  'image/img_029.jpg',
];

const IMAGE_KEYWORD_MAP = [
  { words:['headphone','earbud','buds','audio','speaker','noise'], image:'image/img_027.jpg' },
  { words:['laptop','monitor','mouse','keyboard','smartwatch','tablet','ipad'], image:'image/img_006.jpg' },
  { words:['shoe','running','hoodie','jacket','denim','fashion','bag','backpack'], image:'image/img_001.jpg' },
  { words:['air fryer','cooker','kitchen','coffee','mixer','cookware'], image:'image/img_010.jpg' },
  { words:['yoga','sports','fitness','dumbbell','badminton','basketball'], image:'image/img_011.jpg' },
  { words:['book','novel','reading','habits','money'], image:'image/img_007.jpg' },
  { words:['beauty','serum','sunscreen','cleanser','skin','hair'], image:'image/img_015.jpg' },
  { words:['toy','lego','barbie','puzzle','kids'], image:'image/img_022.jpg' },
];

const BEHAVIOR_STORAGE_KEY = 'fusionmart-behavior-v1';
const SELLERS_STORAGE_KEY = 'fusionmart-sellers-v1';
const PAYMENT_LOG_STORAGE_KEY = 'fusionmart-payment-logs-v1';
const COUPON_STORAGE_KEY = 'fusionmart-coupons-v1';
const BANNER_STORAGE_KEY = 'fusionmart-banners-v1';
const RETURNS_STORAGE_KEY = 'fusionmart-returns-v1';
const REVIEWS_STORAGE_KEY = 'fusionmart-reviews-v1';
const RECENT_VIEWS_STORAGE_KEY = 'fusionmart-recent-views-v1';
const NOTIFICATIONS_STORAGE_KEY = 'fusionmart-notifications-v1';
const THEME_STORAGE_KEY = 'fusionmart-theme-v1';
const LANGUAGE_STORAGE_KEY = 'fusionmart-language-v1';

const DEFAULT_COUPONS = [
  { code:'WELCOME10', discountPct:10, minOrder:999, active:true, used:0 },
  { code:'FUSION20', discountPct:20, minOrder:2999, active:true, used:0 },
  { code:'FREESHIP', discountFlat:99, minOrder:499, active:true, used:0 },
];

const DEFAULT_BANNERS = [
  { id:1, title:'AI Deals Week', subtitle:'Smart picks + up to 50% off', cta:'Shop Now', active:true },
  { id:2, title:'Flash Sale', subtitle:'Limited stocks, faster checkout', cta:'View Deals', active:true },
];

const DEFAULT_SELLERS = [
  { id:'SV-1001', storeName:'Fusion Official', owner:'admin@fusionmart.com', status:'approved', rating:4.9, totalSales:0, commissionPct:8 },
];

function productKeywordsFromText(text='') {
  return normalizeText(text).split(/\s+/).filter(Boolean);
}

function inferProductTags(product={}) {
  const fromTags = Array.isArray(product.tags) ? product.tags : [];
  const fromTag = typeof product.tag === 'string' ? [product.tag] : [];
  const words = productKeywordsFromText(`${product.title || ''} ${product.category || ''} ${product.desc || ''}`);
  const useful = words.filter((w) => w.length > 3).slice(0, 5);
  return Array.from(new Set([...fromTags, ...fromTag, ...useful])).slice(0, 8);
}

function matchImageByAIHints(product={}) {
  const raw = typeof product.image === 'string' ? product.image.trim() : '';
  if (raw) return raw;
  const text = normalizeText(`${product.title || ''} ${product.desc || ''} ${product.category || ''} ${(product.tags || []).join(' ')}`);
  const found = IMAGE_KEYWORD_MAP.find((item) => item.words.some((word) => text.includes(word)));
  if (found) return found.image;
  const catFallback = CATEGORY_IMAGE_FALLBACKS[product.category];
  if (catFallback) return catFallback;
  const hashBase = `${product.title || ''}${product.category || ''}`.length || Date.now();
  return IMAGE_LIBRARY[hashBase % IMAGE_LIBRARY.length] || CATEGORY_IMAGE_FALLBACKS.default;
}

function ensureImageForProduct(product={}) {
  const raw = typeof product.image === 'string' ? product.image.trim() : '';
  if (raw) return raw;
  return matchImageByAIHints(product);
}

const PRODUCT_STORAGE_KEY = 'fusionmart-products-v1';
const ORDERS_STORAGE_KEY = 'fusionmart-orders-v1';
const USERS_STORAGE_KEY = 'fusionmart-users-v1';
const USER_STORAGE_KEY = 'fusionmart-user-v1';
const ADMIN_EMAIL = 'admin@fusionmart.com';
const ADMIN_PASSWORD = 'admin123';
const DEFAULT_USERS = [
  { id:1, name:'Priya Sharma', email:'priya@example.com', role:'user', orders:4, joined:'Jan 2024' },
  { id:2, name:'Rahul Gupta', email:'rahul@example.com', role:'user', orders:7, joined:'Feb 2024' },
  { id:3, name:'Admin User', email:ADMIN_EMAIL, role:'admin', orders:0, joined:'Dec 2023' },
];
const NORMALIZED_INITIAL_PRODUCTS = INITIAL_PRODUCTS.map((p, idx) => ({
  ...p,
  id: Number(p.id) || Date.now() + idx,
  image: ensureImageForProduct(p),
}));

function readStorageJSON(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function normalizeSessionUser(input) {
  if (!input || typeof input !== 'object') return null;
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  if (!email) return null;
  const isAdmin = email === ADMIN_EMAIL;
  const roleRaw = typeof input.role === 'string' ? input.role.trim().toLowerCase() : '';
  const role = isAdmin ? 'admin' : (roleRaw === 'seller' ? 'seller' : 'user');
  const nameRaw = typeof input.name === 'string' ? input.name.trim() : '';
  const fallbackName = email.split('@')[0] || 'User';
  const name = nameRaw || (fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1));
  return {
    name,
    email,
    role,
    avatar: isAdmin ? 'admin' : 'user',
  };
}

function normalizeUsersList(list=[]) {
  const source = Array.isArray(list) ? list : [];
  const normalized = source
    .map((entry, idx) => {
      if (!entry || typeof entry !== 'object') return null;
      const email = typeof entry.email === 'string' ? entry.email.trim().toLowerCase() : '';
      if (!email) return null;
      const isAdmin = email === ADMIN_EMAIL;
      const roleRaw = typeof entry.role === 'string' ? entry.role.trim().toLowerCase() : 'user';
      const nameRaw = typeof entry.name === 'string' ? entry.name.trim() : '';
      const fallback = email.split('@')[0] || `User ${idx + 1}`;
      const orders = Math.max(0, Math.round(Number(entry.orders) || 0));
      return {
        id: Number(entry.id) || Date.now() + idx,
        name: nameRaw || (fallback.charAt(0).toUpperCase() + fallback.slice(1)),
        email,
        role: isAdmin ? 'admin' : (roleRaw === 'seller' ? 'seller' : 'user'),
        orders,
        joined: typeof entry.joined === 'string' && entry.joined.trim() ? entry.joined : 'Now',
      };
    })
    .filter(Boolean);

  if (!normalized.length) {
    return DEFAULT_USERS.map((entry) => ({ ...entry }));
  }

  const deduped = [];
  const seen = new Set();
  normalized.forEach((user) => {
    if (seen.has(user.email)) return;
    seen.add(user.email);
    deduped.push(user);
  });

  if (!seen.has(ADMIN_EMAIL)) {
    deduped.push({ id: Date.now() + 909, name:'Admin User', email:ADMIN_EMAIL, role:'admin', orders:0, joined:'Dec 2023' });
  }
  return deduped.length ? deduped : DEFAULT_USERS.map((u) => ({ ...u }));
}

function normalizeOrderList(list=[]) {
  if (!Array.isArray(list)) return [];
  return list
    .map((entry, idx) => {
      if (!entry || typeof entry !== 'object') return null;
      const items = Array.isArray(entry.items)
        ? entry.items.map((item, itemIdx) => ({
            ...sanitizeProduct(item, itemIdx),
            qty: Math.max(1, Math.round(Number(item?.qty) || 1)),
          }))
        : [];
      const totalRaw = Number(entry.total);
      const total = Number.isFinite(totalRaw) && totalRaw >= 0
        ? Math.round(totalRaw)
        : items.reduce((sum, item) => sum + item.price * item.qty, 0);
      return {
        id: typeof entry.id === 'string' && entry.id.trim() ? entry.id : `FM${Date.now() + idx}`,
        items,
        total,
        status: typeof entry.status === 'string' && entry.status.trim() ? entry.status : 'Confirmed',
        paymentMethod: typeof entry.paymentMethod === 'string' ? entry.paymentMethod : '',
        address: entry.address && typeof entry.address === 'object' ? entry.address : null,
        date: typeof entry.date === 'string' && entry.date.trim()
          ? entry.date
          : new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }),
        userEmail: typeof entry.userEmail === 'string' ? entry.userEmail.trim().toLowerCase() : '',
        userName: typeof entry.userName === 'string' ? entry.userName.trim() : '',
      };
    })
    .filter(Boolean);
}

function sanitizeProduct(product={}, idx=0) {
  const title = typeof product.title === 'string' ? product.title.trim() : '';
  const category = CATEGORIES.includes(product.category) && product.category !== 'All'
    ? product.category
    : 'Electronics';
  const priceValue = Math.round(Number(product.price));
  const price = Number.isFinite(priceValue) && priceValue > 0 ? priceValue : 1;
  const originalRaw = Math.round(Number(product.originalPrice));
  const originalPrice = Number.isFinite(originalRaw) && originalRaw > price ? originalRaw : Math.round(price * 1.3);
  const stockRaw = Math.round(Number(product.stock));
  const stock = Number.isFinite(stockRaw) && stockRaw >= 0 ? stockRaw : 10;
  const ratingRaw = Number(product.rating);
  const rating = Number.isFinite(ratingRaw) && ratingRaw > 0 ? ratingRaw : 4.5;
  const reviewsRaw = Math.round(Number(product.reviews));
  const reviews = Number.isFinite(reviewsRaw) && reviewsRaw >= 0 ? reviewsRaw : 0;
  const idRaw = Number(product.id);
  const id = Number.isFinite(idRaw) && idRaw > 0 ? idRaw : Date.now() + idx;

  return {
    ...product,
    id,
    title: title || `Product ${id}`,
    category,
    price,
    originalPrice,
    stock,
    rating: Number(rating.toFixed(1)),
    reviews,
    emoji: typeof product.emoji === 'string' && product.emoji.trim() ? product.emoji : 'box',
    desc: typeof product.desc === 'string' && product.desc.trim() ? product.desc.trim() : 'No description available.',
    tag: typeof product.tag === 'string' && product.tag.trim() ? product.tag.trim() : 'New',
    tags: inferProductTags(product),
    sellerId: typeof product.sellerId === 'string' && product.sellerId.trim() ? product.sellerId.trim() : 'SV-1001',
    image: matchImageByAIHints(product),
  };
}

function normalizeProductList(list=[]) {
  if (!Array.isArray(list)) return [];
  return list.map((item, idx) => sanitizeProduct(item, idx));
}

function normalizeBehaviorMap(input={}) {
  const base = input && typeof input === 'object' ? input : {};
  const safeBucket = (value) => (value && typeof value === 'object' ? value : {});
  return {
    views: safeBucket(base.views),
    carts: safeBucket(base.carts),
    wishlists: safeBucket(base.wishlists),
    purchases: safeBucket(base.purchases),
  };
}

function normalizeSimpleList(list, fallback=[]) {
  return Array.isArray(list) ? list : fallback;
}

function getProductTextSignature(product={}) {
  const tags = Array.isArray(product.tags) ? product.tags.join(' ') : '';
  return normalizeText(`${product.title || ''} ${product.category || ''} ${product.desc || ''} ${product.tag || ''} ${tags}`);
}

function jaccardSimilarity(aSet, bSet) {
  const a = new Set(aSet);
  const b = new Set(bSet);
  if (!a.size || !b.size) return 0;
  let inter = 0;
  a.forEach((token) => { if (b.has(token)) inter += 1; });
  return inter / (a.size + b.size - inter);
}

function scoreSimilarProduct(baseProduct, candidate, behavior={}) {
  if (!baseProduct || !candidate) return -Infinity;
  const baseTokens = productKeywordsFromText(getProductTextSignature(baseProduct));
  const candidateTokens = productKeywordsFromText(getProductTextSignature(candidate));

  let score = 0;
  if (candidate.category === baseProduct.category) score += 30;
  score += jaccardSimilarity(baseTokens, candidateTokens) * 45;

  const basePrice = Number(baseProduct.price) || 1;
  const candidatePrice = Number(candidate.price) || 1;
  const priceDistance = Math.abs(basePrice - candidatePrice) / Math.max(basePrice, candidatePrice);
  score += Math.max(0, 20 - priceDistance * 20);

  const baseTags = Array.isArray(baseProduct.tags) ? baseProduct.tags : [];
  const candidateTags = Array.isArray(candidate.tags) ? candidate.tags : [];
  score += jaccardSimilarity(baseTags, candidateTags) * 20;

  const idKey = String(candidate.id);
  const views = Number(behavior.views?.[idKey] || 0);
  const carts = Number(behavior.carts?.[idKey] || 0);
  const wish = Number(behavior.wishlists?.[idKey] || 0);
  const buy = Number(behavior.purchases?.[idKey] || 0);
  score += views * 0.3 + carts * 0.7 + wish * 0.6 + buy * 1.2;

  score += Math.min(Number(candidate.rating || 0) * 2.5, 15);
  if (candidate.stock <= 0) score -= 50;
  return score;
}

function getSimilarProducts(baseProduct, productList=[], behavior={}, limit=6) {
  if (!baseProduct) return [];
  const items = Array.isArray(productList) ? productList : [];
  return items
    .filter((item) => item.id !== baseProduct.id)
    .map((item) => ({ item, score: scoreSimilarProduct(baseProduct, item, behavior) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(6, limit))
    .map((entry) => entry.item);
}

const SMART_AI_WELCOME = "Hi! I'm Fusion Smart AI. Ask me any shopping question and I'll help with product suggestions, deals, delivery, returns, payment, and product doubts.";

const AI_SUPPORT_RESPONSES = {
  delivery: "Delivery support: free shipping on orders above ₹499, standard delivery in 2-5 business days, and express delivery in select pincodes. Ask me if you need delivery time for a specific item.",
  returns: "Return support: most orders have 30-day returns, and select electronics have 15-day returns. I can guide you through the return process step-by-step.",
  payment: "Payment support: we accept UPI, cards, net banking, wallets, and EMI options. Ask me if you want help choosing the best way to pay.",
  tracking: "Tracking support: open your Orders section, choose the order and view the shipment status. I can help you understand delivery milestones.",
};

const CATEGORY_HINTS = [
  { category:'Electronics', words:['electronics','electronic','laptop','tablet','ipad','phone','mobile','headphone','earphone','earbud','audio','monitor','smartwatch','mouse'] },
  { category:'Fashion', words:['fashion','shoe','shoes','sneaker','hoodie','jacket','wear','outfit','bag','backpack','denim'] },
  { category:'Home & Kitchen', words:['home','kitchen','cookware','air fryer','fryer','mixer','grinder','coffee','cook'] },
  { category:'Sports', words:['sports','gym','fitness','dumbbell','badminton','basketball','yoga','rope'] },
  { category:'Books', words:['book','books','read','reading','novel'] },
  { category:'Beauty', words:['beauty','skin','cleanser','serum','sunscreen','hair'] },
  { category:'Toys', words:['toy','toys','kids','lego','barbie','puzzle','gift'] },
];

const QUERY_STOP_WORDS = new Set(['the','for','and','with','from','this','that','your','have','need','want','show','best','good','under','over','above','below','please','today']);

function normalizeText(text='') {
  return text.toLowerCase().replace(/[^a-z0-9\s&]/g, ' ');
}

function tokenizeQuery(text='') {
  return normalizeText(text).split(/\s+/).filter(t => t.length > 2 && !QUERY_STOP_WORDS.has(t));
}

function parseBudgetFromQuery(query='') {
  const text = query.toLowerCase().replace(/,/g, '');
  const toNumber = (value, hasK) => Math.round(Number(value) * (hasK ? 1000 : 1));
  const range = { min: null, max: null };

  let m = text.match(/(?:between|from)\s*₹?\s*(\d+(?:\.\d+)?)\s*(k)?\s*(?:and|to)\s*₹?\s*(\d+(?:\.\d+)?)\s*(k)?/);
  if (m) {
    range.min = toNumber(m[1], Boolean(m[2]));
    range.max = toNumber(m[3], Boolean(m[4]));
    return range;
  }

  m = text.match(/(?:under|below|less than|upto|up to|max|within)\s*₹?\s*(\d+(?:\.\d+)?)\s*(k)?/);
  if (m) range.max = toNumber(m[1], Boolean(m[2]));

  m = text.match(/(?:above|over|more than|min(?:imum)?)\s*₹?\s*(\d+(?:\.\d+)?)\s*(k)?/);
  if (m) range.min = toNumber(m[1], Boolean(m[2]));

  return range;
}

function detectCategoryFromQuery(query='') {
  const lower = query.toLowerCase();
  const hit = CATEGORY_HINTS.find(({ words }) => words.some(w => lower.includes(w)));
  return hit ? hit.category : null;
}

function detectPreference(query='') {
  const lower = query.toLowerCase();
  if (/\b(cheap|budget|value|deal|discount|offer|affordable)\b/.test(lower)) return 'value';
  if (/\b(premium|luxury|high[-\s]?end|flagship)\b|\bpro\b/.test(lower)) return 'premium';
  if (/\btop\b|best rated|\brating\b|\breview/.test(lower)) return 'topRated';
  return 'balanced';
}

function detectSupportIntent(query='') {
  const lower = query.toLowerCase();
  if (/(deliver|shipping|ship|pincode)/.test(lower)) return 'delivery';
  if (/(return|refund|replace|exchange)/.test(lower)) return 'returns';
  if (/(payment|pay|upi|emi|card|net banking)/.test(lower)) return 'payment';
  if (/(track|tracking|where is my order|order status)/.test(lower)) return 'tracking';
  return null;
}

function getDiscountPct(product) {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round((1 - product.price / product.originalPrice) * 100);
}

function getDefaultRecommendations(productList=[], limit=3) {
  return [...productList]
    .filter(p => p.stock > 0)
    .sort((a, b) => {
      const aScore = a.rating * 10 + getDiscountPct(a) * 0.5 + Math.min(a.reviews / 300, 8);
      const bScore = b.rating * 10 + getDiscountPct(b) * 0.5 + Math.min(b.reviews / 300, 8);
      return bScore - aScore;
    })
    .slice(0, limit);
}

function scoreProductForQuery(product, analysis) {
  const discount = getDiscountPct(product);
  let score = product.rating * 14 + Math.min(product.reviews / 220, 12) + discount * 0.45;

  if (analysis.category && product.category === analysis.category) score += 30;
  if (!analysis.category) score += 4;
  if (product.stock < 5) score -= 3;

  if (analysis.budget.min !== null && product.price < analysis.budget.min) score -= 20;
  if (analysis.budget.max !== null && product.price > analysis.budget.max) score -= 20;

  if (analysis.preference === 'value') score += discount * 1.1 + (product.price < 7000 ? 8 : 0);
  if (analysis.preference === 'premium') score += Math.min(product.price / 1800, 20) + (product.rating >= 4.6 ? 6 : 0);
  if (analysis.preference === 'topRated') score += product.rating * 8 + Math.min(product.reviews / 130, 20);

  const haystack = normalizeText(`${product.title} ${product.category} ${product.desc} ${product.tag}`);
  let tokenBoost = 0;
  analysis.tokens.forEach(token => {
    if (haystack.includes(token)) tokenBoost += 6;
  });
  score += tokenBoost;

  return score;
}

function recommendationReason(product, analysis) {
  const discount = getDiscountPct(product);
  const parts = [
    `${product.rating.toFixed(1)}★ (${product.reviews.toLocaleString('en-IN')} reviews)`,
    discount > 0 ? `${discount}% off` : 'Top quality pick',
  ];
  if (analysis.preference === 'value') parts.push('Great value for money');
  if (analysis.preference === 'premium') parts.push('Premium experience');
  if (analysis.preference === 'topRated') parts.push('Customer favorite');
  return parts.join(' • ');
}

function buildSmartAIResponse(query='', productList=[]) {
  const trimmed = query.trim();
  const activeProducts = Array.isArray(productList) ? productList : [];

  if (!activeProducts.length) {
    return {
      text: 'No products are available right now. Please check back later or ask for help with our catalog.',
      recommendations: [],
    };
  }

  if (!trimmed) {
    return {
      text: SMART_AI_WELCOME,
      recommendations: getDefaultRecommendations(activeProducts, 3),
    };
  }

  const supportIntent = detectSupportIntent(trimmed);
  const analysis = {
    tokens: tokenizeQuery(trimmed),
    category: detectCategoryFromQuery(trimmed),
    budget: parseBudgetFromQuery(trimmed),
    preference: detectPreference(trimmed),
  };

  const greetingOnly = /^(hi|hello|hey|help)$/i.test(trimmed);
  if (greetingOnly) {
    return {
      text: `${SMART_AI_WELCOME}\nTry: "best shoes under 10k", "top rated books", or "premium headphones".`,
      recommendations: getDefaultRecommendations(activeProducts, 3),
    };
  }

  if (supportIntent && !/(recommend|suggest|best|buy|show|find)/i.test(trimmed)) {
    return { text: AI_SUPPORT_RESPONSES[supportIntent], recommendations: [] };
  }

  let candidates = activeProducts.filter(p => p.stock > 0);
  if (analysis.category) candidates = candidates.filter(p => p.category === analysis.category);

  if (analysis.budget.min !== null || analysis.budget.max !== null) {
    const inBudget = candidates.filter((p) => {
      const minOk = analysis.budget.min === null || p.price >= analysis.budget.min;
      const maxOk = analysis.budget.max === null || p.price <= analysis.budget.max;
      return minOk && maxOk;
    });
    if (inBudget.length >= 2) candidates = inBudget;
  }

  const ranked = candidates
    .map(product => ({ product, score: scoreProductForQuery(product, analysis) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ product }) => ({ ...product, aiReason: recommendationReason(product, analysis) }));

  const recommendations = ranked.length ? ranked : getDefaultRecommendations(activeProducts, 3).map(p => ({ ...p, aiReason: recommendationReason(p, analysis) }));

  const focusBits = [];
  if (analysis.category) focusBits.push(`${analysis.category} category`);
  if (analysis.budget.max !== null) focusBits.push(`budget up to ₹${analysis.budget.max.toLocaleString('en-IN')}`);
  if (analysis.budget.min !== null) focusBits.push(`budget above ₹${analysis.budget.min.toLocaleString('en-IN')}`);
  if (analysis.preference === 'value') focusBits.push('best-value deals');
  if (analysis.preference === 'premium') focusBits.push('premium picks');
  if (analysis.preference === 'topRated') focusBits.push('highly rated products');

  const focusText = focusBits.length ? `I matched your request using ${focusBits.join(', ')}.` : 'I matched your request using ratings, discounts, reviews, and availability.';
  const supportText = supportIntent ? `\n${AI_SUPPORT_RESPONSES[supportIntent]}` : '';

  return {
    text: `${focusText}\nHere are my top suggestions with quick details.${supportText}`,
    recommendations,
  };
}
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CONTEXT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [user, setUser] = React.useState(() => normalizeSessionUser(readStorageJSON(USER_STORAGE_KEY)));
  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);
  const [orders, setOrders] = React.useState(() => normalizeOrderList(readStorageJSON(ORDERS_STORAGE_KEY)));
  const [page, setPage] = React.useState('home');
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [authOpen, setAuthOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [chatOpen, setChatOpen] = React.useState(false);
  const [adminTab, setAdminTab] = React.useState('products');
  const [sellerTab, setSellerTab] = React.useState('overview');
  const [users, setUsers] = React.useState(() => normalizeUsersList(readStorageJSON(USERS_STORAGE_KEY)));
  const [sellers, setSellers] = React.useState(() => normalizeSimpleList(readStorageJSON(SELLERS_STORAGE_KEY), DEFAULT_SELLERS.map((item) => ({ ...item }))));
  const [behavior, setBehavior] = React.useState(() => normalizeBehaviorMap(readStorageJSON(BEHAVIOR_STORAGE_KEY)));
  const [paymentLogs, setPaymentLogs] = React.useState(() => normalizeSimpleList(readStorageJSON(PAYMENT_LOG_STORAGE_KEY), []));
  const [coupons, setCoupons] = React.useState(() => normalizeSimpleList(readStorageJSON(COUPON_STORAGE_KEY), DEFAULT_COUPONS.map((item) => ({ ...item }))));
  const [banners, setBanners] = React.useState(() => normalizeSimpleList(readStorageJSON(BANNER_STORAGE_KEY), DEFAULT_BANNERS.map((item) => ({ ...item }))));
  const [returnRequests, setReturnRequests] = React.useState(() => normalizeSimpleList(readStorageJSON(RETURNS_STORAGE_KEY), []));
  const [reviews, setReviews] = React.useState(() => normalizeSimpleList(readStorageJSON(REVIEWS_STORAGE_KEY), []));
  const [recentViews, setRecentViews] = React.useState(() => normalizeSimpleList(readStorageJSON(RECENT_VIEWS_STORAGE_KEY), []));
  const [notifications, setNotifications] = React.useState(() => normalizeSimpleList(readStorageJSON(NOTIFICATIONS_STORAGE_KEY), []));
  const [compare, setCompare] = React.useState([]);
  const [theme, setTheme] = React.useState(() => (localStorage.getItem(THEME_STORAGE_KEY) || 'dark'));
  const [language, setLanguage] = React.useState(() => (localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en'));
  const [authRate, setAuthRate] = React.useState({ count:0, windowStart:Date.now() });
  const [products, setProducts] = React.useState(() => {
    try {
      const stored = localStorage.getItem(PRODUCT_STORAGE_KEY);
      if (!stored) return NORMALIZED_INITIAL_PRODUCTS.map((p) => ({ ...p }));
      const parsed = JSON.parse(stored);
      const normalized = normalizeProductList(parsed);
      return normalized.length ? normalized : NORMALIZED_INITIAL_PRODUCTS.map((p) => ({ ...p }));
    } catch (err) {
      return NORMALIZED_INITIAL_PRODUCTS.map((p) => ({ ...p }));
    }
  });
  React.useEffect(() => {
    setProducts((prev) => prev.map((item) => {
      if (item.id === 2 || String(item.title || '').toLowerCase().includes('nike air max 270')) {
        if (item.image === 'image/nike-air.avif') return item;
        return { ...item, image:'image/nike-air.avif' };
      }
      return item;
    }));
  }, []);

  const addToast = (msg, type='info') => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3500);
  };

  const trackBehavior = React.useCallback((type, productId) => {
    const safeType = ['views','carts','wishlists','purchases'].includes(type) ? type : null;
    const id = productId !== undefined && productId !== null ? String(productId) : '';
    if (!safeType || !id) return;
    setBehavior((prev) => {
      const next = normalizeBehaviorMap(prev);
      const current = Number(next[safeType][id] || 0);
      next[safeType] = { ...next[safeType], [id]: current + 1 };
      return next;
    });
  }, []);

  const addNotification = React.useCallback((title, type='info') => {
    const row = {
      id: `N-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      title,
      type,
      date: new Date().toLocaleString('en-IN'),
      read: false,
    };
    setNotifications((prev) => [row, ...prev].slice(0, 100));
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
    } catch (err) {
      // Ignore storage failures in restricted/private mode.
    }
  }, [products]);

  React.useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (err) {
      // Ignore storage failures in restricted/private mode.
    }
  }, [orders]);

  React.useEffect(() => {
    const normalized = normalizeUsersList(users);
    const changed = normalized.length !== users.length || normalized.some((entry, idx) => {
      const current = users[idx];
      return !current
        || entry.id !== current.id
        || entry.email !== current.email
        || entry.role !== current.role
        || entry.name !== current.name
        || Number(entry.orders) !== Number(current.orders)
        || entry.joined !== current.joined;
    });
    if (changed) {
      setUsers(normalized);
      return;
    }
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(normalized));
    } catch (err) {
      // Ignore storage failures in restricted/private mode.
    }
  }, [users]);

  React.useEffect(() => {
    try { localStorage.setItem(SELLERS_STORAGE_KEY, JSON.stringify(sellers)); } catch (err) {}
  }, [sellers]);
  React.useEffect(() => {
    try { localStorage.setItem(BEHAVIOR_STORAGE_KEY, JSON.stringify(behavior)); } catch (err) {}
  }, [behavior]);
  React.useEffect(() => {
    try { localStorage.setItem(PAYMENT_LOG_STORAGE_KEY, JSON.stringify(paymentLogs)); } catch (err) {}
  }, [paymentLogs]);
  React.useEffect(() => {
    try { localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupons)); } catch (err) {}
  }, [coupons]);
  React.useEffect(() => {
    try { localStorage.setItem(BANNER_STORAGE_KEY, JSON.stringify(banners)); } catch (err) {}
  }, [banners]);
  React.useEffect(() => {
    try { localStorage.setItem(RETURNS_STORAGE_KEY, JSON.stringify(returnRequests)); } catch (err) {}
  }, [returnRequests]);
  React.useEffect(() => {
    try { localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews)); } catch (err) {}
  }, [reviews]);
  React.useEffect(() => {
    try { localStorage.setItem(RECENT_VIEWS_STORAGE_KEY, JSON.stringify(recentViews)); } catch (err) {}
  }, [recentViews]);
  React.useEffect(() => {
    try { localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(notifications)); } catch (err) {}
  }, [notifications]);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch (err) {}
  }, [theme]);
  React.useEffect(() => {
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, language); } catch (err) {}
  }, [language]);

  React.useEffect(() => {
    if (!user) {
      try { localStorage.removeItem(USER_STORAGE_KEY); } catch (err) {}
      return;
    }
    const normalized = normalizeSessionUser(user);
    if (!normalized) {
      setUser(null);
      return;
    }
    const changed = normalized.email !== user.email || normalized.role !== user.role || normalized.name !== user.name || normalized.avatar !== user.avatar;
    if (changed) {
      setUser(normalized);
      return;
    }
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(normalized));
    } catch (err) {
      // Ignore storage failures in restricted/private mode.
    }
  }, [user]);

  React.useEffect(() => {
    if (!selectedProduct) return;
    const latest = products.find((p) => p.id === selectedProduct.id);
    if (!latest) {
      setSelectedProduct(null);
      if (page === 'detail') setPage('products');
    } else if (latest !== selectedProduct) {
      setSelectedProduct(latest);
    }
  }, [products, selectedProduct, page]);

  const addToCart = (product, qty=1) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? {...i, qty: i.qty+qty} : i);
      return [...prev, {...product, qty}];
    });
    trackBehavior('carts', product.id);
    addToast(`${product.title} added to cart`, 'success');
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty < 1) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? {...i, qty} : i));
  };
  const clearCart = () => setCart([]);

  const addProduct = (productInput) => {
    const sanitized = sanitizeProduct({
      ...productInput,
      id: Date.now() + Math.floor(Math.random() * 1000),
      image: matchImageByAIHints(productInput),
    });
    setProducts(prev => [...prev, sanitized]);
    addNotification(`New product added: ${sanitized.title}`, 'info');
    return sanitized;
  };

  const updateProduct = (id, updates={}) => {
    const targetId = Number(id);
    let updated = null;
    setProducts(prev => prev.map((item) => {
      if (item.id !== targetId) return item;
      updated = sanitizeProduct({
        ...item,
        ...updates,
        id: targetId,
      });
      return updated;
    }));
    if (!updated) return null;

    setCart(prev => prev.map(item => item.id === targetId ? { ...item, ...updated, qty: item.qty } : item));
    setWishlist(prev => prev.map(item => item.id === targetId ? { ...item, ...updated } : item));
    setSelectedProduct(prev => (prev && prev.id === targetId ? { ...prev, ...updated } : prev));
    return updated;
  };

  const removeProduct = (id) => {
    const targetId = Number(id);
    setProducts(prev => prev.filter(item => item.id !== targetId));
    setCart(prev => prev.filter(item => item.id !== targetId));
    setWishlist(prev => prev.filter(item => item.id !== targetId));
    setSelectedProduct(prev => (prev && prev.id === targetId ? null : prev));
    addNotification(`Product removed (ID ${targetId})`, 'warning');
  };

  const toggleWishlist = (product) => {
    const isIn = wishlist.some(i => i.id === product.id);
    if (isIn) {
      setWishlist(prev => prev.filter(i => i.id !== product.id));
      addToast('Removed from wishlist', 'info');
    } else {
      setWishlist(prev => [...prev, product]);
      trackBehavior('wishlists', product.id);
      addToast('Added to wishlist', 'success');
    }
  };

  const login = (email, password, preferredRole='user') => {
    const now = Date.now();
    const currentWindow = now - authRate.windowStart <= 60 * 1000 ? authRate : { count:0, windowStart:now };
    if (currentWindow.count >= 8) {
      addToast('Too many login attempts. Try again in a minute.', 'error');
      return false;
    }
    setAuthRate({ count: currentWindow.count + 1, windowStart: currentWindow.windowStart });

    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    if (!normalizedEmail) {
      addToast('Enter a valid email', 'error');
      return false;
    }

    if (normalizedEmail === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminSession = { name:'Admin User', email:normalizedEmail, role:'admin', avatar:'admin' };
      setUser(adminSession);
      setUsers(prev => normalizeUsersList(prev));
      setAuthRate({ count:0, windowStart:Date.now() });
      setAuthOpen(false); addToast('Welcome back, Admin!', 'success'); return true;
    }

    if (normalizedEmail === ADMIN_EMAIL) {
      addToast('Admin password incorrect', 'error');
      return false;
    }

    if (password.length >= 6) {
      const existingUser = users.find(u => u.email === normalizedEmail);
      const baseName = existingUser?.name || normalizedEmail.split('@')[0] || 'User';
      const name = baseName.charAt(0).toUpperCase() + baseName.slice(1);
      const role = existingUser?.role || (preferredRole === 'seller' ? 'seller' : 'user');
      setUser({ name, email: normalizedEmail, role, avatar: role === 'seller' ? 'dash' : 'user' });
      if (!existingUser) {
        setUsers(prev => normalizeUsersList([
          ...prev,
          { id:Date.now(), name, email: normalizedEmail, role, orders:0, joined:'Now' },
        ]));
      }
      setAuthRate({ count:0, windowStart:Date.now() });
      setAuthOpen(false); addToast('Welcome to Fusion Mart!', 'success'); return true;
    }
    addToast('Invalid credentials', 'error'); return false;
  };

  const signup = (name, email, password, role='user') => {
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const cleanName = typeof name === 'string' ? name.trim() : '';
    if (cleanName && normalizedEmail && password.length >= 6) {
      if (normalizedEmail === ADMIN_EMAIL) {
        addToast('Admin account cannot be created from signup', 'error');
        return false;
      }
      if (users.some(u => u.email === normalizedEmail)) {
        addToast('Email already registered. Please sign in.', 'error');
        return false;
      }

      const finalRole = role === 'seller' ? 'seller' : 'user';
      setUser({ name: cleanName, email: normalizedEmail, role:finalRole, avatar:finalRole === 'seller' ? 'dash' : 'user' });
      setUsers(prev => normalizeUsersList([
        ...prev,
        { id:Date.now(), name: cleanName, email: normalizedEmail, role:finalRole, orders:0, joined:'Now' },
      ]));
      if (finalRole === 'seller') {
        setSellers((prev) => ([
          ...prev,
          { id:`SV-${Date.now()}`, storeName:`${cleanName}'s Store`, owner:normalizedEmail, status:'pending', rating:0, totalSales:0, commissionPct:12 },
        ]));
        addNotification(`New seller signup pending approval: ${cleanName}`, 'warning');
      }
      setAuthOpen(false); addToast('Account created! Welcome', 'success'); return true;
    }
    addToast('Please fill all fields correctly', 'error'); return false;
  };

  const registerSellerProfile = (storeName) => {
    if (!user) return false;
    const safeStore = String(storeName || '').trim();
    if (!safeStore) return false;
    const exists = sellers.some((seller) => String(seller.owner).toLowerCase() === String(user.email).toLowerCase());
    if (exists) return true;
    setSellers((prev) => ([
      ...prev,
      { id:`SV-${Date.now()}`, storeName:safeStore, owner:user.email, status:'pending', rating:0, totalSales:0, commissionPct:12 },
    ]));
    setUsers((prev) => prev.map((entry) => (
      entry.email === user.email ? { ...entry, role:'seller' } : entry
    )));
    setUser((prev) => prev ? { ...prev, role:'seller', avatar:'dash' } : prev);
    addNotification(`Seller verification requested by ${user.name}`, 'warning');
    addToast('Seller profile created. Waiting for admin approval.', 'success');
    return true;
  };

  const logout = () => { setUser(null); setPage('home'); addToast('Logged out successfully', 'info'); };

  const cartTotal = cart.reduce((sum,i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum,i) => sum + i.qty, 0);

  const filteredProducts = products.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const needle = searchQuery.toLowerCase();
    const matchSearch = !searchQuery
      || p.title.toLowerCase().includes(needle)
      || p.category.toLowerCase().includes(needle)
      || String(p.desc || '').toLowerCase().includes(needle)
      || (Array.isArray(p.tags) && p.tags.some((tag) => String(tag).toLowerCase().includes(needle)));
    return matchCat && matchSearch;
  });

  const trackProductView = (product) => {
    if (!product) return;
    trackBehavior('views', product.id);
    setRecentViews((prev) => {
      const next = [product, ...prev.filter((item) => item.id !== product.id)];
      return next.slice(0, 20);
    });
  };

  const toggleCompare = (product) => {
    const exists = compare.some((item) => item.id === product.id);
    if (exists) {
      setCompare((prev) => prev.filter((item) => item.id !== product.id));
      return;
    }
    if (compare.length >= 4) {
      addToast('Compare supports up to 4 products', 'info');
      return;
    }
    setCompare((prev) => [...prev, product]);
  };

  const placeOrder = (paymentMethod, address, paymentMeta={}) => {
    const userEmail = user?.email ? String(user.email).trim().toLowerCase() : '';
    const userName = user?.name ? String(user.name).trim() : '';
    const safeItems = cart.map((entry) => ({ ...entry, qty: Math.max(1, Number(entry.qty) || 1) }));
    const sellerIds = Array.from(new Set(safeItems.map((item) => item.sellerId || 'SV-1001')));
    const order = {
      id: 'FM'+Date.now(),
      items: safeItems,
      total: Number(paymentMeta.total) || cartTotal,
      status: 'Confirmed',
      paymentMethod,
      paymentStatus: paymentMeta.status || 'success',
      invoiceId: `INV-${Date.now()}`,
      address,
      date: new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }),
      userEmail,
      userName,
      timeline: [
        { label:'Order Confirmed', date:new Date().toLocaleString('en-IN') },
      ],
      sellerIds,
    };
    setOrders(prev => [order, ...prev]);
    setProducts((prev) => prev.map((item) => {
      const hit = safeItems.find((cartItem) => cartItem.id === item.id);
      if (!hit) return item;
      return { ...item, stock: Math.max(0, Number(item.stock || 0) - hit.qty) };
    }));
    safeItems.forEach((item) => trackBehavior('purchases', item.id));
    setPaymentLogs((prev) => ([
      {
        id:`PAY-${Date.now()}`,
        orderId:order.id,
        gateway:paymentMethod,
        amount:Number(paymentMeta.total) || cartTotal,
        status:paymentMeta.status || 'success',
        txnRef:paymentMeta.txnRef || `TXN-${Math.floor(Math.random() * 1000000)}`,
        date:new Date().toLocaleString('en-IN'),
      },
      ...prev,
    ]));
    if (userEmail) {
      setUsers(prev => prev.map((entry) => (
        entry.email === userEmail
          ? { ...entry, orders: (Number(entry.orders) || 0) + 1 }
          : entry
      )));
    }
    addNotification(`Order ${order.id} placed successfully`, 'success');
    clearCart();
    return order;
  };

  const recommendedForUser = React.useMemo(() => {
    if (!products.length) return [];
    const base = selectedProduct || recentViews[0] || products[0];
    return getSimilarProducts(base, products, behavior, 8);
  }, [selectedProduct, recentViews, products, behavior]);

  return (
    <AppContext.Provider value={{
      user, cart, wishlist, orders, page, setPage,
      selectedProduct, setSelectedProduct,
      cartOpen, setCartOpen, authOpen, setAuthOpen,
      toasts, addToast, searchQuery, setSearchQuery,
      selectedCategory, setSelectedCategory,
      chatOpen, setChatOpen, adminTab, setAdminTab, sellerTab, setSellerTab,
      users, setUsers, products, sellers, setSellers, behavior,
      paymentLogs, coupons, setCoupons, banners, setBanners, returnRequests, setReturnRequests,
      reviews, setReviews, notifications, setNotifications, recentViews, compare,
      recommendedForUser, theme, setTheme, language, setLanguage,
      addToCart, removeFromCart, updateQty, clearCart,
      addProduct, updateProduct, removeProduct,
      toggleWishlist, login, signup, logout, registerSellerProfile,
      cartTotal, cartCount, filteredProducts, placeOrder,
      trackProductView, toggleCompare, addNotification, trackBehavior,
    }}>
      {children}
    </AppContext.Provider>
  );
}

const useApp = () => React.useContext(AppContext);

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function Icon({ name, size=16, className='' }) {
  const glyphs = {
    cart: 'C', search: 'S', user: 'U', heart: 'H', heartFull: 'H',
    star: '*', close: 'X', menu: 'M', home: 'H', box: 'B',
    check: 'V', plus: '+', minus: '-', trash: 'T', edit: 'E',
    ai: 'AI', chat: 'C', send: '>', arrow: '>', back: '<',
    filter: 'F', tag: 'T', truck: 'D', shield: 'S', spark: '*',
    admin: 'A', orders: 'O', dash: 'D', logout: 'L',
    payment: 'P', location: 'L', phone: 'P', mail: 'M',
    warning: '!', info: 'i', eye: 'O', lock: 'K', confetti: '*', refresh: 'R',
    mic:'M', sun:'S', moon:'N', seller:'V', bell:'B', wallet:'W', compare:'C', globe:'G',
  };
  const palette = {
    cart:'rgba(255,107,43,0.22)', search:'rgba(79,142,247,0.22)', user:'rgba(79,142,247,0.22)',
    heart:'rgba(255,68,102,0.2)', heartFull:'rgba(255,68,102,0.3)', star:'rgba(245,200,66,0.25)',
    check:'rgba(34,212,126,0.25)', warning:'rgba(255,68,102,0.22)', info:'rgba(79,142,247,0.22)',
    shield:'rgba(34,212,126,0.22)', truck:'rgba(79,142,247,0.22)', payment:'rgba(245,200,66,0.24)',
    ai:'rgba(255,154,92,0.24)', confetti:'rgba(245,200,66,0.24)',
    sun:'rgba(245,200,66,0.28)', moon:'rgba(79,142,247,0.28)', seller:'rgba(34,212,126,0.22)',
  };
  const sizeVal = typeof size === 'number' ? `${size}px` : size;
  return (
    <span
      className={`ui-anim-icon ${className}`}
      style={{ '--icon-size': sizeVal, '--icon-bg': palette[name] || 'rgba(255,107,43,0.18)' }}
      aria-hidden="true"
    >
      <span className="ui-anim-glyph">{glyphs[name] || '*'}</span>
    </span>
  );
}

function categoryToIcon(category='') {
  const key = category.toLowerCase();
  if (key.includes('electronic')) return 'dash';
  if (key.includes('fashion')) return 'tag';
  if (key.includes('home')) return 'home';
  if (key.includes('sport')) return 'star';
  if (key.includes('book')) return 'orders';
  if (key.includes('beauty')) return 'spark';
  if (key.includes('toy')) return 'box';
  return 'box';
}

function ProductImage({ product, className='', alt='', fallbackSize='1.4rem', style }) {
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => { setFailed(false); }, [product?.image]);
  const showImage = Boolean(product?.image) && !failed;

  return (
    <div className={className} style={style}>
      {showImage ? (
        <img
          src={product.image}
          alt={alt || product?.title || 'Product image'}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <Icon name={categoryToIcon(product?.category)} size={fallbackSize} />
      )}
    </div>
  );
}

function Toast() {
  const { toasts } = useApp();
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast ${t.type}`}>
          <Icon name={t.type==='success'?'check':t.type==='error'?'warning':'info'} size={14} />
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
}

/* â”€â”€ NAVBAR â”€â”€ */
function Navbar() {
  const {
    user, cartCount, setCartOpen, setAuthOpen, logout, setPage, page,
    searchQuery, setSearchQuery, setSelectedCategory, products,
    theme, setTheme, language, setLanguage, notifications
  } = useApp();
  const [showSugg, setShowSugg] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState([]);
  const [listening, setListening] = React.useState(false);
  const i18n = { search:'Search products, brands, categories...', cart:'Cart', signIn:'Sign In' };

  const handleSearch = (val) => {
    setSearchQuery(val);
    if (val.length > 1) {
      const needle = val.toLowerCase();
      const s = products
        .filter((p) => {
          const text = `${p.title} ${p.category} ${p.desc} ${(p.tags || []).join(' ')}`.toLowerCase();
          return text.includes(needle);
        })
        .slice(0, 7);
      setSuggestions(s);
      setShowSugg(true);
    } else {
      setShowSugg(false);
    }
  };

  const pickSugg = (p) => {
    setSearchQuery(p.title);
    setShowSugg(false);
    setSelectedCategory('All');
    setPage('products');
  };

  const runVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const rec = new SpeechRecognition();
    rec.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    setListening(true);
    rec.onresult = (event) => {
      const text = event.results?.[0]?.[0]?.transcript || '';
      if (text) {
        handleSearch(text);
        setPage('products');
      }
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    rec.start();
  };

  const unreadNotifications = notifications.filter((item) => !item.read).length;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo" onClick={() => setPage('home')}>
          <span className="brand-logo">
            <span className="brand-mark"><span className="brand-mark-core">F</span></span>
            <span className="brand-word">Fu<span className="brand-accent">si</span>on Mart 2.O</span>
          </span>
        </div>

        <div style={{ position:'relative', flex:1, maxWidth:480 }}>
          <div className="nav-search">
            <Icon name="search" size={14} />
            <input
              placeholder={i18n.search}
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              onFocus={() => searchQuery.length > 1 && setShowSugg(true)}
              onBlur={() => setTimeout(() => setShowSugg(false), 150)}
              onKeyDown={e => { if(e.key==='Enter'){ setShowSugg(false); setPage('products'); } }}
            />
            {searchQuery && (
              <span style={{cursor:'pointer',display:'inline-flex'}} onClick={()=>{setSearchQuery('');setShowSugg(false);}}>
                <Icon name="close" size={10} />
              </span>
            )}
            <button
              className="btn btn-ghost btn-sm btn-icon"
              style={{width:30,height:30}}
              onClick={runVoiceSearch}
              title="Voice search"
              disabled={listening}
            >
              <Icon name="mic" size={11} />
            </button>
          </div>
          {showSugg && suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map(p => (
                <div key={p.id} className="search-sugg-item" onMouseDown={() => pickSugg(p)}>
                  <ProductImage product={p} alt={p.title} className="search-sugg-thumb" fallbackSize="1.1rem" />
                  <div>
                    <div style={{fontSize:13,fontWeight:500}}>{p.title}</div>
                    <div style={{fontSize:11,color:'var(--text3)'}}>{p.category}  •  ₹{p.price.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="nav-actions">
          {['home','products', ...(user?.role === 'seller' ? ['seller'] : [])].map(p => (
            <button key={p} className="btn btn-ghost btn-sm" style={{color: page===p?'var(--accent)':'var(--text2)',textTransform:'capitalize'}}
              onClick={()=>setPage(p)}>{p.charAt(0).toUpperCase()+p.slice(1)}</button>
          ))}

          {user && (
            <button className="btn btn-ghost btn-sm" onClick={()=>setPage(user.role==='admin'?'admin':user.role==='seller'?'seller':'dashboard')}>
              {user.role==='admin'?'Admin':user.role==='seller'?'Seller':'Dashboard'}
            </button>
          )}

          <button
            className="btn btn-ghost btn-sm btn-icon"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={12} />
          </button>
          <button
            className="btn btn-ghost btn-sm btn-icon"
            title="Toggle language"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          >
            <Icon name="globe" size={12} />
          </button>
          <button className="btn btn-ghost btn-sm btn-icon" title="Notifications" onClick={()=>setPage(user ? (user.role === 'admin' ? 'admin' : user.role === 'seller' ? 'seller' : 'dashboard') : 'home')}>
            <Icon name="bell" size={12} />
            {unreadNotifications > 0 && <span className="cart-count" style={{top:-4,right:-2}}>{Math.min(9, unreadNotifications)}</span>}
          </button>

          <button className="nav-cart-btn" onClick={()=>setCartOpen(true)}>
            <Icon name="cart" size={16} />
            <span className="fw-600">{i18n.cart}</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          {user ? (
            <div className="flex gap-8">
              <button className="btn btn-secondary btn-sm" style={{gap:6}} onClick={()=>setPage(user.role==='seller'?'seller':'dashboard')}>
                <Icon name={user.avatar || 'user'} size={14} />
                <span style={{maxWidth:80,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{user.name.split(' ')[0]}</span>
              </button>
              <button className="btn btn-ghost btn-sm btn-icon" onClick={logout} title="Logout"><Icon name="logout" size={12} /></button>
            </div>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={()=>setAuthOpen(true)}>{i18n.signIn}</button>
          )}
        </div>
      </div>
    </nav>
  );
}

/* â”€â”€ HERO â”€â”€ */
function Hero() {
  const { setPage, setSelectedProduct, products } = useApp();
  const featured = products.slice(0,4);
  return (
    <section className="hero fade-in">
      <div className="hero-grid">
        <div>
          <div className="hero-badge">
            <Icon name="spark" size={14} /> AI-Powered Smart Shopping
          </div>
          <h1 className="hero-title">
            Shop Smarter,
            <span>Save Bigger.</span>
          </h1>
          <p className="hero-subtitle">
            Discover millions of products with AI recommendations tailored just for you. 
            From electronics to fashion - Fusion Mart has it all.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={()=>setPage('products')}>
              <Icon name="cart" size={14} /> Shop Now
            </button>
            <button className="btn btn-secondary btn-lg" onClick={()=>setPage('products')}>
              Today's Deals →
            </button>
          </div>
          <div className="hero-stats">
            {[['2M+','Products'],['50K+','Brands'],['4.8','Rating'],['Free','Delivery']].map(([n,l]) => (
              <div key={l}>
                <div className="hero-stat-num">{n}</div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          {featured.map((p,i) => (
            <div key={p.id} className="hero-card" onClick={()=>{setSelectedProduct(p);setPage('detail');}}>
              <ProductImage
                product={p}
                alt={p.title}
                className="hero-card-img"
                fallbackSize="2.2rem"
                style={{background:`hsl(${i*80+20},30%,12%)`}}
              />
              <div style={{fontSize:12,fontWeight:600,marginTop:4,lineHeight:1.3}}>{p.title.substring(0,28)}...</div>
              <div style={{color:'var(--accent)',fontSize:13,fontWeight:700}}>₹{p.price.toLocaleString('en-IN')}</div>
              {p.tag && <span className="badge badge-accent" style={{alignSelf:'flex-start'}}>{p.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€ PRODUCT CARD â”€â”€ */
function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, setSelectedProduct, setPage, compare, toggleCompare, trackProductView } = useApp();
  const isWishlisted = wishlist.some(i => i.id === product.id);
  const compared = compare.some(i => i.id === product.id);
  const discount = Math.round((1 - product.price/product.originalPrice)*100);
  const stars = Math.max(1, Math.round(product.rating));

  return (
    <div className="product-card fade-in">
      <div className="product-img" onClick={()=>{setSelectedProduct(product);trackProductView(product);setPage('detail');}}>
        <ProductImage product={product} alt={product.title} className="product-media" fallbackSize="4rem" />
        {discount > 0 && <span className="product-discount">-{discount}%</span>}
        <button className="product-wishlist" onClick={e=>{e.stopPropagation();toggleWishlist(product);}}>
          <Icon name={isWishlisted ? 'heartFull' : 'heart'} size={14} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <div className="product-name" onClick={()=>{setSelectedProduct(product);trackProductView(product);setPage('detail');}}>{product.title}</div>
        <div className="product-rating">
          <span className="stars" style={{display:'inline-flex',gap:2}}>{Array.from({length:stars}).map((_,i)=><Icon key={i} name="star" size={10} />)}</span>
          <span style={{fontSize:13,color:'var(--text)',fontWeight:600}}>{product.rating}</span>
          <span className="rating-count">({product.reviews.toLocaleString()})</span>
          {product.tag && <span className="badge badge-accent" style={{marginLeft:4}}>{product.tag}</span>}
        </div>
        <div className="product-price">
          <span className="price-main">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          <span style={{fontSize:12,color:'var(--green)',fontWeight:600}}>{discount}% off</span>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn btn-primary" style={{flex:1,fontSize:13,padding:'9px 12px'}} onClick={()=>addToCart(product)}>
            Add to Cart
          </button>
          <button className="btn btn-secondary btn-sm btn-icon" onClick={()=>{setSelectedProduct(product);trackProductView(product);setPage('detail');}}>
            <Icon name="eye" size={13} />
          </button>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:6,fontSize:11,color:'var(--text3)'}}>
          <button className="btn btn-ghost btn-sm" style={{padding:'3px 8px',fontSize:11}} onClick={()=>toggleCompare(product)}>
            {compared ? 'Compared' : 'Compare'}
          </button>
          <span>Seller: {product.sellerId || 'SV-1001'}</span>
        </div>
        {product.stock < 10 && <div style={{fontSize:11,color:'var(--red)',marginTop:6,display:'flex',alignItems:'center',gap:6}}><Icon name="warning" size={12} /> Only {product.stock} left!</div>}
      </div>
    </div>
  );
}

/* â”€â”€ HOME PAGE â”€â”€ */
function HomePage() {
  const { setSelectedCategory, setPage, setChatOpen, products, banners, recommendedForUser } = useApp();
  const topPicks = products.filter(p => p.rating >= 4.7).slice(0,4);

  return (
    <div className="fade-in">
      <Hero />
      {/* Category Strip */}
      <div style={{background:'var(--bg2)',borderBottom:'1px solid var(--border)',padding:'0 20px'}}>
        <div className="container" style={{display:'flex',gap:0,overflowX:'auto',padding:'0',maxWidth:1280}}>
          {['Electronics','Fashion','Home & Kitchen','Sports','Books','Beauty','Toys'].map(cat => (
            <button key={cat} onClick={()=>{setSelectedCategory(cat);setPage('products');}}
              style={{padding:'14px 20px',background:'none',border:'none',color:'var(--text2)',
                fontFamily:'var(--font-body)',fontSize:13,fontWeight:500,cursor:'pointer',
                whiteSpace:'nowrap',borderBottom:'2px solid transparent',transition:'all .2s'}}
              onMouseEnter={e=>{e.target.style.color='var(--accent)';e.target.style.borderBottomColor='var(--accent)';}}
              onMouseLeave={e=>{e.target.style.color='var(--text2)';e.target.style.borderBottomColor='transparent';}}
            >{cat}</button>
          ))}
        </div>
      </div>

      <div className="container" style={{maxWidth:1280}}>
        <div style={{marginTop:24,display:'grid',gap:10}}>
          {banners.filter((b) => b.active).slice(0, 2).map((banner) => (
            <div key={banner.id} className="card" style={{padding:'16px 20px',background:'linear-gradient(140deg,rgba(255,107,43,0.1),rgba(79,142,247,0.05))'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
                <div>
                  <div style={{fontFamily:'var(--font-head)',fontWeight:700}}>{banner.title}</div>
                  <div style={{fontSize:13,color:'var(--text2)'}}>{banner.subtitle}</div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={()=>setPage('products')}>{banner.cta}</button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendation Strip */}
        <div style={{marginTop:48}}>
          <div className="ai-strip">
            <span className="ai-icon"><Icon name="ai" size={20} /></span>
            <div className="ai-strip-text">
              <h4>Smart AI Recommendations</h4>
              <p>Ask AI for product suggestions, budget-friendly picks, delivery details, returns, or any shopping doubt.</p>
            </div>
            <button className="btn btn-secondary btn-sm" style={{marginLeft:'auto'}} onClick={()=>setChatOpen(true)}>Ask AI</button>
          </div>
          <div className="grid-4">
            {topPicks.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>

        {recommendedForUser.length > 0 && (
          <div style={{marginTop:40}}>
            <div className="section-header">
              <h2 className="section-title">Trending For <span>You</span></h2>
            </div>
            <div className="grid-4">
              {recommendedForUser.slice(0, 4).map((item) => <ProductCard key={`rfu-${item.id}`} product={item} />)}
            </div>
          </div>
        )}

        {/* Flash Deals */}
        <div style={{marginTop:56}}>
          <div className="section-header">
            <h2 className="section-title"><Icon name="spark" size={16} /> Flash <span>Deals</span></h2>
            <button className="btn btn-secondary btn-sm" onClick={()=>setPage('products')}>View All</button>
          </div>
          <div className="grid-4">
            {products.filter(p => Math.round((1-p.price/p.originalPrice)*100) >= 30).slice(0,4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Category Cards */}
        <div style={{marginTop:56,marginBottom:56}}>
          <div className="section-header">
            <h2 className="section-title">Shop by <span>Category</span></h2>
          </div>
          <div className="grid-4">
            {[
              {name:'Electronics',icon:'dash',color:'rgba(79,142,247,0.12)',items:156},
              {name:'Fashion',icon:'tag',color:'rgba(255,107,43,0.10)',items:834},
              {name:'Home & Kitchen',icon:'home',color:'rgba(34,212,126,0.10)',items:423},
              {name:'Sports',icon:'star',color:'rgba(245,200,66,0.10)',items:291},
            ].map(cat => (
              <div key={cat.name} className="card" style={{background:cat.color,cursor:'pointer',textAlign:'center',padding:'32px 16px'}}
                onClick={()=>{setSelectedCategory(cat.name);setPage('products');}}>
                <div style={{marginBottom:12,display:'flex',justifyContent:'center'}}><Icon name={cat.icon} size={34} /></div>
                <div style={{fontFamily:'var(--font-head)',fontWeight:700,fontSize:'1rem'}}>{cat.name}</div>
                <div style={{fontSize:12,color:'var(--text2)',marginTop:4}}>{cat.items}+ items</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* â”€â”€ PRODUCTS PAGE â”€â”€ */
function ProductsPage() {
  const { filteredProducts, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, compare, setPage, setSelectedProduct, trackProductView } = useApp();
  const [sort, setSort] = React.useState('default');
  const [priceRange, setPriceRange] = React.useState('all');
  const [stockOnly, setStockOnly] = React.useState(false);

  let products = [...filteredProducts];
  if (sort === 'price-asc') products.sort((a,b) => a.price-b.price);
  if (sort === 'price-desc') products.sort((a,b) => b.price-a.price);
  if (sort === 'rating') products.sort((a,b) => b.rating-a.rating);
  if (sort === 'newest') products = products.reverse();
  if (priceRange === 'under5k') products = products.filter(p => p.price < 5000);
  if (priceRange === '5k-20k') products = products.filter(p => p.price >= 5000 && p.price < 20000);
  if (priceRange === 'above20k') products = products.filter(p => p.price >= 20000);
  if (stockOnly) products = products.filter((p) => Number(p.stock) > 0);

  return (
    <div className="products-section fade-in" style={{maxWidth:1280,margin:'0 auto'}}>
      <div className="flex-between" style={{marginBottom:20}}>
        <h2 className="title-lg">
          {selectedCategory !== 'All' ? selectedCategory : searchQuery ? `Results for "${searchQuery}"` : 'All Products'}
          <span style={{fontSize:14,fontWeight:400,color:'var(--text2)',marginLeft:10}}>({products.length} items)</span>
        </h2>
        <div className="flex gap-12">
          <select className="input" style={{width:'auto',padding:'8px 12px',fontSize:13}}
            value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <select className="input" style={{width:'auto',padding:'8px 12px',fontSize:13}}
            value={priceRange} onChange={e=>setPriceRange(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="under5k">Under ₹5,000</option>
            <option value="5k-20k">₹5,000 - ₹20,000</option>
            <option value="above20k">Above ₹20,000</option>
          </select>
          <button className={`btn btn-sm ${stockOnly?'btn-primary':'btn-secondary'}`} onClick={() => setStockOnly((v) => !v)}>In Stock</button>
        </div>
      </div>

      {compare.length > 1 && (
        <div className="card" style={{marginBottom:16,padding:14}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8,flexWrap:'wrap'}}>
            <div style={{fontSize:13,color:'var(--text2)'}}>Comparing: {compare.map((item) => item.title.split(' ')[0]).join(', ')}</div>
            <button className="btn btn-secondary btn-sm" onClick={() => {
              const pick = compare[0];
              if (!pick) return;
              setSelectedProduct(pick);
              trackProductView(pick);
              setPage('detail');
            }}>Open Compare Base</button>
          </div>
        </div>
      )}

      <div className="filters">
        {CATEGORIES.map(cat => (
          <button key={cat} className={`filter-btn ${selectedCategory===cat?'active':''}`}
            onClick={()=>setSelectedCategory(cat)}>{cat}</button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon"><Icon name="search" size={44} /></div>
          <div className="empty-title">No products found</div>
          <div className="empty-sub">Try adjusting your filters or search query</div>
        </div>
      ) : (
        <div className="grid-4">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}

/* â”€â”€ PRODUCT DETAIL â”€â”€ */
function ProductDetail() {
  const { selectedProduct: p, addToCart, toggleWishlist, wishlist, setPage, products, behavior, trackProductView, compare, toggleCompare } = useApp();
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('desc');
  const [similarIndex, setSimilarIndex] = React.useState(0);
  if (!p) return null;
  const isWishlisted = wishlist.some(i => i.id === p.id);
  const inCompare = compare.some(i => i.id === p.id);
  const discount = Math.round((1 - p.price/p.originalPrice)*100);
  const similar = React.useMemo(() => getSimilarProducts(p, products, behavior, 10), [p, products, behavior]);
  const visibleSimilar = similar.slice(similarIndex, similarIndex + 6);
  const selectedIndex = Math.max(0, products.findIndex(x => x.id === p.id));

  React.useEffect(() => {
    trackProductView(p);
    setSimilarIndex(0);
  }, [p?.id]);

  return (
    <div className="product-detail fade-in" style={{maxWidth:1100,margin:'0 auto'}}>
      <button className="btn btn-ghost btn-sm" style={{marginBottom:20}} onClick={()=>setPage('products')}>
        <Icon name="back" size={12} /> Back to Products
      </button>

      <div className="detail-grid">
        <div>
          <ProductImage product={p} alt={p.title} className="detail-img-main" fallbackSize="6rem" />
          <div style={{display:'flex',gap:8,marginTop:12}}>
            {[0,1,2].map(i => (
              <ProductImage key={i} product={p} alt={`${p.title} preview ${i+1}`} className="detail-thumb" fallbackSize="1.6rem" />
            ))}
          </div>
        </div>
        <div>
          <span className="badge badge-accent">{p.category}</span>
          {p.tag && <span className="badge badge-gold" style={{marginLeft:8}}>{p.tag}</span>}
          <h1 style={{fontFamily:'var(--font-head)',fontSize:'1.6rem',fontWeight:700,margin:'12px 0 8px',lineHeight:1.3}}>{p.title}</h1>
          
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
            <span style={{display:'inline-flex',gap:2}}>{Array.from({length:Math.max(1,Math.round(p.rating))}).map((_,i)=><Icon key={i} name="star" size={11} />)}</span>
            <span style={{fontWeight:700}}>{p.rating}</span>
            <span style={{color:'var(--text2)',fontSize:13}}>({p.reviews.toLocaleString()} reviews)</span>
          </div>

          <div className="detail-price-row">
            <span className="detail-price">₹{p.price.toLocaleString('en-IN')}</span>
            <span style={{color:'var(--text3)',textDecoration:'line-through',fontSize:16}}>₹{p.originalPrice.toLocaleString('en-IN')}</span>
            <span className="badge badge-green">Save {discount}%</span>
          </div>

          <div className="detail-spec">
            <div className="spec-item">
              <div className="spec-val" style={{color:'var(--green)'}}><Icon name="check" size={14} /></div>
              <div className="spec-label">In Stock ({p.stock})</div>
            </div>
            <div className="spec-item">
              <div className="spec-val"><Icon name="truck" size={14} /></div>
              <div className="spec-label">Free Delivery</div>
            </div>
            <div className="spec-item">
              <div className="spec-val"><Icon name="refresh" size={14} /></div>
              <div className="spec-label">30-Day Returns</div>
            </div>
            <div className="spec-item">
              <div className="spec-val"><Icon name="shield" size={14} /></div>
              <div className="spec-label">Secure Payment</div>
            </div>
          </div>

          <div style={{marginBottom:20}}>
            <div style={{fontSize:13,fontWeight:500,color:'var(--text2)',marginBottom:10}}>Quantity</div>
            <div className="qty-ctrl">
              <button className="qty-btn" onClick={()=>setQty(q=>Math.max(1,q-1))}>-</button>
              <span className="qty-num" style={{width:32,textAlign:'center',fontFamily:'var(--font-head)',fontWeight:700}}>{qty}</span>
              <button className="qty-btn" onClick={()=>setQty(q=>Math.min(p.stock,q+1))}>+</button>
              <span style={{fontSize:12,color:'var(--text3)',marginLeft:8}}>{p.stock} available</span>
            </div>
          </div>

          <div className="detail-actions">
            <button className="btn btn-primary btn-lg" style={{flex:1}} onClick={()=>addToCart(p,qty)}>
              <Icon name="cart" size={14} /> Add to Cart
            </button>
            <button className="btn btn-secondary btn-lg btn-icon" style={{width:52}} onClick={()=>toggleWishlist(p)}>
              <Icon name={isWishlisted?'heartFull':'heart'} size={14} />
            </button>
            <button className="btn btn-secondary btn-lg btn-icon" style={{width:52}} onClick={()=>toggleCompare(p)} title="Compare product">
              <Icon name="compare" size={14} />
            </button>
          </div>

          <div style={{marginTop:20,padding:14,background:'var(--bg3)',borderRadius:10,fontSize:13,color:'var(--text2)'}}>
            <Icon name="ai" size={12} /> <strong style={{color:'var(--accent)'}}>AI Tip:</strong> Similarity engine matched this using title, category, tags, description, price band, and live user behavior.
            {inCompare && <span style={{marginLeft:6,color:'var(--green)'}}>In comparison list</span>}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{marginTop:40}}>
        <div className="tabs">
          {['desc','reviews','specs'].map(t => (
            <div key={t} className={`tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>
              {t==='desc'?'Description':t==='reviews'?'Reviews':' Specifications'}
            </div>
          ))}
        </div>
        {tab==='desc' && (
          <div style={{color:'var(--text2)',lineHeight:1.8,fontSize:14}}>{p.desc}<br/><br/>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.
          </div>
        )}
        {tab==='reviews' && (
          <div>
            {[{name:'Priya S.',rating:5,text:'Absolutely love this product! Quality is outstanding and delivery was super fast.',date:'2 days ago'},
              {name:'Rahul G.',rating:4,text:'Great value for money. Works exactly as described. Highly recommend.',date:'1 week ago'},
              {name:'Anita M.',rating:5,text:'Best purchase this year! The AI recommendation actually worked perfectly.',date:'2 weeks ago'}
            ].map((r,i) => (
              <div key={i} style={{padding:'16px 0',borderBottom:'1px solid var(--border)'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
                <div style={{fontWeight:600,fontSize:14,display:'flex',alignItems:'center',gap:6}}>{r.name} <span style={{display:'inline-flex',gap:2}}>{Array.from({length:r.rating}).map((_,ix)=><Icon key={ix} name="star" size={10} />)}</span></div>
                <div style={{fontSize:12,color:'var(--text3)'}}>{r.date}</div>
              </div>
              <div style={{fontSize:14,color:'var(--text2)'}}>{r.text}</div>
              </div>
            ))}
          </div>
        )}
        {tab==='specs' && (
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0',fontSize:14}}>
            {[['Brand','Fusion Mart Certified'],['Model',p.title.split(' ')[0]+' Series'],['Category',p.category],['Stock',p.stock+' units'],['Rating',p.rating+' / 5.0'],['Reviews',p.reviews.toLocaleString()],['Warranty','1 Year'],['Return Policy','30 Days']].map(([k,v]) => (
              <div key={k} style={{padding:'12px 16px',background:selectedIndex%2===0?'var(--bg3)':'none',display:'flex',justifyContent:'space-between'}}>
                <span style={{color:'var(--text2)'}}>{k}</span>
                <span style={{fontWeight:500}}>{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* More Products Section */}
      {similar.length > 0 && (
        <div style={{marginTop:48}}>
          <div className="section-header" style={{alignItems:'flex-start',gap:12,flexWrap:'wrap'}}>
            <div>
              <h3 className="section-title">More Products You’ll Love</h3>
              <p className="section-subtitle" style={{marginTop:6,color:'var(--text2)',fontSize:14,maxWidth:560}}>
                Related items based on this product, category, and your browsing behavior. Scroll through the top picks below.
              </p>
            </div>
            <div style={{display:'flex',gap:8}}>
              <button
                className="btn btn-secondary btn-sm"
                disabled={similarIndex === 0}
                onClick={()=>setSimilarIndex((v) => Math.max(0, v - 1))}
              >
                <Icon name="back" size={11} /> Prev
              </button>
              <button
                className="btn btn-secondary btn-sm"
                disabled={similarIndex >= Math.max(0, similar.length - 6)}
                onClick={()=>setSimilarIndex((v) => Math.min(Math.max(0, similar.length - 6), v + 1))}
              >
                Next <Icon name="arrow" size={11} />
              </button>
            </div>
          </div>
          <div className="grid-3">
            {visibleSimilar.map(rp => <ProductCard key={rp.id} product={rp} />)}
          </div>
        </div>
      )}
    </div>
  );
}

/* â”€â”€ CART DRAWER â”€â”€ */
function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal, setPage } = useApp();
  const shipping = cartTotal > 499 ? 0 : 99;

  return (
    <>
      <div className={`cart-overlay ${cartOpen?'open':''}`} onClick={()=>setCartOpen(false)} />
      <div className={`cart-drawer ${cartOpen?'open':''}`}>
        <div className="cart-header">
          <div style={{fontFamily:'var(--font-head)',fontSize:'1.1rem',fontWeight:700}}>
            <Icon name="cart" size={14} /> Your Cart <span style={{color:'var(--text2)',fontSize:13,fontWeight:400}}>({cart.length} items)</span>
          </div>
          <button className="btn btn-ghost btn-icon" onClick={()=>setCartOpen(false)}><Icon name="close" size={12} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state" style={{flex:1}}>
            <div className="empty-icon"><Icon name="cart" size={44} /></div>
            <div className="empty-title">Your cart is empty</div>
            <div className="empty-sub">Add items to get started!</div>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <ProductImage product={item} alt={item.title} className="cart-item-img" fallbackSize="1.6rem" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.title}</div>
                  <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  <div className="qty-ctrl">
                    <button className="qty-btn" onClick={()=>updateQty(item.id,item.qty-1)}>-</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={()=>updateQty(item.id,item.qty+1)}>+</button>
                    <button className="btn btn-ghost btn-sm btn-icon" style={{marginLeft:'auto'}} onClick={()=>removeFromCart(item.id)}><Icon name="trash" size={12} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-footer">
            <div style={{fontSize:13,color:'var(--text2)',marginBottom:10}}>
              {shipping === 0 ? <span style={{color:'var(--green)',display:'inline-flex',alignItems:'center',gap:6}}><Icon name="check" size={12} /> Free delivery applied!</span> : <span>Add ₹{(499-cartTotal).toLocaleString('en-IN')} more for free delivery</span>}
            </div>
            {shipping > 0 && (
              <div style={{background:'var(--bg3)',borderRadius:8,height:6,marginBottom:12}}>
                <div style={{background:'var(--accent)',height:'100%',borderRadius:8,width:`${Math.min(100,(cartTotal/499)*100)}%`,transition:'width .3s'}} />
              </div>
            )}
            <div className="cart-total">
              <span className="cart-total-label">Subtotal</span>
              <span className="cart-total-amount">₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            {shipping > 0 && (
              <div style={{display:'flex',justifyContent:'space-between',fontSize:13,color:'var(--text2)',marginBottom:8}}>
                <span>Shipping</span><span>₹{shipping}</span>
              </div>
            )}
            <div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--font-head)',fontSize:'1.1rem',fontWeight:700,marginBottom:16,paddingTop:8,borderTop:'1px solid var(--border)'}}>
              <span>Total</span><span style={{color:'var(--accent)'}}>₹{(cartTotal+shipping).toLocaleString('en-IN')}</span>
            </div>
            <button className="btn btn-primary" style={{width:'100%',padding:'14px',fontSize:15,fontWeight:600}} onClick={()=>{setCartOpen(false);setPage('checkout');}}>
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* â”€â”€ AUTH MODAL â”€â”€ */
function AuthModal() {
  const { authOpen, setAuthOpen, login, signup, addToast } = useApp();
  const [mode, setMode] = React.useState('login');
  const [form, setForm] = React.useState({ name:'', email:'', password:'', role:'user', otp:'' });
  const [loading, setLoading] = React.useState(false);
  const [otpSent, setOtpSent] = React.useState(false);

  if (!authOpen) return null;

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    if (mode === 'login') login(form.email, form.password, form.role);
    else {
      if (!otpSent) {
        setOtpSent(true);
        addToast('OTP sent to your email (demo: 123456)', 'info');
        setLoading(false);
        return;
      }
      if (form.otp !== '123456') {
        addToast('Invalid OTP (demo OTP is 123456)', 'error');
        setLoading(false);
        return;
      }
      signup(form.name, form.email, form.password, form.role);
    }
    setLoading(false);
    setForm({ name:'', email:'', password:'', role:'user', otp:'' });
    setOtpSent(false);
  };

  return (
    <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setAuthOpen(false)}>
      <div className="modal">
        <div className="modal-header">
          <div>
            <div style={{fontFamily:'var(--font-head)',fontSize:'1.3rem',fontWeight:700}}>
              {mode==='login'?'Welcome back':'Create Account'}
            </div>
            <div style={{fontSize:13,color:'var(--text2)',marginTop:4}}>
              {mode==='login'?'Sign in to your Fusion Mart account':'Join millions of happy shoppers'}
            </div>
          </div>
          <button className="btn btn-ghost btn-icon" onClick={()=>setAuthOpen(false)}><Icon name="close" size={12} /></button>
        </div>
        <div className="modal-body">
          <div className="auth-tabs">
            {['login','signup'].map(m => (
              <div key={m} className={`auth-tab ${mode===m?'active':''}`} onClick={()=>setMode(m)}>
                {m==='login'?'Sign In':'Sign Up'}
              </div>
            ))}
          </div>

          {mode==='signup' && (
            <>
              <div className="input-wrap" style={{marginBottom:14}}>
                <label className="input-label">Full Name</label>
                <input className="input" placeholder="Priya Sharma" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
              </div>
              <div className="input-wrap" style={{marginBottom:14}}>
                <label className="input-label">Account Role</label>
                <select className="input" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
                  <option value="user">User</option>
                  <option value="seller">Seller / Vendor</option>
                </select>
              </div>
            </>
          )}
          <div className="input-wrap" style={{marginBottom:14}}>
            <label className="input-label">Email Address</label>
            <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          </div>
          {mode==='login' && (
            <div className="input-wrap" style={{marginBottom:14}}>
              <label className="input-label">Login As</label>
              <select className="input" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
                <option value="user">User</option>
                <option value="seller">Seller / Vendor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}
          <div className="input-wrap" style={{marginBottom:20}}>
            <label className="input-label">Password</label>
            <input className="input" type="password" placeholder="********" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}
              onKeyDown={e=>e.key==='Enter'&&handleSubmit()} />
          </div>
          {mode === 'signup' && otpSent && (
            <div className="input-wrap" style={{marginBottom:14}}>
              <label className="input-label">Email OTP</label>
              <input className="input" value={form.otp} onChange={e=>setForm({...form,otp:e.target.value})} placeholder="Enter 123456" />
            </div>
          )}

          {mode==='login' && (
            <div style={{fontSize:12,color:'var(--text3)',marginBottom:16,padding:'10px 12px',background:'var(--bg3)',borderRadius:8}}>
              <Icon name="info" size={12} /> Try: <span style={{color:'var(--accent)'}}>admin@fusionmart.com</span> / <span style={{color:'var(--accent)'}}>admin123</span> for admin access
            </div>
          )}

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:12}}>
            <button className="btn btn-secondary btn-sm" onClick={()=>{addToast('Google login configured (demo mode)', 'info');setForm((f)=>({...f, email:'google.user@example.com'}));}}>Google</button>
            <button className="btn btn-secondary btn-sm" onClick={()=>{addToast('GitHub login configured (demo mode)', 'info');setForm((f)=>({...f, email:'github.user@example.com'}));}}>GitHub</button>
          </div>

          <button className="btn btn-primary" style={{width:'100%',padding:14,fontSize:15}} onClick={handleSubmit} disabled={loading}>
            {loading ? <span className="spinner" /> : (mode==='login'?'Sign In ->':otpSent?'Verify OTP & Create Account ->':'Send OTP ->')}
          </button>

          <div style={{textAlign:'center',marginTop:16,fontSize:13,color:'var(--text2)'}}>
            {mode==='login'?'New here? ':'Already have an account? '}
            <span style={{color:'var(--accent)',cursor:'pointer',fontWeight:600}} onClick={()=>setMode(mode==='login'?'signup':'login')}>
              {mode==='login'?'Create account':'Sign in'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* â”€â”€ CHECKOUT â”€â”€ */
function Checkout() {
  const { cart, cartTotal, setPage, placeOrder, user, setAuthOpen, addToast, products, coupons } = useApp();
  const [step, setStep] = React.useState(1);
  const [addr, setAddr] = React.useState({ name: user?.name||'', phone:'', address:'', city:'', pincode:'', state:'India' });
  const [payMethod, setPayMethod] = React.useState('upi');
  const [gatewayField, setGatewayField] = React.useState('');
  const [upi, setUpi] = React.useState('');
  const [couponCode, setCouponCode] = React.useState('');
  const [appliedCoupon, setAppliedCoupon] = React.useState(null);
  const [latestOrder, setLatestOrder] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const shipping = cartTotal > 499 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.18);
  const subtotalWithTax = cartTotal + shipping + tax;
  const couponDiscount = React.useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon.discountPct) return Math.round((cartTotal * appliedCoupon.discountPct) / 100);
    if (appliedCoupon.discountFlat) return appliedCoupon.discountFlat;
    return 0;
  }, [appliedCoupon, cartTotal]);
  const total = Math.max(0, subtotalWithTax - couponDiscount);

  if (!user) return (
    <div className="empty-state" style={{marginTop:60}}>
      <div className="empty-icon"><Icon name="lock" size={44} /></div>
      <div className="empty-title">Please sign in to checkout</div>
      <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>setAuthOpen(true)}>Sign In</button>
    </div>
  );

  if (cart.length === 0) return (
    <div className="empty-state" style={{marginTop:60}}>
      <div className="empty-icon"><Icon name="cart" size={44} /></div>
      <div className="empty-title">Your cart is empty</div>
      <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>setPage('products')}>Shop Now</button>
    </div>
  );

  const handlePayment = async () => {
    if (payMethod === 'upi' && !String(upi).includes('@')) {
      addToast('Enter valid UPI ID', 'error');
      return;
    }
    if (['stripe','razorpay','paypal','card','netbanking'].includes(payMethod) && String(gatewayField).trim().length < 4) {
      addToast('Enter payment reference details', 'error');
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    const paymentStatus = Math.random() < 0.92 ? 'success' : 'failed';
    if (paymentStatus === 'failed') {
      setLoading(false);
      addToast('Payment failed. Please retry or switch gateway.', 'error');
      return;
    }
    const order = placeOrder(payMethod, addr, {
      status: paymentStatus,
      txnRef: `${payMethod.toUpperCase()}-${Math.floor(Math.random() * 1000000)}`,
      coupon: appliedCoupon?.code || null,
      total,
    });
    setLatestOrder(order);
    setLoading(false);
    setStep(3);
    addToast('Order placed successfully!', 'success');
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) return;
    const hit = coupons.find((item) => item.active && item.code.toUpperCase() === code);
    if (!hit) {
      addToast('Invalid coupon code', 'error');
      return;
    }
    if (cartTotal < Number(hit.minOrder || 0)) {
      addToast(`Coupon requires minimum order ₹${hit.minOrder}`, 'error');
      return;
    }
    setAppliedCoupon(hit);
    addToast(`Coupon ${hit.code} applied`, 'success');
  };

  const downloadInvoice = () => {
    if (!latestOrder) return;
    const lines = [
      `Fusion Mart 2.O Invoice`,
      `Invoice ID: ${latestOrder.invoiceId}`,
      `Order ID: ${latestOrder.id}`,
      `Customer: ${latestOrder.userName}`,
      `Date: ${latestOrder.date}`,
      `Payment: ${latestOrder.paymentMethod}`,
      `------------------------------------`,
      ...latestOrder.items.map((item) => `${item.title} x${item.qty} - ₹${(item.price * item.qty).toLocaleString('en-IN')}`),
      `------------------------------------`,
      `Subtotal: ₹${cartTotal.toLocaleString('en-IN')}`,
      `Shipping: ₹${shipping.toLocaleString('en-IN')}`,
      `Tax: ₹${tax.toLocaleString('en-IN')}`,
      `Coupon Discount: ₹${couponDiscount.toLocaleString('en-IN')}`,
      `Total: ₹${total.toLocaleString('en-IN')}`,
    ].join('\n');
    const blob = new Blob([lines], { type:'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${latestOrder.invoiceId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="checkout fade-in">
      <h2 style={{fontFamily:'var(--font-head)',fontSize:'1.6rem',fontWeight:700,marginBottom:28}}>Checkout</h2>

      <div className="steps">
        {['Address','Payment','Confirmed'].map((s,i) => (
          <React.Fragment key={s}>
            <div className={`step ${step>i+1?'done':step===i+1?'active':'pending'}`}>
              <div className="step-circle">{step>i+1?<Icon name="check" size={10} />:i+1}</div>
              <span className="step-label">{s}</span>
            </div>
            {i < 2 && <div className={`step-line ${step>i+1?'done':''}`} />}
          </React.Fragment>
        ))}
      </div>

      {step === 3 ? (
        <div style={{textAlign:'center',padding:'60px 20px'}}>
          <div style={{display:'flex',justifyContent:'center',marginBottom:16}}><Icon name="confetti" size={56} /></div>
          <h2 style={{fontFamily:'var(--font-head)',fontSize:'1.8rem',marginBottom:8}}>Order Confirmed!</h2>
          <p style={{color:'var(--text2)',marginBottom:24}}>Your order has been placed successfully. You'll receive updates via email.</p>
          <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,padding:20,display:'inline-block',marginBottom:24}}>
            <div style={{fontSize:13,color:'var(--text2)'}}>Order Total</div>
            <div style={{fontFamily:'var(--font-head)',fontSize:'2rem',fontWeight:800,color:'var(--accent)'}}>₹{total.toLocaleString('en-IN')}</div>
            {latestOrder && <div style={{fontSize:12,color:'var(--text2)'}}>Invoice: {latestOrder.invoiceId}</div>}
            <div style={{fontSize:13,color:'var(--text2)',marginTop:4}}>Estimated delivery: 2-5 business days</div>
          </div>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <button className="btn btn-primary" onClick={()=>setPage('dashboard')}>View Orders →</button>
            <button className="btn btn-secondary" onClick={()=>setPage('products')}>Continue Shopping</button>
            <button className="btn btn-secondary" onClick={downloadInvoice}>Download Invoice</button>
          </div>
        </div>
      ) : (
        <div className="checkout-grid">
          <div>
            {step === 1 && (
              <div className="card fade-in">
                <h3 style={{fontFamily:'var(--font-head)',marginBottom:20}}>Delivery Address</h3>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                  <div className="input-wrap">
                    <label className="input-label">Full Name</label>
                    <input className="input" value={addr.name} onChange={e=>setAddr({...addr,name:e.target.value})} placeholder="Priya Sharma" />
                  </div>
                  <div className="input-wrap">
                    <label className="input-label">Phone</label>
                    <input className="input" value={addr.phone} onChange={e=>setAddr({...addr,phone:e.target.value})} placeholder="+91 98765 43210" />
                  </div>
                  <div className="input-wrap" style={{gridColumn:'span 2'}}>
                    <label className="input-label">Address</label>
                    <input className="input" value={addr.address} onChange={e=>setAddr({...addr,address:e.target.value})} placeholder="House/Flat No., Street, Area" />
                  </div>
                  <div className="input-wrap">
                    <label className="input-label">City</label>
                    <input className="input" value={addr.city} onChange={e=>setAddr({...addr,city:e.target.value})} placeholder="Mumbai" />
                  </div>
                  <div className="input-wrap">
                    <label className="input-label">Pincode</label>
                    <input className="input" value={addr.pincode} onChange={e=>setAddr({...addr,pincode:e.target.value})} placeholder="400001" />
                  </div>
                </div>
                <button className="btn btn-primary" style={{marginTop:20,width:'100%',padding:14}}
                  onClick={()=>addr.name&&addr.phone&&addr.address&&addr.city&&addr.pincode?setStep(2):addToast('Please fill all fields','error')}>
                  Continue to Payment →
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="card fade-in">
                <h3 style={{fontFamily:'var(--font-head)',marginBottom:20}}>Payment Method</h3>
                <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:20}}>
                  {[
                    {id:'upi',label:'UPI Payment',sub:'PhonePe, GPay, Paytm',icon:'payment'},
                    {id:'card',label:'Credit / Debit Card',sub:'Visa, Mastercard, RuPay',icon:'payment'},
                    {id:'netbanking',label:'Net Banking',sub:'All major banks supported',icon:'dash'},
                    {id:'stripe',label:'Stripe',sub:'Global card processing',icon:'payment'},
                    {id:'razorpay',label:'Razorpay',sub:'UPI/cards/netbanking',icon:'payment'},
                    {id:'paypal',label:'PayPal',sub:'International wallet',icon:'wallet'},
                    {id:'cod',label:'Cash on Delivery',sub:'Pay when delivered',icon:'orders'},
                  ].map(m => (
                    <div key={m.id} onClick={()=>setPayMethod(m.id)}
                      style={{padding:'14px 16px',border:`1px solid ${payMethod===m.id?'var(--accent)':'var(--border)'}`,
                        borderRadius:10,cursor:'pointer',display:'flex',alignItems:'center',gap:12,
                        background:payMethod===m.id?'rgba(255,107,43,0.06)':'var(--bg3)',transition:'all .2s'}}>
                      <Icon name={m.icon} size={18} />
                      <div style={{flex:1}}>
                        <div style={{fontWeight:600,fontSize:14}}>{m.label}</div>
                        <div style={{fontSize:12,color:'var(--text2)'}}>{m.sub}</div>
                      </div>
                      <div style={{width:18,height:18,borderRadius:'50%',border:`2px solid ${payMethod===m.id?'var(--accent)':'var(--border)'}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        {payMethod===m.id && <div style={{width:8,height:8,borderRadius:'50%',background:'var(--accent)'}} />}
                      </div>
                    </div>
                  ))}
                </div>

                {payMethod==='upi' && (
                  <div className="input-wrap" style={{marginBottom:16}}>
                    <label className="input-label">UPI ID</label>
                    <input className="input" value={upi} onChange={e=>setUpi(e.target.value)} placeholder="yourname@upi" />
                  </div>
                )}
                {payMethod!=='upi' && payMethod!=='cod' && (
                  <div className="input-wrap" style={{marginBottom:16}}>
                    <label className="input-label">Gateway Reference</label>
                    <input className="input" value={gatewayField} onChange={e=>setGatewayField(e.target.value)} placeholder="Card last 4 / gateway ref" />
                  </div>
                )}

                <div style={{background:'var(--bg3)',borderRadius:10,padding:14,marginBottom:16,fontSize:13,color:'var(--text2)'}}>
                  <Icon name="shield" size={12} /> <span style={{color:'var(--text)'}}>PCI-DSS ready checkout.</span> 256-bit SSL encrypted. Payment events and refunds are logged securely.
                </div>

                <button className="btn btn-primary" style={{width:'100%',padding:14,fontSize:15}} onClick={handlePayment} disabled={loading}>
                  {loading ? (
                    <span style={{display:'flex',alignItems:'center',gap:10}}><span className="spinner" /> Processing Payment...</span>
                  ) : `Pay ₹${total.toLocaleString('en-IN')} ->`}
                </button>
                <button className="btn btn-ghost" style={{width:'100%',marginTop:8}} onClick={()=>setStep(1)}>← Back</button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <div className="card order-summary">
              <h3 style={{fontFamily:'var(--font-head)',marginBottom:16}}>Order Summary</h3>
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <ProductImage product={item} alt={item.title} className="order-item-img" fallbackSize="1.2rem" />
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:13,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{item.title}</div>
                    <div style={{fontSize:12,color:'var(--text2)'}}>Qty: {item.qty}</div>
                  </div>
                  <div style={{fontWeight:700,fontSize:13,color:'var(--text)'}}>₹{(item.price*item.qty).toLocaleString('en-IN')}</div>
                </div>
              ))}
              <div className="summary-row"><span className="label" style={{color:'var(--text2)'}}>Subtotal</span><span>₹{cartTotal.toLocaleString('en-IN')}</span></div>
              <div className="summary-row"><span className="label" style={{color:'var(--text2)'}}>Shipping</span><span style={{color:shipping===0?'var(--green)':''}}>{shipping===0?'FREE':'₹'+shipping}</span></div>
              <div className="summary-row"><span className="label" style={{color:'var(--text2)'}}>Tax (18% GST)</span><span>₹{tax.toLocaleString('en-IN')}</span></div>
              <div style={{display:'flex',gap:8,marginTop:8}}>
                <input className="input" value={couponCode} onChange={e=>setCouponCode(e.target.value)} placeholder="Coupon code" />
                <button className="btn btn-secondary btn-sm" onClick={applyCoupon}>Apply</button>
              </div>
              {appliedCoupon && (
                <div style={{fontSize:12,color:'var(--green)',marginTop:6}}>
                  {appliedCoupon.code} applied: -₹{couponDiscount.toLocaleString('en-IN')}
                </div>
              )}
              <div className="summary-row total">
                <span className="label">Total</span>
                <span className="amount">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div style={{marginTop:14,padding:'10px 12px',background:'rgba(34,212,126,0.08)',border:'1px solid rgba(34,212,126,0.2)',borderRadius:8,fontSize:12,color:'var(--green)'}}>
                <Icon name="check" size={11} /> You're saving ₹{products.reduce((s,p)=>s+(p.originalPrice-p.price)*((cart.find(c=>c.id===p.id)||{qty:0}).qty),0).toLocaleString('en-IN')} on this order!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* â”€â”€ DASHBOARD â”€â”€ */
function Dashboard() {
  const { user, orders, wishlist, cart, setPage, logout, setAuthOpen, recommendedForUser, recentViews, notifications, returnRequests, setReturnRequests, addToast } = useApp();
  const [tab, setTab] = React.useState('orders');
  const [supportMsg, setSupportMsg] = React.useState('');
  const [supportLogs, setSupportLogs] = React.useState([{ id:1, who:'AI Support', text:'Hello! Share your issue and we will assist you instantly.' }]);
  const [addressBook, setAddressBook] = React.useState([{ id:1, name:'Home', city:'Mumbai', state:'Maharashtra', pincode:'400001' }]);
  const [paymentMethods, setPaymentMethods] = React.useState([{ id:1, type:'UPI', value:'user@upi' }]);
  const userOrders = React.useMemo(() => {
    if (!user) return [];
    if (user.role === 'admin') return orders;
    const email = String(user.email || '').trim().toLowerCase();
    return orders.filter((order) => String(order.userEmail || '').trim().toLowerCase() === email);
  }, [orders, user]);

  if (!user) return (
    <div className="empty-state" style={{marginTop:60}}>
      <div className="empty-icon"><Icon name="user" size={44} /></div>
      <div className="empty-title">Please sign in to view dashboard</div>
      <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>setAuthOpen(true)}>Sign In</button>
    </div>
  );

  return (
    <div className="dashboard fade-in">
      {/* Profile Header */}
      <div className="card" style={{marginBottom:28,background:'linear-gradient(135deg,rgba(255,107,43,0.08),rgba(79,142,247,0.05))'}}>
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <div style={{width:64,height:64,borderRadius:'50%',background:'var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.8rem',flexShrink:0}}>
            <Icon name={user.avatar || 'user'} size={24} />
          </div>
          <div style={{flex:1}}>
            <h2 style={{fontFamily:'var(--font-head)',fontSize:'1.3rem',fontWeight:700}}>{user.name}</h2>
            <div style={{color:'var(--text2)',fontSize:14}}>{user.email}</div>
            <span className={`badge ${user.role==='admin'?'badge-gold':'badge-accent'}`} style={{marginTop:6}}>{user.role.toUpperCase()}</span>
          </div>
          <div style={{display:'flex',gap:12}}>
            {user.role==='admin' && <button className="btn btn-secondary btn-sm" onClick={()=>setPage('admin')}>Admin Panel</button>}
            {user.role==='seller' && <button className="btn btn-secondary btn-sm" onClick={()=>setPage('seller')}>Seller Panel</button>}
            <button className="btn btn-ghost btn-sm" onClick={logout}>Sign Out</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid-4" style={{marginBottom:28}}>
        {[
          {icon:'orders',label:'Total Orders',val:userOrders.length},
          {icon:'heartFull',label:'Wishlist Items',val:wishlist.length},
          {icon:'cart',label:'Cart Items',val:cart.length},
          {icon:'star',label:'Loyalty Points',val:(userOrders.reduce((s,o)=>s+o.total,0)/10).toFixed(0)},
        ].map(s => (
          <div key={s.label} className="card dash-stat">
            <Icon name={s.icon} size={22} />
            <div className="dash-stat-num">{s.val}</div>
            <div className="dash-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['orders','wishlist','recommend','recent','addresses','payments','notifications','returns','support','profile'].map(t => (
          <div key={t} className={`tab ${tab===t?'active':''}`} onClick={()=>setTab(t)}>
            {t==='orders'?'Orders':t==='wishlist'?'Wishlist':t==='recommend'?'AI Reco':t==='recent'?'Recently Viewed':t==='addresses'?'Addresses':t==='payments'?'Payments':t==='notifications'?'Notifications':t==='returns'?'Returns/Refunds':t==='support'?'Chat Support':'Profile'}
          </div>
        ))}
      </div>

      {tab==='orders' && (
        userOrders.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><Icon name="orders" size={44} /></div>
            <div className="empty-title">No orders yet</div>
            <div className="empty-sub">Your order history will appear here</div>
            <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>setPage('products')}>Start Shopping</button>
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            {userOrders.map(order => (
              <div key={order.id} className="card">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
                  <div>
                    <span style={{fontFamily:'var(--font-head)',fontWeight:700}}>#{order.id}</span>
                    <span style={{marginLeft:10,fontSize:12,color:'var(--text2)'}}>{order.date}</span>
                  </div>
                  <div style={{display:'flex',gap:10,alignItems:'center'}}>
                    <span className="badge badge-green">{order.status}</span>
                    <span style={{fontFamily:'var(--font-head)',fontWeight:700,color:'var(--accent)'}}>₹{order.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                  {order.items.map(item => (
                    <div key={item.id} style={{display:'flex',alignItems:'center',gap:6,background:'var(--bg3)',padding:'6px 10px',borderRadius:6,fontSize:12}}>
                      <ProductImage product={item} alt={item.title} className="order-chip-thumb" fallbackSize="10px" />
                      <span>{item.title.substring(0,20)}...</span>
                      <span style={{color:'var(--text3)'}}>Ã—{item.qty}</span>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:10,fontSize:12,color:'var(--text2)'}}>
                  <span>Payment: {order.paymentMethod?.toUpperCase()}</span>
                  {order.address && <span style={{marginLeft:12}}><Icon name="location" size={10} /> {order.address.city}, {order.address.state}</span>}
                </div>
                {Array.isArray(order.timeline) && order.timeline.length > 0 && (
                  <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
                    {order.timeline.map((entry, idx) => (
                      <span key={`${order.id}-${idx}`} className="badge badge-blue">{entry.label}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      )}

      {tab==='wishlist' && (
        wishlist.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><Icon name="heartFull" size={44} /></div>
            <div className="empty-title">Your wishlist is empty</div>
            <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>setPage('products')}>Browse Products</button>
          </div>
        ) : (
          <div className="grid-4">
            {wishlist.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )
      )}

      {tab==='recommend' && (
        recommendedForUser.length === 0 ? (
          <div className="empty-state"><div className="empty-title">No personalized recommendations yet</div></div>
        ) : (
          <div className="grid-4">{recommendedForUser.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}</div>
        )
      )}

      {tab==='recent' && (
        recentViews.length === 0 ? (
          <div className="empty-state"><div className="empty-title">No recently viewed products</div></div>
        ) : (
          <div className="grid-4">{recentViews.slice(0, 8).map(p => <ProductCard key={p.id} product={p} />)}</div>
        )
      )}

      {tab==='addresses' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:14}}>Saved Addresses</h3>
          <div style={{display:'grid',gap:10}}>
            {addressBook.map((row) => (
              <div key={row.id} style={{padding:12,border:'1px solid var(--border)',borderRadius:10}}>
                <strong>{row.name}</strong> - {row.city}, {row.state} {row.pincode}
              </div>
            ))}
          </div>
          <button className="btn btn-secondary btn-sm" style={{marginTop:12}} onClick={() => setAddressBook((prev) => ([...prev, { id:Date.now(), name:'Work', city:'Bengaluru', state:'Karnataka', pincode:'560001' }]))}>Add Demo Address</button>
        </div>
      )}

      {tab==='payments' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:14}}>Saved Payment Methods</h3>
          <div style={{display:'grid',gap:10}}>
            {paymentMethods.map((row) => (
              <div key={row.id} style={{padding:12,border:'1px solid var(--border)',borderRadius:10}}>
                <strong>{row.type}</strong> - {row.value}
              </div>
            ))}
          </div>
          <button className="btn btn-secondary btn-sm" style={{marginTop:12}} onClick={() => setPaymentMethods((prev) => ([...prev, { id:Date.now(), type:'Card', value:'**** **** **** 4242' }]))}>Add Demo Method</button>
        </div>
      )}

      {tab==='notifications' && (
        notifications.length === 0 ? (
          <div className="empty-state"><div className="empty-title">No notifications</div></div>
        ) : (
          <div style={{display:'grid',gap:10}}>
            {notifications.slice(0, 20).map((note) => (
              <div key={note.id} className="card" style={{padding:14}}>
                <div style={{fontWeight:600}}>{note.title}</div>
                <div style={{fontSize:12,color:'var(--text2)'}}>{note.date}</div>
              </div>
            ))}
          </div>
        )
      )}

      {tab==='returns' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:14}}>Return / Refund Requests</h3>
          {returnRequests.length === 0 && <div style={{fontSize:13,color:'var(--text2)'}}>No return requests raised.</div>}
          {returnRequests.map((req) => (
            <div key={req.id} style={{padding:10,border:'1px solid var(--border)',borderRadius:10,marginBottom:10}}>
              <div style={{fontWeight:600}}>{req.orderId} - {req.reason}</div>
              <div style={{fontSize:12,color:'var(--text2)'}}>Status: {req.status}</div>
            </div>
          ))}
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              const latest = userOrders[0];
              if (!latest) return addToast('No orders available for return request', 'error');
              setReturnRequests((prev) => ([{ id:`RR-${Date.now()}`, orderId:latest.id, reason:'Damaged item', status:'requested' }, ...prev]));
              addToast('Return request submitted', 'success');
            }}
          >
            Raise Demo Return Request
          </button>
        </div>
      )}

      {tab==='support' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:14}}>Chat Support</h3>
          <div style={{maxHeight:260,overflowY:'auto',display:'grid',gap:8,marginBottom:10}}>
            {supportLogs.map((msg) => (
              <div key={msg.id} style={{padding:10,border:'1px solid var(--border)',borderRadius:10,background:msg.who==='You'?'rgba(255,107,43,0.08)':'var(--bg3)'}}>
                <div style={{fontSize:12,color:'var(--text2)'}}>{msg.who}</div>
                <div>{msg.text}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:8}}>
            <input className="input" value={supportMsg} onChange={e=>setSupportMsg(e.target.value)} placeholder="Type your issue..." />
            <button className="btn btn-primary btn-sm" onClick={() => {
              const text = supportMsg.trim();
              if (!text) return;
              setSupportLogs((prev) => ([...prev, { id:Date.now(), who:'You', text }, { id:Date.now()+1, who:'AI Support', text:'Thanks. We created a support ticket and will update you shortly.' }]));
              setSupportMsg('');
            }}>Send</button>
          </div>
        </div>
      )}

      {tab==='profile' && (
        <div className="card" style={{maxWidth:480}}>
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:20}}>Profile Settings</h3>
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            <div className="input-wrap">
              <label className="input-label">Full Name</label>
              <input className="input" defaultValue={user.name} />
            </div>
            <div className="input-wrap">
              <label className="input-label">Email</label>
              <input className="input" defaultValue={user.email} type="email" />
            </div>
            <div className="input-wrap">
              <label className="input-label">Phone</label>
              <input className="input" placeholder="+91 98765 43210" />
            </div>
            <button className="btn btn-primary" style={{marginTop:6}}>Save Changes</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* â”€â”€ ADMIN PANEL â”€â”€ */
function AdminPanel() {
  const {
    user, users, orders, products, addProduct, updateProduct, removeProduct,
    setPage, setAuthOpen, adminTab, setAdminTab, addToast,
    sellers, setSellers, paymentLogs, coupons, setCoupons, banners, setBanners,
    returnRequests, reviews, notifications
  } = useApp();
  const EMPTY_PRODUCT_FORM = { title:'', category:'Electronics', price:'', image:'', emoji:'box', stock:'', desc:'' };
  const [showAddProduct, setShowAddProduct] = React.useState(false);
  const [newProd, setNewProd] = React.useState(EMPTY_PRODUCT_FORM);
  const [fileInputKey, setFileInputKey] = React.useState(0);
  const [editingProductId, setEditingProductId] = React.useState(null);
  const quickImageInputRef = React.useRef(null);
  const [quickImageProductId, setQuickImageProductId] = React.useState(null);

  if (!user || user.role !== 'admin') return (
    <div className="empty-state" style={{marginTop:60}}>
      <div className="empty-icon"><Icon name="lock" size={44} /></div>
      <div className="empty-title">Admin Access Required</div>
      <div className="empty-sub">Use admin@fusionmart.com / admin123</div>
      <button className="btn btn-primary" style={{marginTop:14}} onClick={() => setAuthOpen(true)}>Sign In as Admin</button>
    </div>
  );

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      addToast('Please select a valid image file', 'error');
      setFileInputKey(k => k + 1);
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      addToast('Please upload an image below 3MB', 'error');
      setFileInputKey(k => k + 1);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) { addToast('Could not read this image', 'error'); return; }
      setNewProd(prev => ({ ...prev, image: result }));
      addToast('Image uploaded successfully', 'success');
    };
    reader.onerror = () => addToast('Could not read this image', 'error');
    reader.readAsDataURL(file);
  };

  const resetProductForm = () => {
    setEditingProductId(null);
    setNewProd(EMPTY_PRODUCT_FORM);
    setFileInputKey(k => k + 1);
  };

  const closeProductForm = () => {
    setShowAddProduct(false);
    resetProductForm();
  };

  const openAddProductForm = () => {
    setShowAddProduct(true);
    resetProductForm();
  };

  const startEditProduct = (product) => {
    setEditingProductId(product.id);
    setNewProd({
      title: product.title || '',
      category: CATEGORIES.includes(product.category) && product.category !== 'All' ? product.category : 'Electronics',
      price: String(product.price ?? ''),
      image: product.image || '',
      emoji: product.emoji || 'box',
      stock: String(product.stock ?? ''),
      desc: product.desc || '',
    });
    setShowAddProduct(true);
    setFileInputKey(k => k + 1);
  };

  const handleSaveProduct = () => {
    const title = newProd.title.trim();
    const price = Number(newProd.price);
    if (!title || !Number.isFinite(price) || price <= 0) {
      addToast('Product name aur valid price required hai', 'error');
      return;
    }

    const productPayload = {
      ...newProd,
      title,
      price,
      stock: Number(newProd.stock) || 10,
      desc: newProd.desc || 'No description available.',
    };

    if (editingProductId !== null) {
      const updated = updateProduct(editingProductId, productPayload);
      if (!updated) {
        addToast('Product update failed', 'error');
        return;
      }
      addToast(`${updated.title} updated successfully`, 'success');
      closeProductForm();
      return;
    }

    const created = addProduct({
      ...productPayload,
      rating: 4.5,
      reviews: 0,
      tag: 'New',
    });
    addToast(`${created.title} added successfully`, 'success');
    closeProductForm();
  };

  const handleDeleteProduct = (id) => {
    const item = products.find((p) => Number(p.id) === Number(id));
    const ok = window.confirm(`Delete "${item?.title || 'this product'}"?`);
    if (!ok) return;
    removeProduct(id);
    if (editingProductId !== null && Number(editingProductId) === Number(id)) {
      closeProductForm();
    }
    addToast('Product removed', 'info');
  };

  const openQuickImageUpload = (productId) => {
    setQuickImageProductId(productId);
    quickImageInputRef.current?.click();
  };

  const handleQuickImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file || !quickImageProductId) return;

    if (!file.type.startsWith('image/')) {
      addToast('Please select a valid image file', 'error');
      setQuickImageProductId(null);
      e.target.value = '';
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      addToast('Please upload an image below 3MB', 'error');
      setQuickImageProductId(null);
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        addToast('Could not read this image', 'error');
        return;
      }
      const updated = updateProduct(quickImageProductId, { image: result });
      if (!updated) {
        addToast('Image update failed', 'error');
        setQuickImageProductId(null);
        return;
      }
      addToast('Product image updated', 'success');
      if (editingProductId !== null && Number(editingProductId) === Number(quickImageProductId)) {
        setNewProd(prev => ({ ...prev, image: result }));
      }
      setQuickImageProductId(null);
    };
    reader.onerror = () => {
      addToast('Could not read this image', 'error');
      setQuickImageProductId(null);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const ordersForAdmin = orders.map((order) => ({
    id: order.id,
    user: order.userName || order.address?.name || 'Customer',
    items: order.items?.reduce((sum, item) => sum + (Number(item.qty) || 0), 0) || 0,
    total: order.total,
    status: order.status || 'Confirmed',
    date: order.date,
  }));
  const lowStockProducts = products
    .filter((p) => Number(p.stock) <= 5)
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 5);
  const pendingSellers = sellers.filter((seller) => seller.status !== 'approved');
  const fraudAlerts = ordersForAdmin.filter((order) => order.total > 120000);

  const stats = [
    { label:'Total Revenue', val:`₹${totalRevenue.toLocaleString('en-IN')}`, icon:'payment', color:'var(--green)', trend:`${orders.length} orders` },
    { label:'Total Orders', val:orders.length, icon:'orders', color:'var(--blue)', trend:'Live' },
    { label:'Active Users', val:users.length, icon:'user', color:'var(--accent)', trend:'Registered' },
    { label:'Products', val:products.length, icon:'box', color:'var(--gold)', trend:'In catalog' },
  ];

  return (
    <div className="dashboard fade-in">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:28}}>
        <div>
          <h1 style={{fontFamily:'var(--font-head)',fontSize:'1.6rem',fontWeight:800}}>Admin Panel</h1>
          <div style={{color:'var(--text2)',fontSize:14}}>Fusion Mart Control Center</div>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={()=>setPage('home')}>← Back to Store</button>
      </div>

      {/* Stats */}
      <div className="grid-4" style={{marginBottom:28}}>
        {stats.map(s => (
          <div key={s.label} className="card dash-stat">
            <Icon name={s.icon} size={20} />
            <div className="dash-stat-num" style={{color:s.color}}>{s.val}</div>
            <div className="dash-stat-label">{s.label}</div>
            <div className="dash-stat-trend">{s.trend}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{marginBottom:20}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap'}}>
          <div>
            <div style={{fontFamily:'var(--font-head)',fontSize:'1rem',fontWeight:700}}>Catalog Health</div>
            <div style={{fontSize:13,color:'var(--text2)'}}>
              {lowStockProducts.length === 0 ? 'Great! All products have healthy stock.' : `${lowStockProducts.length} low-stock products need attention.`}
            </div>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => setAdminTab('products')}>Manage Products</button>
        </div>
        {lowStockProducts.length > 0 && (
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>
            {lowStockProducts.map((p) => (
              <span key={p.id} className="badge badge-red">{p.title} ({p.stock})</span>
            ))}
          </div>
        )}
      </div>

      <div className="tabs">
        {['products','orders','users','inventory','categories','coupons','banners','sellerApproval','returns','reviews','fraud','payments','notifications','analytics'].map(t => (
          <div key={t} className={`tab ${adminTab===t?'active':''}`} onClick={()=>setAdminTab(t)}>
            {t==='products'?'Products':t==='orders'?'Orders':t==='users'?'Users':
              t==='inventory'?'Inventory':t==='categories'?'Categories':t==='coupons'?'Coupons':
              t==='banners'?'Banners':t==='sellerApproval'?'Seller Approval':t==='returns'?'Returns':
              t==='reviews'?'Reviews':t==='fraud'?'Fraud Alerts':t==='payments'?'Payments':t==='notifications'?'Notifications':'Analytics'}
          </div>
        ))}
      </div>

      {adminTab === 'products' && (
        <div>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
            <h3 style={{fontFamily:'var(--font-head)'}}>Products ({products.length})</h3>
            <button className="btn btn-primary btn-sm" onClick={showAddProduct ? closeProductForm : openAddProductForm}>
              {showAddProduct ? 'Cancel' : '+ Add Product'}
            </button>
          </div>
          {showAddProduct && (
            <div className="card" style={{marginBottom:20}}>
              <h4 style={{fontFamily:'var(--font-head)',marginBottom:8}}>
                {editingProductId !== null ? 'Edit Product' : 'Add New Product'}
              </h4>
              {editingProductId !== null && (
                <div style={{fontSize:12,color:'var(--text2)',marginBottom:12}}>
                  Product ID: {editingProductId}
                </div>
              )}
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <div className="input-wrap" style={{gridColumn:'span 2'}}>
                  <label className="input-label">Product Name *</label>
                  <input className="input" value={newProd.title} onChange={e=>setNewProd({...newProd,title:e.target.value})} placeholder="Samsung Galaxy S24" />
                </div>
                <div className="input-wrap">
                  <label className="input-label">Price (₹) *</label>
                  <input className="input" type="number" value={newProd.price} onChange={e=>setNewProd({...newProd,price:e.target.value})} placeholder="49999" />
                </div>
                <div className="input-wrap">
                  <label className="input-label">Category</label>
                  <select className="input" value={newProd.category} onChange={e=>setNewProd({...newProd,category:e.target.value})}>
                    {CATEGORIES.filter(c=>c!=='All').map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="input-wrap">
                  <label className="input-label">Icon Key</label>
                  <input className="input" value={newProd.emoji} onChange={e=>setNewProd({...newProd,emoji:e.target.value})} placeholder="box" />
                </div>
                <div className="input-wrap">
                  <label className="input-label">Stock</label>
                  <input className="input" type="number" value={newProd.stock} onChange={e=>setNewProd({...newProd,stock:e.target.value})} placeholder="100" />
                </div>
                <div className="input-wrap" style={{gridColumn:'span 2'}}>
                  <label className="input-label">Image URL</label>
                <input className="input" value={newProd.image} onChange={e=>setNewProd({...newProd,image:e.target.value})} placeholder="image/img_001.jpg" />
                </div>
                <div className="input-wrap" style={{gridColumn:'span 2'}}>
                  <label className="input-label">Upload Image From Device</label>
                  <input key={fileInputKey} className="input" type="file" accept="image/*" onChange={handleImageFileChange} />
                </div>
                {newProd.image && (
                  <div className="input-wrap" style={{gridColumn:'span 2'}}>
                    <label className="input-label">Image Preview</label>
                    <div style={{display:'flex',alignItems:'center',gap:10}}>
                      <ProductImage
                        product={newProd}
                        alt={newProd.title || 'New product preview'}
                        className="admin-prod-thumb"
                        fallbackSize="1.3rem"
                        style={{width:56,height:56,borderRadius:10}}
                      />
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => { setNewProd(prev => ({ ...prev, image:'' })); setFileInputKey(k => k + 1); }}
                      >
                        Remove Image
                      </button>
                    </div>
                  </div>
                )}
                <div className="input-wrap" style={{gridColumn:'span 2'}}>
                  <label className="input-label">Description</label>
                  <input className="input" value={newProd.desc} onChange={e=>setNewProd({...newProd,desc:e.target.value})} placeholder="Product description..." />
                </div>
              </div>
              <div style={{display:'flex',gap:10,marginTop:14}}>
                <button className="btn btn-primary" onClick={handleSaveProduct}>
                  {editingProductId !== null ? 'Update Product' : 'Add Product'}
                </button>
                <button className="btn btn-secondary" onClick={closeProductForm}>Cancel</button>
              </div>
            </div>
          )}
          <div style={{overflowX:'auto'}}>
            <input
              ref={quickImageInputRef}
              type="file"
              accept="image/*"
              style={{ display:'none' }}
              onChange={handleQuickImageUpload}
            />
            <table className="admin-table">
              <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Rating</th><th>Action</th></tr></thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id}>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:10}}>
                        <ProductImage product={p} alt={p.title} className="admin-prod-thumb" fallbackSize="1.1rem" />
                        <span style={{fontWeight:500,fontSize:13}}>{p.title.substring(0,35)}{p.title.length>35?'...':''}</span>
                      </div>
                    </td>
                    <td><span className="badge badge-blue">{p.category}</span></td>
                    <td style={{fontWeight:700,color:'var(--accent)'}}>₹{p.price.toLocaleString('en-IN')}</td>
                    <td><span style={{color:p.stock<10?'var(--red)':'var(--text)'}}>{p.stock}</span></td>
                    <td><Icon name="star" size={12} /> {p.rating}</td>
                    <td>
                      <div style={{display:'flex',gap:6}}>
                        <button className="btn btn-secondary btn-sm" onClick={()=>startEditProduct(p)}>Edit</button>
                        <button className="btn btn-secondary btn-sm" onClick={()=>openQuickImageUpload(p.id)}>Img</button>
                        <button className="btn btn-danger btn-sm" onClick={()=>handleDeleteProduct(p.id)}>Del</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {adminTab === 'orders' && (
        <div>
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:16}}>Recent Orders</h3>
          {ordersForAdmin.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"><Icon name="orders" size={44} /></div>
              <div className="empty-title">No live orders yet</div>
              <div className="empty-sub">Checkout complete hone ke baad orders yahan dikhenge</div>
            </div>
          ) : (
            <table className="admin-table">
              <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th></tr></thead>
              <tbody>
                {ordersForAdmin.map(o => (
                  <tr key={o.id}>
                    <td style={{fontFamily:'var(--font-head)',fontWeight:700,color:'var(--accent)'}}>#{o.id}</td>
                    <td style={{fontWeight:500}}>{o.user}</td>
                    <td>{o.items} items</td>
                    <td style={{fontWeight:700}}>₹{o.total.toLocaleString('en-IN')}</td>
                    <td>
                      <span className={`badge ${o.status==='Delivered'?'badge-green':o.status==='Shipped'?'badge-blue':o.status==='Processing'?'badge-gold':'badge-accent'}`}>
                        {o.status}
                      </span>
                    </td>
                    <td style={{color:'var(--text2)',fontSize:13}}>{o.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {adminTab === 'users' && (
        <div>
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:16}}>Users ({users.length})</h3>
          <table className="admin-table">
            <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Orders</th><th>Joined</th><th>Action</th></tr></thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td style={{fontWeight:600}}>{u.name}</td>
                  <td style={{color:'var(--text2)',fontSize:13}}>{u.email}</td>
                  <td><span className={`badge ${u.role==='admin'?'badge-gold':'badge-accent'}`}>{u.role}</span></td>
                  <td>{u.orders}</td>
                  <td style={{color:'var(--text2)',fontSize:13}}>{u.joined}</td>
                  <td><button className="btn btn-secondary btn-sm" onClick={()=>addToast('User management in production','info')}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {adminTab === 'inventory' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Inventory Management</h3>
          <div style={{display:'grid',gap:10}}>
            {products.slice(0, 20).map((item) => (
              <div key={item.id} style={{display:'flex',justifyContent:'space-between',padding:10,border:'1px solid var(--border)',borderRadius:10}}>
                <span>{item.title}</span>
                <span style={{color:item.stock <= 5 ? 'var(--red)' : 'var(--green)'}}>{item.stock} in stock</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {adminTab === 'categories' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Category Management</h3>
          {CATEGORIES.filter((c) => c !== 'All').map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            return <div key={cat} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--border)'}}><span>{cat}</span><span>{count} products</span></div>;
          })}
        </div>
      )}

      {adminTab === 'coupons' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Coupon System</h3>
          <table className="admin-table">
            <thead><tr><th>Code</th><th>Rule</th><th>Min Order</th><th>Status</th></tr></thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.code}>
                  <td style={{fontWeight:700}}>{coupon.code}</td>
                  <td>{coupon.discountPct ? `${coupon.discountPct}% OFF` : `₹${coupon.discountFlat} OFF`}</td>
                  <td>₹{coupon.minOrder}</td>
                  <td>
                    <button className="btn btn-secondary btn-sm" onClick={() => setCoupons((prev) => prev.map((entry) => entry.code === coupon.code ? { ...entry, active: !entry.active } : entry))}>
                      {coupon.active ? 'Active' : 'Paused'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {adminTab === 'banners' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Banner Management</h3>
          {banners.map((banner) => (
            <div key={banner.id} style={{padding:12,border:'1px solid var(--border)',borderRadius:10,marginBottom:10}}>
              <div style={{fontWeight:700}}>{banner.title}</div>
              <div style={{fontSize:12,color:'var(--text2)'}}>{banner.subtitle}</div>
              <button className="btn btn-secondary btn-sm" style={{marginTop:8}} onClick={() => setBanners((prev) => prev.map((entry) => entry.id === banner.id ? { ...entry, active: !entry.active } : entry))}>
                {banner.active ? 'Disable' : 'Enable'}
              </button>
            </div>
          ))}
        </div>
      )}

      {adminTab === 'sellerApproval' && (
        <div>
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:14}}>Seller Approval Queue ({pendingSellers.length})</h3>
          {pendingSellers.length === 0 ? <div className="empty-state"><div className="empty-title">No pending sellers</div></div> : (
            <div style={{display:'grid',gap:10}}>
              {pendingSellers.map((seller) => (
                <div key={seller.id} className="card" style={{padding:14}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}>
                    <div>
                      <div style={{fontWeight:700}}>{seller.storeName}</div>
                      <div style={{fontSize:12,color:'var(--text2)'}}>{seller.owner}</div>
                    </div>
                    <div style={{display:'flex',gap:8}}>
                      <button className="btn btn-primary btn-sm" onClick={() => setSellers((prev) => prev.map((entry) => entry.id === seller.id ? { ...entry, status:'approved' } : entry))}>Approve</button>
                      <button className="btn btn-danger btn-sm" onClick={() => setSellers((prev) => prev.map((entry) => entry.id === seller.id ? { ...entry, status:'rejected' } : entry))}>Reject</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {adminTab === 'returns' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Return / Refund Management</h3>
          {returnRequests.length === 0 ? <div style={{fontSize:13,color:'var(--text2)'}}>No return requests yet.</div> : returnRequests.map((req) => (
            <div key={req.id} style={{padding:10,border:'1px solid var(--border)',borderRadius:10,marginBottom:8}}>
              <div style={{fontWeight:600}}>{req.orderId}</div>
              <div style={{fontSize:12,color:'var(--text2)'}}>{req.reason} • {req.status}</div>
            </div>
          ))}
        </div>
      )}

      {adminTab === 'reviews' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Review Moderation</h3>
          {reviews.length === 0 ? <div style={{fontSize:13,color:'var(--text2)'}}>No user reviews yet.</div> : reviews.slice(0, 20).map((rv) => (
            <div key={rv.id} style={{padding:10,border:'1px solid var(--border)',borderRadius:10,marginBottom:8}}>
              <div style={{fontWeight:600}}>{rv.productTitle}</div>
              <div style={{fontSize:12,color:'var(--text2)'}}>{rv.comment}</div>
            </div>
          ))}
        </div>
      )}

      {adminTab === 'fraud' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Fraud Detection Alerts</h3>
          {fraudAlerts.length === 0 ? <div style={{fontSize:13,color:'var(--green)'}}>No suspicious orders detected.</div> : (
            <div style={{display:'grid',gap:10}}>
              {fraudAlerts.map((order) => (
                <div key={order.id} style={{padding:10,border:'1px solid rgba(255,68,102,0.35)',borderRadius:10}}>
                  <div style={{fontWeight:700}}>{order.id}</div>
                  <div style={{fontSize:12,color:'var(--text2)'}}>High value order: ₹{order.total.toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {adminTab === 'payments' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Payment Logs</h3>
          {paymentLogs.length === 0 ? <div style={{fontSize:13,color:'var(--text2)'}}>No payment logs available.</div> : (
            <table className="admin-table">
              <thead><tr><th>Log ID</th><th>Order</th><th>Gateway</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {paymentLogs.slice(0, 30).map((log) => (
                  <tr key={log.id}>
                    <td>{log.id}</td>
                    <td>{log.orderId}</td>
                    <td>{log.gateway}</td>
                    <td>₹{Number(log.amount || 0).toLocaleString('en-IN')}</td>
                    <td><span className={`badge ${log.status === 'success' ? 'badge-green' : 'badge-red'}`}>{log.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {adminTab === 'notifications' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Real-time Notifications</h3>
          {notifications.length === 0 ? <div style={{fontSize:13,color:'var(--text2)'}}>No notifications yet.</div> : notifications.slice(0, 25).map((note) => (
            <div key={note.id} style={{padding:10,border:'1px solid var(--border)',borderRadius:10,marginBottom:8}}>
              <div style={{fontWeight:600}}>{note.title}</div>
              <div style={{fontSize:11,color:'var(--text3)'}}>{note.date}</div>
            </div>
          ))}
        </div>
      )}

      {adminTab === 'analytics' && (
        <div>
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:20}}>Sales Analytics</h3>
          <div className="grid-2" style={{gap:20}}>
            {/* Revenue by Category */}
            <div className="card">
              <h4 style={{fontFamily:'var(--font-head)',marginBottom:16,fontSize:'1rem'}}>Revenue by Category</h4>
              {[
                {cat:'Electronics',pct:42,val:'₹1,80,093'},
                {cat:'Fashion',pct:28,val:'₹1,20,007'},
                {cat:'Home',pct:16,val:'₹68,576'},
                {cat:'Others',pct:14,val:'₹59,923'},
              ].map(r => (
                <div key={r.cat} style={{marginBottom:14}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontSize:13,marginBottom:5}}>
                    <span>{r.cat}</span>
                    <span style={{fontWeight:600}}>{r.val} <span style={{color:'var(--text2)',fontWeight:400}}>({r.pct}%)</span></span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width:`${r.pct}%`}} />
                  </div>
                </div>
              ))}
            </div>
            {/* Monthly Stats */}
            <div className="card">
              <h4 style={{fontFamily:'var(--font-head)',marginBottom:16,fontSize:'1rem'}}>Monthly Performance</h4>
              {[
                {month:'January',orders:214,growth:'+8%'},
                {month:'February',orders:287,growth:'+34%'},
                {month:'March',orders:342,growth:'+19%'},
              ].map(m => (
                <div key={m.month} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid var(--border)'}}>
                  <span style={{fontWeight:500}}>{m.month}</span>
                  <span style={{color:'var(--text2)',fontSize:13}}>{m.orders} orders</span>
                  <span style={{color:'var(--green)',fontWeight:600,fontSize:13}}>{m.growth}</span>
                </div>
              ))}
              <div style={{marginTop:16,padding:14,background:'rgba(34,212,126,0.06)',border:'1px solid rgba(34,212,126,0.2)',borderRadius:8}}>
                <div style={{fontSize:12,color:'var(--text2)'}}>Q1 2024 Total Revenue</div>
                <div style={{fontFamily:'var(--font-head)',fontSize:'1.5rem',fontWeight:800,color:'var(--green)'}}>₹4,28,599</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SellerPanel() {
  const { user, setAuthOpen, products, orders, addProduct, sellerTab, setSellerTab, registerSellerProfile, sellers, addToast } = useApp();
  const [storeName, setStoreName] = React.useState('');
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [sellerProduct, setSellerProduct] = React.useState({ title:'', category:'Electronics', price:'', stock:'', desc:'', image:'' });

  if (!user) {
    return (
      <div className="empty-state" style={{marginTop:60}}>
        <div className="empty-icon"><Icon name="seller" size={44} /></div>
        <div className="empty-title">Sign in as seller to access vendor panel</div>
        <button className="btn btn-primary" style={{marginTop:16}} onClick={() => setAuthOpen(true)}>Sign In</button>
      </div>
    );
  }

  const currentSeller = sellers.find((entry) => String(entry.owner).toLowerCase() === String(user.email).toLowerCase());
  const sellerProducts = products.filter((item) => String(item.sellerId) === String(currentSeller?.id || ''));
  const sellerOrders = orders.filter((order) => order.items.some((item) => String(item.sellerId) === String(currentSeller?.id || '')));
  const grossSales = sellerOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const commissionPct = Number(currentSeller?.commissionPct || 12);
  const netEarnings = Math.max(0, Math.round(grossSales * (100 - commissionPct) / 100));

  if (!currentSeller) {
    return (
      <div className="card" style={{maxWidth:560,margin:'40px auto'}}>
        <h2 style={{fontFamily:'var(--font-head)',marginBottom:8}}>Seller Onboarding</h2>
        <p style={{color:'var(--text2)',fontSize:13,marginBottom:14}}>Create your store profile to activate multi-vendor seller tools.</p>
        <div className="input-wrap">
          <label className="input-label">Store Name</label>
          <input className="input" value={storeName} onChange={e=>setStoreName(e.target.value)} placeholder="My Awesome Store" />
        </div>
        <button className="btn btn-primary" style={{marginTop:12}} onClick={() => {
          const ok = registerSellerProfile(storeName);
          if (!ok) addToast('Enter a valid store name', 'error');
        }}>Create Seller Profile</button>
      </div>
    );
  }

  const submitSellerProduct = () => {
    const title = sellerProduct.title.trim();
    const price = Number(sellerProduct.price);
    if (!title || !Number.isFinite(price) || price <= 0) {
      addToast('Add valid product title and price', 'error');
      return;
    }
    addProduct({
      ...sellerProduct,
      title,
      price,
      stock: Number(sellerProduct.stock) || 10,
      sellerId: currentSeller.id,
      tag: 'Seller',
      reviews:0,
      rating:4.4,
    });
    setSellerProduct({ title:'', category:'Electronics', price:'', stock:'', desc:'', image:'' });
  };

  return (
    <div className="dashboard fade-in">
      <div className="card" style={{marginBottom:20}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <div>
            <h2 style={{fontFamily:'var(--font-head)',fontSize:'1.4rem'}}>{currentSeller.storeName}</h2>
            <div style={{fontSize:13,color:'var(--text2)'}}>Status: <span className={`badge ${currentSeller.status === 'approved' ? 'badge-green' : currentSeller.status === 'pending' ? 'badge-gold' : 'badge-red'}`}>{currentSeller.status}</span></div>
          </div>
          <div style={{display:'flex',gap:10}}>
            <span className="badge badge-blue">Commission {commissionPct}%</span>
            <span className="badge badge-accent">Rating {Number(currentSeller.rating || 0).toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="grid-4" style={{marginBottom:20}}>
        {[
          { label:'Products', val:sellerProducts.length, icon:'box' },
          { label:'Orders', val:sellerOrders.length, icon:'orders' },
          { label:'Gross Sales', val:`₹${grossSales.toLocaleString('en-IN')}`, icon:'payment' },
          { label:'Net Earnings', val:`₹${netEarnings.toLocaleString('en-IN')}`, icon:'wallet' },
        ].map((card) => (
          <div key={card.label} className="card dash-stat">
            <Icon name={card.icon} size={20} />
            <div className="dash-stat-num">{card.val}</div>
            <div className="dash-stat-label">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="tabs">
        {['overview','products','orders','analytics','withdraw','store'].map((tab) => (
          <div key={tab} className={`tab ${sellerTab===tab?'active':''}`} onClick={()=>setSellerTab(tab)}>
            {tab === 'overview' ? 'Overview' : tab === 'products' ? 'Product Upload' : tab === 'orders' ? 'Order Mgmt' : tab === 'analytics' ? 'Sales Reports' : tab === 'withdraw' ? 'Withdrawals' : 'Store Customization'}
          </div>
        ))}
      </div>

      {sellerTab === 'overview' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:10}}>Seller Verification & Ratings</h3>
          <div style={{fontSize:13,color:'var(--text2)',lineHeight:1.8}}>
            Vendor ID: {currentSeller.id}<br />
            Approval Status: {currentSeller.status}<br />
            Reviews score: {Number(currentSeller.rating || 0).toFixed(1)} / 5.0
          </div>
        </div>
      )}

      {sellerTab === 'products' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Upload Product</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input className="input" value={sellerProduct.title} placeholder="Product title" onChange={e=>setSellerProduct({...sellerProduct,title:e.target.value})} />
            <input className="input" value={sellerProduct.price} placeholder="Price" onChange={e=>setSellerProduct({...sellerProduct,price:e.target.value})} />
            <select className="input" value={sellerProduct.category} onChange={e=>setSellerProduct({...sellerProduct,category:e.target.value})}>
              {CATEGORIES.filter((c) => c !== 'All').map((c) => <option key={c}>{c}</option>)}
            </select>
            <input className="input" value={sellerProduct.stock} placeholder="Stock" onChange={e=>setSellerProduct({...sellerProduct,stock:e.target.value})} />
            <input className="input" style={{gridColumn:'span 2'}} value={sellerProduct.image} placeholder="Image URL (optional)" onChange={e=>setSellerProduct({...sellerProduct,image:e.target.value})} />
            <input className="input" style={{gridColumn:'span 2'}} value={sellerProduct.desc} placeholder="Description" onChange={e=>setSellerProduct({...sellerProduct,desc:e.target.value})} />
          </div>
          <button className="btn btn-primary" style={{marginTop:12}} onClick={submitSellerProduct}>Publish Product</button>
          <div style={{marginTop:18,fontSize:13,color:'var(--text2)'}}>Your products: {sellerProducts.length}</div>
        </div>
      )}

      {sellerTab === 'orders' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Order Management</h3>
          {sellerOrders.length === 0 ? <div style={{fontSize:13,color:'var(--text2)'}}>No orders for your store yet.</div> : sellerOrders.map((order) => (
            <div key={order.id} style={{padding:10,border:'1px solid var(--border)',borderRadius:10,marginBottom:8}}>
              <div style={{fontWeight:700}}>#{order.id}</div>
              <div style={{fontSize:12,color:'var(--text2)'}}>Status: {order.status} • Amount: ₹{Number(order.total || 0).toLocaleString('en-IN')}</div>
            </div>
          ))}
        </div>
      )}

      {sellerTab === 'analytics' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Product Analytics & Reports</h3>
          {sellerProducts.map((item) => (
            <div key={item.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--border)'}}>
              <span>{item.title}</span>
              <span>{item.reviews || 0} reviews • {item.rating || 0}★</span>
            </div>
          ))}
        </div>
      )}

      {sellerTab === 'withdraw' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Withdrawal Requests</h3>
          <div className="input-wrap">
            <label className="input-label">Amount</label>
            <input className="input" value={withdrawAmount} onChange={e=>setWithdrawAmount(e.target.value)} placeholder="5000" />
          </div>
          <button className="btn btn-primary" style={{marginTop:10}} onClick={() => {
            const amount = Number(withdrawAmount);
            if (!Number.isFinite(amount) || amount <= 0) return addToast('Enter valid withdrawal amount', 'error');
            addToast(`Withdrawal request for ₹${amount.toLocaleString('en-IN')} submitted`, 'success');
            setWithdrawAmount('');
          }}>Request Withdrawal</button>
        </div>
      )}

      {sellerTab === 'store' && (
        <div className="card">
          <h3 style={{fontFamily:'var(--font-head)',marginBottom:12}}>Store Customization</h3>
          <div style={{display:'grid',gap:10}}>
            <input className="input" defaultValue={currentSeller.storeName} />
            <input className="input" placeholder="Store headline" defaultValue="Premium curated products" />
            <button className="btn btn-secondary btn-sm" onClick={() => addToast('Store settings saved', 'success')}>Save Store Settings</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* â”€â”€ AI CHATBOT â”€â”€ */
function Chatbot() {
  const { chatOpen, setChatOpen, addToCart, setSelectedProduct, setPage, products, trackProductView } = useApp();
  const starterRecommendations = React.useMemo(
    () => getDefaultRecommendations(products, 3).map(p => ({ ...p, aiReason: 'Trending, well-rated, and frequently purchased.' })),
    [products]
  );
  const [messages, setMessages] = React.useState(() => [
    { id: 1, role: 'ai', text: SMART_AI_WELCOME, recommendations: starterRecommendations }
  ]);
  const [input, setInput] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  React.useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior:'smooth' }); }, [messages]);
  React.useEffect(() => {
    setMessages(prev => {
      if (prev.length !== 1 || prev[0].role !== 'ai') return prev;
      return [{ ...prev[0], recommendations: starterRecommendations }];
    });
  }, [starterRecommendations]);

  const resetChat = () => {
    setMessages([{ id: Date.now(), role:'ai', text: SMART_AI_WELCOME, recommendations: starterRecommendations }]);
    setInput('');
  };

  const send = async () => {
    const txt = input.trim();
    if (!txt) return;
    const userMsg = { id: Date.now(), role:'user', text: txt };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    await new Promise(r => setTimeout(r, 700 + Math.random() * 450));

    const aiReply = buildSmartAIResponse(txt, products);
    setTyping(false);
    setMessages(prev => [
      ...prev,
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        role:'ai',
        text: aiReply.text,
        recommendations: aiReply.recommendations || [],
      }
    ]);
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
    trackProductView(product);
    setPage('detail');
    setChatOpen(false);
  };

  const quickReplies = [
    'Best shoes under 10k',
    'Premium headphones',
    'Top rated books',
    'Kitchen deals under 5k',
    'How long is delivery?',
    'Return policy details',
    'Payment options available',
  ];

  return (
    <>
      <button className="chatbot-btn" onClick={() => setChatOpen(!chatOpen)}>
        {chatOpen ? 'X' : (
          <span className="ai-anime-icon" aria-hidden="true">
            <span className="ai-face">
              <span className="ai-eye left" />
              <span className="ai-eye right" />
              <span className="ai-smile" />
            </span>
            <span className="ai-spark s1" />
            <span className="ai-spark s2" />
          </span>
        )}
      </button>
      {chatOpen && (
        <div className="chatbot-panel">
          <div className="chat-header">
            <div className="chat-ai-indicator">
              <span className="ai-anime-icon small" aria-hidden="true">
                <span className="ai-face">
                  <span className="ai-eye left" />
                  <span className="ai-eye right" />
                  <span className="ai-smile" />
                </span>
                <span className="ai-spark s1" />
                <span className="ai-spark s2" />
              </span>
              <div className="ai-dot" />
              <div>
                <div style={{fontWeight:700,fontSize:14}}>Fusion Smart AI</div>
                <div style={{fontSize:11,color:'var(--text2)'}}>Live product suggestions + details</div>
              </div>
            </div>
            <div style={{display:'flex',gap:8}}>
              <button className="btn btn-secondary btn-sm" onClick={resetChat}>Reset</button>
              <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>setChatOpen(false)}>X</button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`chat-msg ${msg.role}`}>
                <div className="chat-bubble" style={{whiteSpace:'pre-line'}}>{msg.text}</div>

                {msg.role === 'ai' && msg.recommendations && msg.recommendations.length > 0 && (
                  <div className="chat-reco-list">
                    {msg.recommendations.map(product => {
                      const discount = getDiscountPct(product);
                      return (
                        <div key={`${msg.id}-${product.id}`} className="chat-reco-card">
                          <div className="chat-reco-head">
                            <ProductImage product={product} alt={product.title} className="chat-reco-thumb" fallbackSize="0.95rem" />
                            <div>
                              <div className="chat-reco-title">{product.title}</div>
                              <div className="chat-reco-meta">
                                ₹{product.price.toLocaleString('en-IN')} • {product.rating.toFixed(1)}★ • {discount}% off
                              </div>
                            </div>
                          </div>
                          {product.aiReason && <div className="chat-reco-reason">{product.aiReason}</div>}
                          <div className="chat-reco-actions">
                            <button className="btn btn-secondary btn-sm" onClick={() => openDetails(product)}>Details</button>
                            <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>Add to Cart</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg ai">
                <div className="chat-bubble" style={{display:'flex',gap:4,alignItems:'center'}}>
                  <span style={{animation:'pulse 1s infinite',animationDelay:'0s'}}>.</span>
                  <span style={{animation:'pulse 1s infinite',animationDelay:'0.2s'}}>.</span>
                  <span style={{animation:'pulse 1s infinite',animationDelay:'0.4s'}}>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div style={{padding:'8px 16px',display:'flex',gap:6,flexWrap:'wrap'}}>
              {quickReplies.map(q => (
                <button key={q} onClick={()=>{setInput(q);}} className="filter-btn" style={{fontSize:11,padding:'5px 10px'}}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-row">
            <input className="chat-input" placeholder="Ask about products, price, delivery, returns, or any shopping doubt..." value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>e.key==='Enter'&&send()} />
            <button onClick={send} style={{width:36,height:36,borderRadius:'50%',background:'var(--accent)',border:'none',cursor:'pointer',color:'#fff',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center'}}>
              {'>'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* -- FOOTER -- */
function Footer() {
  const { setPage, user } = useApp();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo brand-logo">
            <span className="brand-mark"><span className="brand-mark-core">F</span></span>
            <span className="brand-word">Fu<span className="brand-accent">si</span>on Mart 2.O</span>
          </div>
          <div className="footer-desc">India's smartest AI-powered marketplace. Discover millions of products with personalized recommendations.</div>
          <div style={{display:'flex',gap:10,marginTop:16}}>
            {['phone','chat','dash','admin'].map((ic,i) => (
              <div key={i} style={{width:36,height:36,background:'var(--card2)',border:'1px solid var(--border)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',fontSize:16}}>
                <Icon name={ic} size={16} />
              </div>
            ))}
          </div>
        </div>
        {[
          { heading:'Shop', links:['Electronics','Fashion','Home & Kitchen','Sports','Books','Beauty'] },
          { heading:'Help', links:['Track Order','Returns','FAQs','Contact Us','Seller Center'] },
          { heading:'Company', links:['About Us','Careers','Press','Sustainability','Investors'] },
        ].map(col => (
          <div key={col.heading}>
            <div className="footer-heading">{col.heading}</div>
            <div className="footer-links">
              {col.links.map(l => (
                <div
                  key={l}
                  className="footer-link"
                  onClick={() => {
                    if (l === 'Seller Center') setPage(user?.role === 'seller' ? 'seller' : 'dashboard');
                    else setPage('products');
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div>© 2024 Fusion Mart. All rights reserved.</div>
        <div style={{display:'flex',gap:20}}>
          <span className="footer-link">Privacy Policy</span>
          <span className="footer-link">Terms of Service</span>
          <span className="footer-link">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError:false };
  }
  static getDerivedStateFromError() {
    return { hasError:true };
  }
  componentDidCatch(err) {
    console.error('FusionMart runtime error:', err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="empty-state" style={{minHeight:300}}>
          <div className="empty-title">Something went wrong</div>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>Reload App</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const { page } = useApp();
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                window.location.reload();
              }
            });
          }
        });
      }).catch(() => {});
    }
  }, []);

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage />;
      case 'products': return <div style={{padding:'40px 20px',maxWidth:1280,margin:'0 auto'}}><ProductsPage /></div>;
      case 'detail': return <ProductDetail />;
      case 'checkout': return <Checkout />;
      case 'dashboard': return <Dashboard />;
      case 'admin': return <div style={{padding:'40px 20px',maxWidth:1280,margin:'0 auto'}}><AdminPanel /></div>;
      case 'seller': return <div style={{padding:'40px 20px',maxWidth:1280,margin:'0 auto'}}><SellerPanel /></div>;
      default: return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar />
      <AppErrorBoundary>
        <main style={{minHeight:'calc(100vh - 64px)'}}>
          {renderPage()}
        </main>
      </AppErrorBoundary>
      <Footer />
      <CartDrawer />
      <AuthModal />
      <Chatbot />
      <Toast />
    </div>
  );
}

function Root() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

