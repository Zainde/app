/*
 * Installer Service Worker
 * Lytter efter install event og tilføjer App Shell filer til cache
 */
self.addEventListener("install", function(e) {
    console.log("Service Worker Installed");
    e.waitUntil(
        caches.open('AppTest').then(function(cache) {
            return cache.addAll([
                // '/',
                '/index.html',
                // '/resources/css/style.css',
                '/app.js'
            ]);
            console.log("test1");
        })
    );
});

/*
 * Aktiver Service Worker
 */
self.addEventListener("activate", function(event) {
    console.log("Service Worker Activated");
});

/*
 * Service Worker Fetch
 * Tjek cache efter match og returner hvis der er et match
 * Ellers hent fil via netværk og tilføj til cache
 */
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.open('AppTest').then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
