import{u as k,j as d,F as v,a as e,_ as R,B as g,T as y,r as s,R as I,b as h,I as f,d as O,c as T,e as P,f as N,L as u,g as A,A as z,C as S,h as G,i as B,k as D,M as W,l as $,m as q,n as M,o as F,p as V,v as j,q as Q,Q as U,s as H,t as K,w as J}from"./vendor.744e3b36.js";const X=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}};X();const Y="modulepreload",w={},Z="/",p=function(i,o){return!o||o.length===0?i():Promise.all(o.map(r=>{if(r=`${Z}${r}`,r in w)return;w[r]=!0;const t=r.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":Y,t||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),t)return new Promise((m,x)=>{n.addEventListener("load",m),n.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>i())},ee=async()=>(await((o=2200)=>new Promise(r=>setTimeout(r,o)))(),await fetch("http://localhost:3333/api/user/auth",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(o=>{switch(o.status){case 200:return o.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(o=>{if(o)return o}).catch(o=>console.log(o))),te=()=>k("guest-auth",ee,{refetchOnWindowFocus:!1}),_=()=>d(v,{children:[e(R,{navButtonsProps:{style:{color:"rgb(74, 80, 181)",backgroundColor:"transparent",borderRadius:0}},children:[{id:1,src:"../assets/img/carousel-food-wood-dawn-fashion.webp",alt:"carousel-food-wood-dawn-fashion"},{id:2,src:"../assets/img/carousel-woman-in-blue-t-shirt-and-blue-shorts-sitting-on-bed.webp",alt:"carousel-woman-in-blue-t-shirt-and-blue-shorts-sitting-on-bed"},{id:3,src:"../assets/img/carousel-wood-fashion-hands-people.webp",alt:"carousel-wood-fashion-hands-people"}].map(i=>e(g,{sx:{p:0},children:e("img",{className:"carousel-img",src:i.src,alt:i.alt,height:"auto",width:"auto"})},i.id))}),e(y,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Welcome to AmourAila,"})}),e(y,{sx:{my:"10px",mx:"30px",pb:"10px"},style:{color:"rgb(0,0,0)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),re=s.exports.lazy(()=>p(()=>import("./guest.about.4fae4dfa.js"),["assets/guest.about.4fae4dfa.js","assets/vendor.744e3b36.js"])),oe=s.exports.lazy(()=>p(()=>import("./guest.service.614cfd0f.js"),["assets/guest.service.614cfd0f.js","assets/vendor.744e3b36.js"])),ne=s.exports.lazy(()=>p(()=>import("./guest.blog.1e529a0a.js"),["assets/guest.blog.1e529a0a.js","assets/vendor.744e3b36.js"])),ie=s.exports.lazy(()=>p(()=>import("./guest.contact.84af5ad1.js"),["assets/guest.contact.84af5ad1.js","assets/vendor.744e3b36.js"])),ae=s.exports.lazy(()=>p(()=>import("./guest.login.7e87d8f8.js").then(function(l){return l.g}),["assets/guest.login.7e87d8f8.js","assets/vendor.744e3b36.js"])),b=()=>e("p",{children:"Loading"}),se=()=>e(v,{children:d(I,{children:[e(h,{path:"/login",element:e(s.exports.Suspense,{fallback:b(),children:e(ae,{})})}),e(h,{path:"/contact",element:e(s.exports.Suspense,{fallback:b(),children:e(ie,{})})}),e(h,{path:"/blog",element:e(s.exports.Suspense,{fallback:b(),children:e(ne,{})})}),e(h,{path:"/about",element:e(s.exports.Suspense,{fallback:b(),children:e(re,{})})}),e(h,{path:"/service",element:e(s.exports.Suspense,{fallback:b(),children:e(oe,{})})}),e(h,{path:"/home",element:e(_,{})}),e(h,{path:"/",element:e(_,{})})]})}),le=()=>d("footer",{className:"footer-basic",children:[d(g,{className:"social",style:{padding:"10px 35px"},children:[e("a",{href:"https://m.instagram.com/",children:e(f,{"aria-label":"instagram",children:e(O,{fontSize:"medium",style:{color:"rgb(255,255,2555)"}})})}),e("a",{href:"https://m.youtube.com/",children:e(f,{"aria-label":"instagram",children:e(T,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.twitter.com/",children:e(f,{"aria-label":"instagram",children:e(P,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.facebook.com/",children:e(f,{"aria-label":"instagram",children:e(N,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})})]}),d(g,{id:"internal-links",children:[e(u,{to:"/",children:"Home"}),e(u,{to:"about",children:"About"}),e(u,{to:"service",children:"Service"}),e(u,{to:"blog",children:"Blog"}),e(u,{to:"contact",children:"Contact"})]}),e(y,{className:"copyright",variant:"caption",display:"block",align:"center",children:"AmourAila \xA9 2022"})]}),ce=[{id:1,title:"Home",href:"/"},{id:2,title:"About",href:"about"},{id:3,title:"Service",href:"service"},{id:4,title:"Blog",href:"blog"},{id:5,title:"Contact",href:"contact"}],L=()=>{const[l,i]=A.useState(null),o=t=>{i(t.currentTarget)},r=()=>{i(null)};return d(v,{children:[e(z,{position:"static",children:e(S,{maxWidth:"xl",children:d(G,{disableGutters:!0,children:[e(g,{sx:{display:"flex"},children:e(u,{to:"/",children:e(f,{size:"large","aria-label":"logo",color:"inherit",children:e("img",{src:"../assets/img/Logo.webp",alt:"Logo",height:"50",width:"50"})})})}),e(y,{variant:"h6",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"AmourAila"}),e(y,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"AmourAila"}),d(g,{sx:{flexGrow:0},children:[e(B,{title:"Open settings",children:e(f,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:o,color:"inherit",children:e(D,{})})}),d(W,{sx:{mt:"45px",width:"100%"},id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(l),onClose:r,children:[ce.map(t=>e(u,{to:t.href,style:{margin:0},children:e($,{onClick:r,style:{width:"1000px"},children:e(y,{align:"center",color:"primary",children:t.title})})},t.id)),e(g,{sx:{display:"flex",justifyContent:"end",m:"10px"},children:e(u,{to:"login",onClick:r,children:e(q,{variant:"contained",style:{textTransform:"none"},children:"Sign in"})})})]})]})]})})}),e(se,{}),e(le,{})]})},de=s.exports.lazy(()=>p(()=>import("./admin.layout.0079e02c.js"),["assets/admin.layout.0079e02c.js","assets/vendor.744e3b36.js","assets/useBooking.all.830be53b.js","assets/guest.login.7e87d8f8.js"])),ue=s.exports.lazy(()=>p(()=>import("./client.layout.8e45c3bb.js"),["assets/client.layout.8e45c3bb.js","assets/vendor.744e3b36.js","assets/useBooking.all.830be53b.js","assets/guest.login.7e87d8f8.js"])),E=()=>e("p",{children:"Loading"}),he=()=>{const{isLoading:l,isFetching:i,data:o}=te();let r;return o&&(r={loggedIn:o.authenticated},o.user&&(r={loggedIn:o.authenticated,role:o.user.role})),l||i?e(S,{sx:{mt:"80%",width:"100%"},children:e(M,{color:"secondary"})}):r&&r.loggedIn?r.role==="ADMIN"?e(s.exports.Suspense,{fallback:E(),children:e(de,{})}):r.role==="CLIENT"?e(s.exports.Suspense,{fallback:E(),children:e(ue,{})}):e(L,{}):e(L,{})},pe=F({typography:{fontFamily:"Rubik"}});function me(){return e("div",{className:"App",children:e(V,{theme:pe,children:e(he,{})})})}function fe(l={}){const{immediate:i=!1,onNeedRefresh:o,onOfflineReady:r,onRegistered:t,onRegisterError:a}=l;let n,m;const x=async(c=!0)=>{c&&(n==null||n.addEventListener("controlling",C=>{C.isUpdate&&window.location.reload()})),m&&m.waiting&&await Q(m.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){n=new j("/sw.js",{scope:"/",type:"classic"}),n.addEventListener("activated",c=>{c.isUpdate||r==null||r()});{const c=()=>{o==null||o()};n.addEventListener("waiting",c),n.addEventListener("externalwaiting",c)}n.register({immediate:i}).then(c=>{m=c,t==null||t(c)}).catch(c=>{a==null||a(c)})}return x}const ge=new U;fe({onOfflineReady(){},onNeedRefresh(){}});H.render(e(A.StrictMode,{children:e(K,{client:ge,children:e(J,{children:e(me,{})})})}),document.getElementById("root"));
