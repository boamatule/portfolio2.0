import{clientsClaim}from"workbox-core";import{ExpirationPlugin}from"workbox-expiration";import{precacheAndRoute,createHandlerBoundToURL}from"workbox-precaching";import{registerRoute}from"workbox-routing";import{StaleWhileRevalidate}from"workbox-strategies";clientsClaim(),precacheAndRoute(self.__WB_MANIFEST);const fileExtensionRegexp=/\/[^/?]+\.[^/]+$/;registerRoute(({request:e,url:t})=>"navigate"===e.mode&&!t.pathname.startsWith("/_")&&!t.pathname.match(fileExtensionRegexp),createHandlerBoundToURL(process.env.PUBLIC_URL+"/index.html")),registerRoute(({url:e})=>e.origin===self.location.origin&&e.pathname.endsWith(".png"),new StaleWhileRevalidate({cacheName:"images",plugins:[new ExpirationPlugin({maxEntries:50})]})),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()});