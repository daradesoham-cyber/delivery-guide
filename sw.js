const C='dg-v4',F=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./img/entrance.jpg','./img/exit.jpg','./img/rampallparking.jpg','./img/rampexit.jpg','./img/ramptogotoallparkinglevels.jpg','./img/t1.jpg','./img/t2.jpg','./img/t2_1.jpg','./img/t3.jpg','./img/t4.jpg','./img/t5.jpg','./img/waytop1.jpg','./img/waytop2.jpg','./img/waytop3.jpg','./img/waytop4.jpg','./img/waytop5.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
