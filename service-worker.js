var cacheName='MiweatherPWA';
var dataCacheName = 'MiweatherPWA-v2';
var filesToCache = [
  '/',
  '/Weather.html',
  '/Weather.js',
  '/summer-rain.png'
];

/*

//INTAL DE SERVICE WORKER
self.addEventListener('install',function (e) {//cacheamos los elemto sdel app shell  htmk css etc
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {//abrimos cache
			return cache.addAll(filesToCache);//takes a list of urls and then fetches them from de server and adds the responseto the cache
			
		})
	)
})

//CLEAN CACHE FILE
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {//gets a list of current cache key(caches.key().) and iterates through them using the map function
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});
*/