const CACHE_NAME = 'basketmate-v7';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/style.css',
    '/js/app.js',
    '/js/api.js',
    '/js/ui.js',
    '/js/utils.js',
    '/img/logo.png',
    '/img/icon-192.png',
    '/img/icon-512.png'
];

// Install — cache all static assets
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

// Activate — remove old caches
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Fetch strategy
self.addEventListener('fetch', e => {
    const url = e.request.url;

    // Skip SSE and API calls — always network
    if (url.includes('/events') ||
        url.includes('/items') ||
        url.includes('/aisles')) {
        return;
    }

    // Cache-first for static assets
    if (e.request.destination === 'style' ||
        e.request.destination === 'script' ||
        e.request.destination === 'image') {
        e.respondWith(
            caches.match(e.request).then(cached => cached || fetch(e.request))
        );
        return;
    }

    // Network-first for everything else (HTML, navigation)
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
