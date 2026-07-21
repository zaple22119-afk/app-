self.addEventListener('install', (e) => {
  console.log('Service Worker nainstalován.');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
