const CACHE_DYNAMIC = 'dynamic-v1'; // Para los archivos que se van a descargar
const CACHE_STATIC = 'static-v1'; // App shell
const CACHE_INMUTABLE = 'inmutable-v1'; // CDN de terceros como librerias etc

const limpiarCache = (cacheName, numberItem) => {
    caches.open(cacheName)
        .then(cache => {
            cache.keys()
                .then(keys => {
                    if(keys.length > numberItem) {
                        cache.delete(keys[0])
                            .then(limpiarCache(cacheName, numberItem))
                    }
                })
        })
}

self.addEventListener('install', function(event) {
    const cachePromise = caches.open(CACHE_STATIC).then(function (cache) {
        
        // Archivos necesarios para que la aplicación pueda funcionar
        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            '/sw.js',
            'static/js/bundle.js',
            '/favicon.ico',
            '/pages/404Page.html',
        ])
    })


    event.waitUntil(Promise.all([cachePromise]));
})

self.addEventListener('fetch', function (event) {
    
    const respuesta = caches.match(event.request).then(response => {
        if (response) return response
        
        //Si no existe el archivo lo descarga de la web
        return fetch(event.request).then(newResponse => {

            caches.open(CACHE_DYNAMIC)
            .then(cache => {
                cache.put(event.request, newResponse)
                limpiarCache(CACHE_DYNAMIC, 20)
            })
            return newResponse.clone()
        })
        .catch(err => {
            // Retornamos página 404 cuando no se encuentra el recurso
            if (event.request.headers.get('accept').includes('text/html')) {
                return caches.match('/pages/404Page.html')
            }
        })
    })
    event.respondWith(respuesta)
})