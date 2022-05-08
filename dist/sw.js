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
            { url: "assets/admin.layout.2d52a7d0.js", revision: null },
            { url: "assets/client.layout.dd1eeeb3.js", revision: null },
            { url: "assets/guest.about.8b7e696b.js", revision: null },
            { url: "assets/guest.blog.cd3965fd.js", revision: null },
            { url: "assets/guest.contact.f13ba422.js", revision: null },
            { url: "assets/guest.login.88d56f5f.js", revision: null },
            { url: "assets/guest.service.cb88c9f1.js", revision: null },
            { url: "assets/index.6b711567.js", revision: null },
            { url: "assets/index.d277bf68.css", revision: null },
            { url: "assets/record.update.a6ece0a1.js", revision: null },
            { url: "assets/vendor.3d87cbec.js", revision: null },
            { url: "index.html", revision: "9ec1452f6be9ae63e3113d081fb6839b" },
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
workbox.precaching.precacheAndRoute([{"revision":"a2f4c35190ec8e6fabe46138b9adfb0a","url":"android-chrome-192x192.png"},{"revision":"d03268467a9b4d25a81792c17f2204a8","url":"android-chrome-512x512.png"},{"revision":"771d7ef04f2e639138631efb400a2d09","url":"apple-touch-icon.png"},{"revision":"73fb4e62236172ed1aa70d518b4fc022","url":"assets/admin.layout.2d52a7d0.js"},{"revision":"ed8904e4c5c8c328a04d1dbaadf8116f","url":"assets/client.layout.dd1eeeb3.js"},{"revision":"b3f9a850306882467c8a06d2b2674f00","url":"assets/guest.about.8b7e696b.js"},{"revision":"fb313ccd8425664a541a96b1ab04bec9","url":"assets/guest.blog.cd3965fd.js"},{"revision":"23629975f77d07c3d4013204615d3e66","url":"assets/guest.contact.f13ba422.js"},{"revision":"f911110d68bd58c88fa52845b51f0f44","url":"assets/guest.login.88d56f5f.js"},{"revision":"f2ec37527a03a866f2bf31d9f8a332a5","url":"assets/guest.service.cb88c9f1.js"},{"revision":"b12653b2b4158d8fdacd236d076a4c4d","url":"assets/index.6b711567.js"},{"revision":"31d1a801f7134c420059132a1b2d43bf","url":"assets/index.d277bf68.css"},{"revision":"4545cf5d7582b8f4c93a40bc809d5d27","url":"assets/record.update.a6ece0a1.js"},{"revision":"d6974eef5cd6fd0a2a9ad390f47e6427","url":"assets/vendor.3d87cbec.js"},{"revision":"37d0f7f71b2fbebf3d42d4a7eb4071a6","url":"browserconfig.xml"},{"revision":"83a2877cb540b1f98787d6e874a9e52d","url":"favicon-16x16.png"},{"revision":"4091ecc36013862fc72fe8f71926ec4f","url":"favicon-32x32.png"},{"revision":"cd2ae4b5f8143cf077e942ba57a7910b","url":"favicon.ico"},{"revision":"9ec1452f6be9ae63e3113d081fb6839b","url":"index.html"},{"revision":"41da3210e1a08cfd1bee1aa1a429b755","url":"manifest.webmanifest"},{"revision":"340777f19bb984a626adef7d41260f80","url":"mstile-150x150.png"},{"revision":"f77c87f977e0fcce05a6df46c885a129","url":"robots.txt"},{"revision":"3160eba834fda7b2ad8f03f81a231398","url":"safari-pinned-tab.svg"},{"revision":"5988440eb82bf82353127585dec11394","url":"site.webmanifest"},{"revision":"9b54c1e88eb43c57fdd0227f3bb03ecb","url":"workbox-b3e22772.js"}])
