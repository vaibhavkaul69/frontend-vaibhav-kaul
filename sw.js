const staticCacheArray='calen-static-v5';
const dynamicCacheArray='calen-dynamic';
const assets=[
    './',
    './index.html',
    './manifest.json',
    './events.html',
    './js/events.js',
    './assets/done.png',
    './assets/pencil.png',
    './fallback.html'
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
        .then(cacheArray=>
            {
                let filteredArray=cacheArray.filter(element=>element.includes('static'));
                filteredArray.map(element=>{
                    if(element!==staticCacheArray){
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
        .catch(()=>caches.match('./fallback.html'))
    );
});