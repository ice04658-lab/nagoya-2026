const cacheName = 'nagoya-2026-v5-landmark-quests';
const files = ['./', './style.css', './app.js'];
const assetUrls = files.slice(1).map(file => new URL(file, self.registration.scope).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('nagoya-2026-') && name !== cacheName).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const home = new URL(self.registration.scope);
  const isHome = request.mode === 'navigate' && url.origin === home.origin &&
    (url.pathname === home.pathname || url.pathname === home.pathname + 'index.html');
  if (!isHome && !assetUrls.includes(url.href)) return;

  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const key = isHome ? home.href : request;
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(key, response.clone());
      return response;
    } catch {
      return (await cache.match(key)) ?? Response.error();
    }
  })());
});
