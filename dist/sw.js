// Import Script Required for Workbox 1)
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js")

if (!self.define) {
   let e,
      s = {}
   const i = (i, n) => (
      (i = new URL(i + ".js", n).href),
      s[i] ||
         new Promise((s) => {
            if ("document" in self) {
               const e = document.createElement("script")
               ;(e.src = i), (e.onload = s), document.head.appendChild(e)
            } else (e = i), importScripts(i), s()
         }).then(() => {
            let e = s[i]
            if (!e) throw new Error(`Module ${i} didn’t register its module`)
            return e
         })
   )
   self.define = (n, l) => {
      const r = e || ("document" in self ? document.currentScript.src : "") || location.href
      if (s[r]) return
      let t = {}
      const o = (e) => i(e, r),
         u = { module: { uri: r }, exports: t, require: o }
      s[r] = Promise.all(n.map((e) => u[e] || o(e))).then((e) => (l(...e), t))
   }
}

define(["./workbox-b3e22772"], function (e) {
   "use strict"
   self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
   }),
      e.precacheAndRoute(
         [
            { url: "assets/admin.layout.9ce22058.js", revision: null },
            { url: "assets/client.layout.563f0b0b.js", revision: null },
            { url: "assets/guest.about.be9c9100.js", revision: null },
            { url: "assets/guest.blog.821cb4d0.js", revision: null },
            { url: "assets/guest.contact.ba4d0e75.js", revision: null },
            { url: "assets/guest.login.f84343e3.js", revision: null },
            { url: "assets/guest.service.5c2606d6.js", revision: null },
            { url: "assets/index.9b40d5cc.js", revision: null },
            { url: "assets/index.d277bf68.css", revision: null },
            { url: "assets/record.update.9ade2f00.js", revision: null },
            { url: "assets/vendor.94faf113.js", revision: null },
            { url: "index.html", revision: "4bdb7ea7cd3c15f02f57bdac58da9b9c" },
            { url: "favicon.ico", revision: "cd2ae4b5f8143cf077e942ba57a7910b" },
            { url: "robots.txt", revision: "f77c87f977e0fcce05a6df46c885a129" },
            { url: "apple-touch-icon.png", revision: "771d7ef04f2e639138631efb400a2d09" },
            { url: "manifest.webmanifest", revision: "41da3210e1a08cfd1bee1aa1a429b755" },
         ],
         {}
      ),
      e.cleanupOutdatedCaches(),
      e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))
})

// Caching Application Files
workbox.routing.registerRoute(
   /\.(?:html|htm|xml|css|js|jsx|webmanifest)$/,
   new workbox.strategies.NetworkFirst({
      cacheName: "assets",
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 1000,
            maxAgeSeconds: 3600,
         }),
      ],
   })
)

// Caching Application Images
workbox.routing.registerRoute(
   /\.(?:png|jpg|jpeg|gif|webp|svg)$/,
   new workbox.strategies.NetworkFirst({
      cacheName: "images",
      plugins: [
         new workbox.expiration.ExpirationPlugin({
            maxEntries: 1000,
            maxAgeSeconds: 3600,
         }),
      ],
   })
)

// Caching Google Fonts
workbox.routing.registerRoute(
   new RegExp("^https://fonts.(?:googleapis|gstatic).com/(.*)"),
   new workbox.strategies.NetworkFirst({
      cacheName: "google-fonts-stylesheets",
   })
)

// Caching Application API GET Data
workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/user/auth"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-auth",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/users"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-admin-users",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/availabilities"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-admin-availabilities",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/appointment/upcoming"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-admin-appointment-upcoming",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/appointment/today"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-admin-appointment-today",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/appointment/history"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-admin-appointment-today",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/user/client"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-client-session",
   })
)

workbox.routing.registerRoute(
   new RegExp("http://localhost:3333/api/bookings"),
   new workbox.strategies.NetworkFirst({
      cacheName: "get-client-bookings",
   })
)

// Required Workbox Precaching 2)
workbox.precaching.cleanupOutdatedCaches()
workbox.precaching.precacheAndRoute([{"revision":"a2f4c35190ec8e6fabe46138b9adfb0a","url":"android-chrome-192x192.png"},{"revision":"d03268467a9b4d25a81792c17f2204a8","url":"android-chrome-512x512.png"},{"revision":"771d7ef04f2e639138631efb400a2d09","url":"apple-touch-icon.png"},{"revision":"b4a8097d2b92daf94f7cc3ad2bcc8571","url":"assets/admin.layout.9ce22058.js"},{"revision":"c7a12da066f44664e722c9e270ae1723","url":"assets/client.layout.563f0b0b.js"},{"revision":"4871f2b4268a9ffe1dafafd2b319d775","url":"assets/guest.about.be9c9100.js"},{"revision":"7036b483a5aa7a742b6efaabb2fc529a","url":"assets/guest.blog.821cb4d0.js"},{"revision":"7902d8f225f6da4f3532ca9b6d6d2e4b","url":"assets/guest.contact.ba4d0e75.js"},{"revision":"dfb5f1ac56c79186aad77969738983dc","url":"assets/guest.login.f84343e3.js"},{"revision":"061ae566ef790e24dcd95ad4b879cb92","url":"assets/guest.service.5c2606d6.js"},{"revision":"bdd2b2b94380368287dea88bbd029979","url":"assets/index.9b40d5cc.js"},{"revision":"31d1a801f7134c420059132a1b2d43bf","url":"assets/index.d277bf68.css"},{"revision":"f6003297b3309751484ac94547a3fd01","url":"assets/record.update.9ade2f00.js"},{"revision":"5411385b0d2b062e06a9d182b723e763","url":"assets/vendor.94faf113.js"},{"revision":"37d0f7f71b2fbebf3d42d4a7eb4071a6","url":"browserconfig.xml"},{"revision":"83a2877cb540b1f98787d6e874a9e52d","url":"favicon-16x16.png"},{"revision":"4091ecc36013862fc72fe8f71926ec4f","url":"favicon-32x32.png"},{"revision":"cd2ae4b5f8143cf077e942ba57a7910b","url":"favicon.ico"},{"revision":"4bdb7ea7cd3c15f02f57bdac58da9b9c","url":"index.html"},{"revision":"41da3210e1a08cfd1bee1aa1a429b755","url":"manifest.webmanifest"},{"revision":"340777f19bb984a626adef7d41260f80","url":"mstile-150x150.png"},{"revision":"f77c87f977e0fcce05a6df46c885a129","url":"robots.txt"},{"revision":"3160eba834fda7b2ad8f03f81a231398","url":"safari-pinned-tab.svg"},{"revision":"5988440eb82bf82353127585dec11394","url":"site.webmanifest"},{"revision":"9b54c1e88eb43c57fdd0227f3bb03ecb","url":"workbox-b3e22772.js"}])
