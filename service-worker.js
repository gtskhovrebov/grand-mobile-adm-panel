const CACHE_NAME='gm-admin-panel-ios-v2-final';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-152.png','./icon-167.png','./icon-180.png','./icon-192.png','./icon-512.png','./templates.json','./punishments.json','./senior_admin_templates.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS.filter(Boolean))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
