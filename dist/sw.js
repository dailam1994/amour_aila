if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),u={module:{uri:r},exports:t,require:o};s[r]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(l(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/admin.layout.e35be355.js",revision:null},{url:"assets/client.layout.457d50b7.js",revision:null},{url:"assets/guest.about.4fae4dfa.js",revision:null},{url:"assets/guest.blog.1e529a0a.js",revision:null},{url:"assets/guest.contact.84af5ad1.js",revision:null},{url:"assets/guest.login.55cc07c1.js",revision:null},{url:"assets/guest.service.614cfd0f.js",revision:null},{url:"assets/index.6af95b28.js",revision:null},{url:"assets/index.d277bf68.css",revision:null},{url:"assets/useBooking.all.04bb663e.js",revision:null},{url:"assets/vendor.744e3b36.js",revision:null},{url:"index.html",revision:"99d97e3d4d61ac4e1aca05d7f5acd10e"},{url:"favicon.ico",revision:"cd2ae4b5f8143cf077e942ba57a7910b"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"771d7ef04f2e639138631efb400a2d09"},{url:"manifest.webmanifest",revision:"41da3210e1a08cfd1bee1aa1a429b755"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
