var Te=Object.defineProperty,je=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ae=(r,n,a)=>n in r?Te(r,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[n]=a,I=(r,n)=>{for(var a in n||(n={}))Ie.call(n,a)&&ae(r,a,n[a]);if(ie)for(var a of ie(n))Me.call(n,a)&&ae(r,a,n[a]);return r},M=(r,n)=>je(r,Le(n));import{j as t,B as H,a as e,I as E,d as ue,b as he,c as me,e as pe,L as c,T as l,F as g,C as k,M as _,f as Oe,g as le,h as Pe,u as W,i as h,k as d,l as K,P as V,m as X,n as xe,o as j,p as A,q as Z,r as O,s as z,t as Ue,v as Be,w as L,x as q,y as $,z as F,A as u,D as y,E as ge,G as ye,H as J,J as ee,K as te,N as Y,O as B,Q as ze,R as fe,S as x,U as Q,V as be,W as ve,X as Se,Y as we,Z as Ce,_ as qe,$ as $e,a0 as U,a1 as T,a2 as Fe,a3 as Re,a4 as Ge,a5 as He,a6 as _e,a7 as Qe}from"./vendor.70fcf592.js";const We=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}};We();const Je=()=>t("footer",{className:"footer-basic",children:[t(H,{className:"social",style:{padding:"10px 35px"},children:[e("a",{href:"https://m.instagram.com/",children:e(E,{"aria-label":"instagram",children:e(ue,{fontSize:"medium",style:{color:"rgb(255,255,2555)"}})})}),e("a",{href:"https://m.youtube.com/",children:e(E,{"aria-label":"instagram",children:e(he,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.twitter.com/",children:e(E,{"aria-label":"instagram",children:e(me,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.facebook.com/",children:e(E,{"aria-label":"instagram",children:e(pe,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})})]}),t(H,{id:"internal-links",children:[e(c,{to:"/",children:"Home"}),e(c,{to:"work-schedule",children:"Work Schedule"}),e(c,{to:"appointment",children:"Appointment"})]}),e(l,{className:"copyright",variant:"caption",display:"block",align:"center",children:"AmourAila \xA9 2022"})]}),oe=()=>t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Welcome Aila,"})}),e(l,{sx:{my:"10px",mx:"30px",pb:"10px"},style:{color:"rgb(0,0,0)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Ye=()=>t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Settings"})}),t(k,{sx:{my:"50px"},children:[e(c,{to:"/user-all",style:{margin:0},children:t(_,{children:[e(Oe,{color:"primary"}),e(l,{sx:{ml:"20px"},aligh:"center",color:"primary",children:"Account Management"}),e(le,{fontSize:"small",color:"primary",style:{position:"absolute",right:"10px"}})]})}),e(c,{to:"",style:{margin:0},children:t(_,{children:[e(Pe,{color:"primary"}),e(l,{sx:{ml:"20px"},aligh:"center",color:"primary",children:"Display Mode"}),e(le,{fontSize:"small",color:"primary",style:{position:"absolute",right:"10px"}})]})})]})]}),Ke=async()=>await fetch("http://0.0.0.0:3333/api/users",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(r=>r.json()),Ve=()=>W("user-all",Ke),De=()=>{const{isLoading:r,isError:n,error:a,data:s,isFetching:i}=Ve();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Account Management"})}),e(k,{sx:{display:"flex",justifyContent:"center"},children:e(c,{to:"/user-add",children:e(h,{variant:"contained",color:"success",children:"Create New User"})})}),e(d,{sx:{m:"10px"},children:e(K,{component:V,style:{maxHeight:373,overflow:"auto"},children:t(X,{"aria-label":"simple table",children:[e(xe,{children:e(j,{children:e(A,{style:{color:"rgb(0,0,0)"},children:e("strong",{children:"Clients"})})})}),e(Z,{children:r||i?e(j,{sx:{display:"flex",justifyContent:"center"},children:e(A,{children:e(O,{color:"secondary"})})}):n?e(j,{sx:{display:"flex",justifyContent:"center"},children:e(A,{children:t(l,{style:{color:"rgb(0,0,0)"},children:["Error: ",a.message]})})}):s?s.map(o=>t(j,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(A,{component:"th",scope:"row",sx:{my:0,py:0,px:"5px",textAlign:"center"},children:t(c,{to:`/user-single/${o.userID}`,style:{color:"rgb(0,0,0)"},children:[o.firstName," ",o.lastName]})}),t(A,{component:"th",scope:"row",sx:{display:"flex",justifyContent:"flex-end",pr:"5px",my:0,py:0},children:[e(c,{to:`/user-edit/${o.userID}`,children:e(h,{variant:"contained",color:"warning",children:"Edit"})}),e(c,{style:{marginLeft:"3px",marginRight:"0",float:"right"},to:`/user-delete/${o.userID}`,children:e(h,{variant:"contained",color:"error",children:"Delete"})})]})]},o.userID)):null})]})})})]})},Xe=async({queryKey:r})=>{const n=r[1];return await fetch(`http://0.0.0.0:3333/api/user/${n}`).then(s=>s.json())},re=r=>W(["user-single",r],Xe),Ze=()=>{const{id:r}=z(),{isLoading:n,isError:a,error:s,data:i,isFetching:o}=re(r);return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Client"})}),n||o?e(d,{sx:{display:"flex",justifyContent:"center",m:2},children:e(O,{color:"secondary"})}):a?e(k,{sx:{display:"flex",justifyContent:"center"},children:t(l,{style:{color:"white"},children:["Error: ",s.message]})}):i?t(Ue,{sx:{m:"10px"},children:[t(Be,{children:[t(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["UserID: ",i.userID]}),t(l,{variant:"h5",component:"div",children:[i.firstName," ",i.lastName]}),e(l,{variant:"body2",color:"primary",children:new Date(i.dateOfBirth).toLocaleDateString()}),t(l,{variant:"body2",color:"secondary",children:["Username: ",i.username]}),t(l,{variant:"body2",color:"secondary",children:["Email: ",i.email]})]}),e(c,{to:"/user-all",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]},i.userID):null]})},et=async r=>{console.log(r),await fetch("http://0.0.0.0:3333/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(n=>{n.json(),alert("New User created successfully!")}).catch(n=>console.log(n))},tt=()=>{const r=$(),n=F();return q(et,{onSuccess:()=>{r.invalidateQueries("user-all"),n("/user-all")}})},rt=()=>{const[r,n]=u.exports.useState(""),[a,s]=u.exports.useState(""),[i,o]=u.exports.useState(""),[f,p]=u.exports.useState(""),[m,v]=u.exports.useState(""),[S,w]=u.exports.useState(""),[N,P]=u.exports.useState("CLIENT"),{mutate:C}=tt();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Create Account"})}),t("form",{onSubmit:b=>{b.preventDefault(),C({firstName:r,lastName:a,dateOfBirth:i,email:f,username:m,password:S,roles:N})},style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(50,53,101)",padding:"20px 10px",margin:"10px 30px",borderRadius:"10px"},children:[e(y,{id:"firstName",sx:{m:"10px"},variant:"outlined",name:"firstName",label:"First Name",onChange:b=>n(b.target.value)}),e(y,{id:"lastName",sx:{m:"10px"},variant:"outlined",name:"lastName",label:"Last Name",onChange:b=>s(b.target.value)}),e(y,{id:"dateOfBirth",sx:{m:"10px"},variant:"outlined",name:"dateOfBirth",label:"Date of Birth",onChange:b=>o(b.target.value)}),e(y,{id:"email",sx:{m:"10px"},variant:"outlined",name:"email",label:"Email",onChange:b=>p(b.target.value)}),e(y,{id:"username",sx:{m:"10px"},variant:"outlined",name:"username",label:"Username",onChange:b=>v(b.target.value)}),e(y,{id:"password",sx:{m:"10px"},variant:"outlined",name:"password",label:"Password",onChange:b=>w(b.target.value)}),e(d,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(h,{type:"submit",variant:"contained",color:"success",sx:{width:"50%"},children:"Create"})})]}),e(c,{to:"/user-all",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},nt=async r=>{const n=r.userID;await fetch(`http://0.0.0.0:3333/api/user/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(a=>{a.json(),alert("Edited User successfully!")}).catch(a=>console.log(a))},it=()=>{const r=$(),n=F();return q(nt,{onSuccess:()=>{r.invalidateQueries("user-all"),n("/user-all")}})},at=()=>{const{id:r}=z(),{isLoading:n,isError:a,error:s,data:i,isFetching:o}=re(r),[f,p]=u.exports.useState(""),[m,v]=u.exports.useState(""),[S,w]=u.exports.useState(""),[N,P]=u.exports.useState(""),[C,R]=u.exports.useState(""),[b,G]=u.exports.useState(""),[ne,ke]=u.exports.useState("");u.exports.useEffect(()=>{i&&(p(i.firstName),v(i.lastName),w(i.dateOfBirth),P(i.email),R(i.username),G(i.password),ke(i.roles))},[i]);const{mutate:Ne}=it();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Edit User"})}),n||o?e(d,{sx:{display:"flex",justifyContent:"center",m:2},children:e(O,{color:"secondary"})}):a?e(Container,{sx:{display:"flex",justifyContent:"center"},children:t(l,{style:{color:"white"},children:["Error: ",s.message]})}):i?e(g,{children:t("form",{onSubmit:D=>{D.preventDefault(),Ne({userID:r,firstName:f,lastName:m,dateOfBirth:S,email:N,username:C,password:b,roles:ne})},style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(50,53,101)",padding:"20px 10px",margin:"10px 30px",borderRadius:"10px"},children:[e(y,{id:"firstName",color:"primary",sx:{m:"10px"},variant:"outlined",name:"firstName",label:i.firstName,onChange:D=>p(D.target.value)}),e(y,{id:"lastName",color:"primary",sx:{m:"10px"},variant:"outlined",name:"lastName",label:i.lastName,onChange:D=>v(D.target.value)}),e(y,{id:"dateOfBirth",color:"primary",sx:{m:"10px"},variant:"outlined",name:"dateOfBirth",label:"Date of Birth",onChange:D=>w(D.target.value)}),e(y,{id:"email",color:"primary",sx:{m:"10px"},variant:"outlined",name:"email",label:i.email,onChange:D=>P(D.target.value)}),e(y,{id:"username",color:"primary",sx:{m:"10px"},variant:"outlined",name:"username",label:i.username,onChange:D=>R(D.target.value)}),e(y,{id:"password",color:"primary",sx:{m:"10px"},variant:"outlined",name:"password",label:"Password",onChange:D=>G(D.target.value)}),e(d,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(h,{variant:"contained",color:"warning",type:"submit",sx:{width:"50%"},children:"Edit"})})]})}):null,e(c,{to:"/user-all",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},lt=async r=>{const n=r.userID;await fetch(`http://0.0.0.0:3333/api/user/${n}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(a=>{alert("Deleted User Successfully!",a)}).catch(a=>console.log(a))},ot=()=>{const r=$(),n=F();return q(lt,{onSuccess:()=>{r.invalidateQueries("user-all"),n("/user-all")}})},se={position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},st=()=>{const{id:r}=z(),{isLoading:n,isError:a,error:s,data:i,isFetching:o}=re(r),[f,p]=u.exports.useState(!0),m=()=>p(!0),v=()=>p(!1),{mutate:S}=ot(),w=N=>{N.preventDefault(),S({userID:r})};return e(ge,{open:f,onClose:m,style:{backgroundColor:"rgb(50,53,101)"},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n||o?e(d,{sx:{style:se,display:"flex",justifyContent:"center",mt:40},children:e(O,{color:"secondary"})}):a?e(Container,{sx:{display:"flex",justifyContent:"center"},children:t(l,{style:{color:"white"},children:["Error: ",s.message]})}):i?t(d,{sx:se,children:[t(l,{id:"modal-modal-title",variant:"h6",color:"error",children:[t("strong",{style:{color:"blue"},children:[i.firstName,"'s"]})," Account"]}),e(l,{id:"modal-modal-description",sx:{mt:2},color:"error",children:"Are you sure you want this user account deleted?"}),t(h,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"error",onClick:w,children:["Yes",e(ye,{fontSize:"small",sx:{ml:1}})]}),e(c,{to:"/user-all",children:t(h,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"primary",onClick:v,children:["No",e(L,{fontSize:"small",sx:{ml:"10px"}})]})})]}):null})},ct=()=>{const r=[1,2,3,4,5,6],n=[new Date().toDateString()];return r.forEach(a=>{n.push(new Date(new Date().setDate(new Date().getDate()+a)).toDateString())}),t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Work Schedule"})}),e(d,{sx:{m:"10px"},children:e(K,{component:V,children:t(X,{"aria-label":"simple table",children:[e(xe,{children:e(j,{children:e(A,{style:{color:"rgb(0,0,0)"},children:e("strong",{children:"Upcoming Dates"})})})}),e(Z,{children:n.map(a=>t(j,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(A,{component:"th",scope:"row",sx:{my:0,py:0},children:e(c,{to:"",style:{color:"rgb(0,0,0)"},children:a})}),e(A,{component:"th",scope:"row",sx:{display:"flex",justifyContent:"flex-end",pr:"5px",my:0,py:0},children:e(c,{style:{marginLeft:"3px",marginRight:"0",float:"right"},to:`/schedule-add/${a}`,children:e(h,{variant:"contained",color:"success",children:"Set Time"})})})]},a))})]})})}),t(k,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",my:"10px",p:0},children:[e(d,{children:e(c,{to:"/schedule-view",children:e(h,{variant:"contained",color:"primary",children:"View Schedules"})})}),e(d,{children:e(c,{to:"/date-add",children:e(h,{variant:"contained",color:"secondary",children:"Set Date/Time"})})})]})]})},dt=async r=>{await fetch("http://0.0.0.0:3333/api/availability",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(n=>{n.json(),alert("New Date created successfully!")}).catch(n=>console.log(n))},Ae=()=>{const r=$(),n=F();return q(dt,{onSuccess:()=>{r.invalidateQueries("schedule-all"),n("/schedule-all")}})},ut=J({components:{MuiInputLabel:{styleOverrides:{root:{color:"#b39ddb"}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"#ede7f6 !important"}}}}}),ht=()=>{const{date:r}=z(),[n,a]=u.exports.useState(new Date(r+" 06:00")),[s,i]=u.exports.useState(new Date(r+" 18:00")),{mutate:o}=Ae();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Set Time"})}),e(l,{sx:{m:"10px"},variant:"subtitle1",color:"primary",children:e("strong",{children:r})}),t("form",{onSubmit:p=>{p.preventDefault();const m=new Date(n).toLocaleTimeString(),v=new Date(s).toLocaleTimeString();o({date:r,startTime:m,endTime:v})},style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px",backgroundColor:"#671E15"},children:[e(ee,{dateAdapter:te,children:t(Y,{theme:ut,children:[e(d,{style:{margin:"10px"},children:e(B,{label:"Start Time",value:n,onChange:p=>a(p),renderInput:p=>e(y,M(I({},p),{sx:{input:{color:"#d1c4e9"}}}))})}),e(d,{style:{margin:"10px"},children:e(B,{label:"End Time",value:s,onChange:p=>i(p),renderInput:p=>e(y,M(I({},p),{sx:{input:{color:"#d1c4e9"}}}))})})]})}),e(d,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(h,{type:"submit",variant:"contained",color:"success",sx:{width:"100%"},children:"Create"})})]}),e(c,{to:"/schedule-all",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},mt=J({components:{MuiInputLabel:{styleOverrides:{root:{color:"#b39ddb"}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"#ede7f6 !important"}}}}}),pt=()=>{const[r,n]=u.exports.useState(new Date().toDateString()),[a,s]=u.exports.useState(new Date(r+" 06:00")),[i,o]=u.exports.useState(new Date(r+" 18:00")),{mutate:f}=Ae();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Set Date/Time"})}),t("form",{onSubmit:m=>{m.preventDefault();const v=new Date(r).toDateString(),S=new Date(a).toLocaleTimeString(),w=new Date(i).toLocaleTimeString();f({date:v,startTime:S,endTime:w})},style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px",backgroundColor:"#671E15"},children:[e(ee,{dateAdapter:te,children:t(Y,{theme:mt,children:[e(d,{style:{margin:"10px"},children:e(ze,{label:"Select Date - MM/dd/YYYY",value:r,onChange:m=>n(m),renderInput:m=>e(y,M(I({},m),{sx:{input:{color:"#d1c4e9"}}}))})}),e(d,{style:{margin:"10px"},children:e(B,{label:"Start Time",value:a,onChange:m=>s(m),renderInput:m=>e(y,M(I({},m),{sx:{input:{color:"#d1c4e9"}}}))})}),e(d,{style:{margin:"10px"},children:e(B,{label:"End Time",value:i,onChange:m=>o(m),renderInput:m=>e(y,M(I({},m),{sx:{input:{color:"#d1c4e9"}}}))})})]})}),e(d,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(h,{type:"submit",variant:"contained",color:"success",sx:{width:"100%"},children:"Create"})})]}),e(c,{to:"/schedule-all",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},xt=async()=>await fetch("http://0.0.0.0:3333/api/availabilities").then(r=>r.json()),gt=()=>W("schedule-all",xt),yt=()=>{const{isLoading:r,isError:n,error:a,data:s,isFetching:i}=gt();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"ALL Schedules"})}),e(d,{sx:{m:"10px"},children:e(K,{component:V,style:{maxHeight:373,overflow:"auto"},children:e(X,{"aria-label":"simple table",children:e(Z,{children:r||i?e(j,{sx:{display:"flex",justifyContent:"center"},children:e(A,{children:e(O,{color:"secondary"})})}):n?e(j,{sx:{display:"flex",justifyContent:"center"},children:e(A,{children:t(l,{style:{color:"rgb(0,0,0)"},children:["Error: ",a.message]})})}):s?s.map(o=>t(j,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(A,{component:"th",scope:"row",sx:{my:0,py:0,px:"5px",textAlign:"center"},children:e(l,{variant:"subtitle2",style:{color:"rgb(0,0,0)"},children:new Date().toDateString()===new Date(o.date).toDateString()?e("strong",{children:new Date(o.date).toDateString()}):new Date(o.date).toDateString()})}),t(A,{component:"th",scope:"row",sx:{display:"flex",justifyContent:"flex-end",px:"5px",my:0,py:0},children:[e(c,{to:`/schedule-edit/${o.availabilityID}`,children:e(h,{size:"small",variant:"contained",color:"warning",children:"Edit"})}),e(c,{style:{marginLeft:"3px",marginRight:"0",float:"right"},to:`/schedule-delete/${o.availabilityID}`,children:e(h,{size:"small",variant:"contained",color:"error",children:"Delete"})})]})]},o.availabilityID)):null})})})}),e(c,{to:"/schedule-all",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},ft=async r=>{const n=r.availabilityID;await fetch(`http://0.0.0.0:3333/api/availability/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(a=>{a.json(),alert("Edited Schedule successfully!")}).catch(a=>console.log(a))},bt=()=>{const r=$(),n=F();return q(ft,{onSuccess:()=>{r.invalidateQueries("schedule-all"),n("/schedule-view")}})},vt=async({queryKey:r})=>{const n=r[1];return await fetch(`http://0.0.0.0:3333/api/availability/${n}`).then(s=>s.json())},Ee=r=>W(["availability-single",r],vt),St=J({components:{MuiInputLabel:{styleOverrides:{root:{color:"#b39ddb","&.Mui-disabled":{color:"#fff176"}}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"#ede7f6 !important"},root:{"&.Mui-disabled":{borderColor:"#b39ddb"}}}}}}),wt=()=>{const{id:r}=z(),{isLoading:n,isError:a,error:s,data:i,isFetching:o}=Ee(r),[f,p]=u.exports.useState(new Date().toDateString()),[m,v]=u.exports.useState(new Date(f+" 06:00")),[S,w]=u.exports.useState(new Date(f+" 18:00"));u.exports.useEffect(()=>{i&&(p(new Date(i.date).toDateString()),v(i.startTime),w(i.endTime))},[i]);const{mutate:N}=bt();return t(g,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Edit Schedule"})}),n||o?e(d,{sx:{display:"flex",justifyContent:"center",m:2},children:e(O,{color:"secondary"})}):a?e(k,{sx:{display:"flex",justifyContent:"center"},children:t(l,{style:{color:"white"},children:["Error: ",s.message]})}):i?e(g,{children:t("form",{onSubmit:C=>{C.preventDefault();const R=new Date(f).toDateString(),b=new Date(m).toLocaleTimeString(),G=new Date(S).toLocaleTimeString();N({availabilityID:r,date:R,startTime:b,endTime:G})},style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px",backgroundColor:"#671E15"},children:[e(ee,{dateAdapter:te,children:t(Y,{theme:St,children:[e(d,{style:{margin:"10px"},children:e(l,{sx:{m:"10px",color:"#ede7f6"},variant:"h5",children:e("strong",{children:f})})}),e(d,{style:{margin:"10px"},children:e(B,{label:"Start Time",value:m,onChange:C=>v(C),renderInput:C=>e(y,M(I({},C),{sx:{input:{color:"#d1c4e9"}}}))})}),e(d,{style:{margin:"10px"},children:e(B,{label:"End Time",value:S,onChange:C=>w(C),renderInput:C=>e(y,M(I({},C),{sx:{input:{color:"#d1c4e9"}}}))})})]})}),e(d,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(h,{type:"submit",variant:"contained",color:"success",sx:{width:"100%"},children:"Confirm"})})]})}):null,e(c,{to:"/schedule-view",children:t(h,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(L,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},Ct=async r=>{const n=r.availabilityID;await fetch(`http://0.0.0.0:3333/api/availability/${n}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(a=>{alert("Deleted Schedule Successfully!",a)}).catch(a=>console.log(a))},Dt=()=>{const r=$(),n=F();return q(Ct,{onSuccess:()=>{r.invalidateQueries("schedule-all"),n("/schedule-view")}})},ce={position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},At=()=>{const{id:r}=z(),{isLoading:n,isError:a,error:s,data:i,isFetching:o}=Ee(r),[f,p]=u.exports.useState(!0),m=()=>p(!0),v=()=>p(!1),{mutate:S}=Dt(),w=N=>{N.preventDefault(),S({availabilityID:r})};return e(ge,{open:f,onClose:m,style:{backgroundColor:"rgb(50,53,101)"},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n||o?e(d,{sx:{style:ce,display:"flex",justifyContent:"center",mt:40},children:e(O,{color:"secondary"})}):a?e(Container,{sx:{display:"flex",justifyContent:"center"},children:t(l,{style:{color:"white"},children:["Error: ",s.message]})}):i?t(d,{sx:ce,children:[t(l,{id:"modal-modal-title",variant:"h6",color:"error",children:[e("strong",{style:{color:"blue"},children:new Date(i.date).toDateString()})," Date"]}),e(l,{id:"modal-modal-description",sx:{mt:2},color:"error",children:"Are you sure you want this date deleted?"}),t(h,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"error",onClick:w,children:["Yes",e(ye,{fontSize:"small",sx:{ml:1}})]}),e(c,{to:"/schedule-view",children:t(h,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"primary",onClick:v,children:["No",e(L,{fontSize:"small",sx:{ml:"10px"}})]})})]}):null})},Et=()=>e(g,{children:t(fe,{children:[e(x,{path:"schedule-delete/:id",element:e(At,{})}),e(x,{path:"schedule-edit/:id",element:e(wt,{})}),e(x,{path:"schedule-view",element:e(yt,{})}),e(x,{path:"date-add",element:e(pt,{})}),e(x,{path:"schedule-add/:date",element:e(ht,{})}),e(x,{path:"schedule-all",element:e(ct,{})}),e(x,{path:"user-delete/:id",element:e(st,{})}),e(x,{path:"user-edit/:id",element:e(at,{})}),e(x,{path:"user-add",element:e(rt,{})}),e(x,{path:"user-single/:id",element:e(Ze,{})}),e(x,{path:"user-all",element:e(De,{})}),e(x,{path:"settings",element:e(Ye,{})}),e(x,{path:"home",element:e(oe,{})}),e(x,{path:"/",element:e(oe,{})})]})}),kt=[{id:1,title:"Home",href:"home"},{id:2,title:"Work Schedule",href:"schedule-all"},{id:3,title:"Appointment",href:""},{id:4,title:"Settings",href:"settings"}],Nt=()=>{const[r,n]=Q.useState(null);Q.useState(!0);const a=o=>{n(o.currentTarget)},s=()=>{n(null)},i=()=>{fetch("http://0.0.0.0:3333/api/user/logout",{method:"POST"}).then(o=>o.json()).then(o=>console.log(o)).catch(o=>console.log(o))};return t(g,{children:[e(be,{position:"static",style:{height:"60px"},children:e(k,{maxWidth:"xl",children:t(ve,{disableGutters:!0,children:[e(d,{sx:{display:"flex"},children:e(c,{to:"/",children:e(E,{size:"large","aria-label":"logo",color:"inherit",children:e("img",{sx:{m:0,display:"flex",alignItems:"center"},style:{height:"50px",width:"50px"},src:"../assets/img/Logo.png",alt:"Logo"})})})}),e(l,{variant:"h6",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"AmourAila"}),e(l,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"AmourAila"}),t(d,{sx:{flexGrow:0},children:[e(Se,{title:"Open menu",children:e(E,{size:"large","aria-label":"current menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:a,color:"inherit",children:e(we,{})})}),t(Ce,{sx:{mt:"45px",width:"100%"},id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:s,style:{position:"absolute"},children:[kt.map(o=>e(c,{to:o.href,style:{margin:0},children:e(_,{onClick:s,style:{width:"1000px"},children:e(l,{sx:{ml:"5px"},align:"center",color:"primary",children:o.title})})},o.id)),e(d,{sx:{display:"flex",justifyContent:"center",mr:"10px"},children:e(c,{to:"",onClick:s,children:t(h,{variant:"contained",color:"warning",onClick:i,children:[e(qe,{sx:{mr:"5px"}}),"Logout"]})})})]})]})]})})}),e(Et,{}),e(Je,{})]})},de=()=>t(g,{children:[e($e,{navButtonsProps:{style:{color:"rgb(74, 80, 181)",backgroundColor:"transparent",borderRadius:0}},children:[{id:1,src:"../assets/img/carousel-food-wood-dawn-fashion.jpg",alt:"carousel-food-wood-dawn-fashion"},{id:2,src:"../assets/img/carousel-woman-in-blue-t-shirt-and-blue-shorts-sitting-on-bed.jpg",alt:"carousel-woman-in-blue-t-shirt-and-blue-shorts-sitting-on-bed"},{id:3,src:"../assets/img/carousel-wood-fashion-hands-people.jpg",alt:"carousel-wood-fashion-hands-people"}].map(n=>e(d,{sx:{p:0},children:e("img",{className:"carousel-img",src:n.src,alt:n.alt})},n.id))}),e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Welcome to AmourAila,"})}),e(l,{sx:{my:"10px",mx:"30px",pb:"10px"},style:{color:"rgb(0,0,0)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Tt=()=>(u.exports.useState(U.get("userId")),u.exports.useState(U.get("name")),u.exports.useState(U.get("role")),u.exports.useEffect(()=>{fetch("https://proj19940827.herokuapp.com/api/users",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(r=>r.json()).then(r=>{console.log(r||"No data")}).catch(r=>console.log(r))},[]),t(g,{children:[t(d,{sx:{display:"flex",flexDirection:"column"},children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"About US"})}),e("img",{sx:{m:0,width:1,display:"flex",alignItems:"center"},src:"../assets/img/about-selective-focus-half-face-closeup-photography-of-female-s-green-eyes.jpg",alt:"about-selective-focus-half-face-closeup-photography-of-female-s-green-eyes"})]}),e(k,{sx:{display:"flex",flexDirection:"column",borderLeft:"8px solid rgb(50,53,101)"},children:e(l,{sx:{my:"10px",mx:"30px",pb:"10px"},style:{color:"rgb(0,0,0)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),t(T,{container:!0,spacing:2,sx:{pb:"5px"},children:[e(T,{item:!0,xs:6,style:{padding:"0px"},children:e("img",{style:{width:"100%"},src:"../assets/img/about-close-up-shot-of-pretty-woman-applying-mascara.jpg",alt:"about-close-up-shot-of-pretty-woman-applying-mascara"})}),e(T,{item:!0,xs:6,style:{padding:"0px"},children:e("img",{style:{width:"100%"},src:"../assets/img/about-woman-in-black-long-sleeve-shirt-lying-on-bed.jpg",alt:"about-woman-in-black-long-sleeve-shirt-lying-on-bed"})})]})]})),jt=()=>(u.exports.useState(U.get("userId")),u.exports.useState(U.get("name")),u.exports.useState(U.get("role")),t(g,{children:[t(k,{sx:{display:"flex",flexDirection:"column"},children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{onClick:()=>{fetch("https://proj19940827.herokuapp.com/api/user/logout",{method:"POST",credentials:"include"}).then(n=>{n.status===200?console.log("Logged out successfully!"):console.log("Error Logging out!")}).catch(n=>console.log(n))},children:"Services"})}),e(l,{sx:{my:"10px",mx:"30px",pb:"10px"},style:{color:"rgb(0,0,0)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),t(T,{container:!0,spacing:3,sx:{py:"20px"},children:[e(T,{item:!0,xs:4,style:{padding:"0px",margin:"0px"},children:e("img",{style:{width:"100%",height:"100%"},src:"../assets/img/service-black-and-silver-box-mod.jpg",alt:"service-black-and-silver-box-mod"})}),e(T,{item:!0,xs:4,style:{padding:"0px",margin:"0px"},children:e("img",{style:{width:"100%",height:"100%"},src:"../assets/img/service-red-and-silver-bread-knife.jpg",alt:"service-red-and-silver-bread-knife"})}),e(T,{item:!0,xs:4,style:{padding:"0px",margin:"0px"},children:e("img",{style:{width:"100%",height:"100%"},src:"../assets/img/service-woman-in-white-tank-top-wearing-black-sunglasses.jpg",alt:"service-woman-in-white-tank-top-wearing-black-sunglasses"})})]}),e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Packages"})}),t("ul",{style:{margin:"10px",borderLeft:"8px solid rgb(50,53,101)"},children:[t("li",{children:["Service 1",e("ul",{children:e("li",{children:"Item 1"})})]}),t("li",{children:["Service 2",t("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"})]})]}),t("li",{children:["Service 3",t("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]}),t("li",{children:["Service 4",t("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"}),e("li",{children:"Item 4"})]})]})]})]})),Lt=()=>t(g,{children:[e(k,{sx:{display:"flex",flexDirection:"column"},children:e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Blog"})})}),t(T,{container:!0,spacing:2,sx:{my:"10px"},style:{borderLeft:"21px solid rgb(50,53,101)"},children:[e(T,{item:!0,xs:6,sx:{display:"flex",justifyContent:"center",alignItems:"center"},style:{padding:"0px"},children:e(l,{sx:{m:"10px"},variant:"h4",children:t("strong",{children:["Mrs. ",e("br",{})," Aila"]})})}),e(T,{item:!0,xs:6,style:{padding:"0px"},children:e("img",{sx:{display:"flex",justifyContent:"center"},style:{width:"100%"},src:"../assets/img/blog-side-view-of-a-woman-in-portrait-photography.jpg",alt:"blog-side-view-of-a-woman-in-portrait-photography"})})]}),e(l,{sx:{my:"10px",mx:"30px",pb:"10px"},style:{color:"rgb(0,0,0)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),It=()=>{const{isLoaded:r}=Fe({id:"google-map-script",googleMapsApiKey:"AIzaSyDuk40GgbJUHD6QXpF7HBUnb0mPKTPofsc"});return r?t(g,{children:[e(Re,{className:"map",mapContainerStyle:{width:"100%",height:"300px"},center:{lat:-27.470125,lng:153.021072},zoom:13,children:e("div",{className:"marker",style:{backgroundColor:"red",cursor:"pointer"},title:"marker"})}),t(k,{sx:{display:"flex",flexDirection:"column"},children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Contact US"})}),t(l,{sx:{my:"5px",mx:"20px"},style:{color:"rgb(0,0,0)"},children:["Location: Brisbane ",e("br",{}),"Address: 123 Findastreet Road ",e("br",{}),"Email: lashingsucess@amouraila.com ",e("br",{}),"Phone: 3387 6987"]}),e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Opening Hours"})}),t(l,{sx:{my:"15px",mx:"20px"},style:{color:"rgb(0,0,0)"},children:["Sunday: 10AM to 6PM ",e("br",{}),"Monday: 8AM to 4PM ",e("br",{}),"Tuesday: 8AM to 4PM ",e("br",{}),"Wednesday: 8AM to 4PM ",e("br",{}),"Thursday: 8AM to 4PM ",e("br",{}),"Friday: 8AM to 4PM ",e("br",{}),"Saturday: 10AM to 6PM"]})]})]}):e(g,{children:t(k,{sx:{display:"flex",flexDirection:"column"},children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Contact US"})}),t(l,{sx:{my:"5px",mx:"20px"},style:{color:"rgb(0,0,0)"},children:["Location: Brisbane ",e("br",{}),"Address: 123 Findastreet Road ",e("br",{}),"Email: lashingsucess@amouraila.com ",e("br",{}),"Phone: 3387 6987"]}),e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Opening Hours"})}),t(l,{sx:{my:"15px",mx:"20px"},style:{color:"rgb(0,0,0)"},children:["Sunday: 10AM to 6PM ",e("br",{}),"Monday: 8AM to 4PM ",e("br",{}),"Tuesday: 8AM to 4PM ",e("br",{}),"Wednesday: 8AM to 4PM ",e("br",{}),"Thursday: 8AM to 4PM ",e("br",{}),"Friday: 8AM to 4PM ",e("br",{}),"Saturday: 10AM to 6PM"]})]})})},Mt=r=>{r.preventDefault();const n=document.getElementById("username").value,a=document.getElementById("password").value,s={username:n,password:a};fetch("https://proj19940827.herokuapp.com/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(s)}).then(i=>i.json()).then(i=>{alert(i.message)}).catch(i=>console.log(i))},Ot=()=>{alert("Please contact admin to reset your password...")},Pt=()=>e(g,{children:e(d,{sx:{my:"100px",mx:"20px"},style:{background:"rgb(255,255,255)"},children:t("form",{onSubmit:Mt,style:{background:"rgb(121,6,4)",padding:"5px",borderRadius:"10px"},children:[e(l,{sx:{m:"10px"},variant:"h4",style:{color:"rgb(255,255,286)",textAlign:"center"},children:e("strong",{children:"Login"})}),t(d,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",m:"10px"},children:[e(y,{type:"text",name:"username",id:"username",className:"form-control",placeholder:"Username",label:"Username",variant:"outlined"}),e(y,{type:"password",name:"password",id:"password",className:"form-control",placeholder:"Password",label:"Password",variant:"outlined"}),e(h,{sx:{display:"block",width:"100px",mt:"30px"},type:"submit",style:{background:"rgb(50,53,101)",border:"1px solid rgb(255,255,255)",color:"rgb(255,255,255)"},children:"Log In"})]}),e(l,{sx:{m:"10px"},align:"center",style:{color:"rgb(255,255,255)"},onClick:Ot,children:"Forgot your email or password?"})]})})}),Ut=()=>t("footer",{className:"footer-basic",children:[t(H,{className:"social",style:{padding:"10px 35px"},children:[e("a",{href:"https://m.instagram.com/",children:e(E,{"aria-label":"instagram",children:e(ue,{fontSize:"medium",style:{color:"rgb(255,255,2555)"}})})}),e("a",{href:"https://m.youtube.com/",children:e(E,{"aria-label":"instagram",children:e(he,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.twitter.com/",children:e(E,{"aria-label":"instagram",children:e(me,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.facebook.com/",children:e(E,{"aria-label":"instagram",children:e(pe,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})})]}),t(H,{id:"internal-links",children:[e(c,{to:"/",children:"Home"}),e(c,{to:"about",children:"About"}),e(c,{to:"service",children:"Service"}),e(c,{to:"blog",children:"Blog"}),e(c,{to:"contact",children:"Contact"})]}),e(l,{className:"copyright",variant:"caption",display:"block",align:"center",children:"AmourAila \xA9 2022"})]}),Bt=[{id:1,title:"Home",href:"home"},{id:2,title:"About",href:"about"},{id:3,title:"Service",href:"service"},{id:4,title:"Blog",href:"blog"},{id:5,title:"Contact",href:"contact"}],zt=()=>{const[r,n]=Q.useState(null),a=i=>{n(i.currentTarget)},s=()=>{n(null)};return t(g,{children:[e(be,{position:"static",style:{height:"60px"},children:e(k,{maxWidth:"xl",children:t(ve,{disableGutters:!0,children:[e(d,{sx:{display:"flex"},children:e(c,{to:"home",children:e(E,{size:"large","aria-label":"logo",color:"inherit",children:e("img",{sx:{m:0,display:"flex",alignItems:"center"},style:{height:"50px",width:"50px"},src:"../assets/img/Logo.png",alt:"Logo"})})})}),e(l,{variant:"h6",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"AmourAila"}),e(l,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"AmourAila"}),t(d,{sx:{flexGrow:0},children:[e(Se,{title:"Open settings",children:e(E,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:a,color:"inherit",children:e(we,{})})}),t(Ce,{sx:{mt:"45px",width:"100%"},id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:s,children:[Bt.map(i=>e(c,{to:i.href,style:{margin:0},children:e(_,{onClick:s,style:{width:"1000px"},children:e(l,{align:"center",color:"primary",children:i.title})})},i.id)),e(d,{sx:{display:"flex",justifyContent:"end",m:"10px"},children:e(c,{to:"login",onClick:s,children:e(h,{variant:"contained",children:"Login"})})})]})]})]})})}),t(fe,{children:[e(x,{path:"/settings",element:e(De,{})}),e(x,{path:"/admin",element:e(Nt,{})}),e(x,{path:"/login",element:e(Pt,{})}),e(x,{path:"/contact",element:e(It,{})}),e(x,{path:"/blog",element:e(Lt,{})}),e(x,{path:"/service",element:e(jt,{})}),e(x,{path:"/about",element:e(Tt,{})}),e(x,{path:"/home",element:e(de,{})}),e(x,{path:"/",element:e(de,{})})]}),e(Ut,{})]})},qt=J({typography:{fontFamily:"Rubik"}});function $t(){return e("div",{className:"App",children:e(Y,{theme:qt,children:e(zt,{})})})}const Ft=new Ge;He.render(e(Q.StrictMode,{children:e(_e,{client:Ft,children:e(Qe,{children:e($t,{})})})}),document.getElementById("root"));
