const isLocalhost=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(o){"production"===process.env.NODE_ENV&&"serviceWorker"in navigator&&new URL(process.env.PUBLIC_URL,window.location.href).origin===window.location.origin&&window.addEventListener("load",()=>{var e=process.env.PUBLIC_URL+"/service-worker.js";isLocalhost?(checkValidServiceWorker(e,o),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):registerValidSW(e,o)})}function registerValidSW(e,r){navigator.serviceWorker.register(e).then(o=>{o.onupdatefound=()=>{const e=o.installing;null!=e&&(e.onstatechange=()=>{"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),r&&r.onUpdate&&r.onUpdate(o)):(console.log("Content is cached for offline use."),r&&r.onSuccess&&r.onSuccess(o)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}function checkValidServiceWorker(r,n){fetch(r,{headers:{"Service-Worker":"script"}}).then(e=>{var o=e.headers.get("content-type");404===e.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):registerValidSW(r,n)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}export{register,unregister};