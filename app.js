/**
 * Installer service worker hvis nødvendigt
 * Du skal referere til denne fil fra dit sites footer
 * Bemærk at din service worker fil skal ligge på roden af dit site (Linie 8)
 */
if('serviceworker' in navigator) {
  console.log(test);
    window.addEventListener("load", () => {
      console.log(test1);
        navigator.serviceWorker.register('.../serviceworker.js')
            .then(registration => {
                console.log("Service Worker registered");
            })
            .catch(error => {
                console.error("Registration failed!");
            })
            console.log(test2);
    })
}
