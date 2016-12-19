var cacheName='MizonaCache-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/js/script.js',
  '/img/city512.png',
  '/img/city384.png',
  '/img/city256.png',
  '/img/city192.png',
  '/img/city144.png',
  '/img/city128.png',
  '/img/city96.png',
  '/img/city48.png',
  '/img/barrio.png'
];

//////Open a cache.
////Cache our files.
//Confirm whether all the required assets are cached or not.

//INTAL DE SERVICE WORKER
self.addEventListener('install',function (e) {//cacheamos los elemto sdel app shell  htmk css etc
	e.waitUntil(
		caches.open(cacheName)//abrimos cache
    .then(function (cache) {
       console.log('Opened cache');
			return cache.addAll(filesToCache);//takes a list of urls and then fetches them from de server and adds the responseto the cache
			
		})
	)
})

/*
This is a chain of promises (caches.open() and cache.addAll()). 
The event.waitUntil() method takes a promise and uses it to know how long installation takes, and whether it succeeded.
Defining a long list of files will increase the chance that one file may fail to cache, leading to your service worker not getting installed.
*/

//FETCH
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)//This method looks at the request and finds any cached results from any of the caches your service worker created.
      .then(function(response) {
        // Cache hit - return response
        if (response) {//If we have a matching response,
          console.log("cache version");
          return response; //we return the cached value
        }
          console.log("using network version");
        return fetch(event.request);//otherwise we return the result of a call to fetch
      }
    )
  );
});

/*
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)//This method looks at the request and finds any cached results from any of the caches your service worker created.
      .then(function(response) {
        // Cache hit - return response
        if (response) {//If we have a matching response,
          return response;//we return the cached value
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
*/




//CLEAN CACHE FILE
//creo q no funciona
/*
self.addEventListener('activate', function(e) {
  var cacheWhitelist =['MizonaCache-v1'];
  console.log('[ServiceWorker] Activate');

  e.waitUntil(
    caches.keys().then(function(cacheNames) {//gets a list of current cache key(caches.key().) and iterates through them using the map function
      return Promise.all(
        cacheNames.map(function(cacheName) {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
      }));
    })
  );
});
*/