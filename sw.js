const staticCacheArray='calen-v4';
const dynamicCacheArray='calen-dyn-v1';
const assets=[
    'index.html',
    'events.html',
    'manifest.json',
    'js/events.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css ',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js'
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
                caches.open(dynamicCacheArray)
                .then(openCache=>{
                    openCache.add(fetchRes);
                })
                .catch(error=>console.log(`Error in caching to dynamic array ${error}`))
            })
        })
        .catch(error=>console.log(`Error in fetching resource ${error}`))
    );
});