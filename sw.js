const CACHE_NAME = 'fusionmart-v2-cache';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.webmanifest',
  './image/img_001.jpg',
  './image/img_002.jpg',
  './image/img_003.jpg',
  './image/img_004.jpg',
  './image/img_005.jpg',
  './image/img_006.jpg',
  './image/img_007.jpg',
  './image/img_008.jpg',
  './image/img_009.jpg',
  './image/img_010.jpg',
  './image/img_011.jpg',
  './image/img_012.jpg',
  './image/img_013.jpg',
  './image/img_014.jpg',
  './image/img_015.jpg',
  './image/img_016.jpg',
  './image/img_017.jpg',
  './image/img_018.jpg',
  './image/img_019.jpg',
  './image/img_020.jpg',
  './image/img_021.jpg',
  './image/img_022.jpg',
  './image/img_023.jpg',
  './image/img_024.jpg',
  './image/img_025.jpg',
  './image/img_026.jpg',
  './image/img_027.jpg',
  './image/img_028.jpg',
  './image/img_029.jpg',
  './image/91bYsX41DVL._SL1500_.jpg',
  './image/nike-air.avif',
  './image/placeholder.svg',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

const isAppShellRequest = (request) => {
  const url = new URL(request.url);
  return url.origin === self.location.origin && (
    request.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname.endsWith('/index.html') ||
    url.pathname.endsWith('/script.js') ||
    url.pathname.endsWith('/style.css') ||
    url.pathname.endsWith('/manifest.webmanifest')
  );
};

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  if (isAppShellRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
