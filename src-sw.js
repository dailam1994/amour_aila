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
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)
