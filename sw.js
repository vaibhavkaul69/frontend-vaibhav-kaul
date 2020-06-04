const staticCacheArray='calen-v1';
const dynamicCacheArray='calen-dyn-v1';
const assets=[
    '/',
    '/index.html',
    '/events.html',
    '/manifest.json',
    '/js/events.js',
    '/assets/done.png',
    '/assets/pencil.png'
];

self.addEventListener('install',installEvent=>{
   installEvent.waitUntil(
       caches.open(staticCacheArray)
       .then(openCache=>{
           openCache.addAll(assets)
       })
       .catch(error=>console.log(`Error while caching assets ${error}`))
   );
   self.skipWaiting();
});

self.addEventListener('activate',actEvent=>{
    console.log(actEvent);
    actEvent.waitUntil(
        caches.keys()
        .then(cacheArray=>{
            cacheArray.map(element=>{
                if(element!==staticCacheArray && element!==dynamicCacheArray){
                    caches.delete(element);
                }
            })
        })
    );
});


self.addEventListener('fetch',fetchEvent=>{
   
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then(matchRes=>{
            return matchRes || fetch(fetchEvent.request).then(fetchRes=>{
                return caches.open(dynamicCacheArray)
                .then(openCache=>{
                    openCache.put(fetchEvent.request,fetchRes.clone());
                    return fetchRes;
                })
                .catch(error=>console.log(`Error in caching to dynamic array ${error}`))
            })
        })
        .catch(error=>console.log(`Error in fetching resource ${error}`))
    );
});