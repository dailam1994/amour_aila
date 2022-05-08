var Ce=Object.defineProperty,Pe=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var de=(t,o,s)=>o in t?Ce(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,p=(t,o)=>{for(var s in o||(o={}))Ae.call(o,s)&&de(t,s,o[s]);if(ie)for(var s of ie(o))Ne.call(o,s)&&de(t,s,o[s]);return t},v=(t,o)=>Pe(t,Ee(o));import{j as r,F as E,T as a,a as e,L as m,C as P,l as Y,u as xe,m as b,B as y,x as De,P as ze,y as Le,z as $e,D as _,E as j,G as Be,H as B,J as U,K as Te,N as je,O as Z,S as W,U as G,V as J,W as fe,r as z,X as M,Y as $,Z as S,$ as A,I as N,a0 as ge,a1 as we,a2 as V,a3 as k,a4 as ce,a5 as F,R as _e,b as C,d as ke,c as Oe,e as Re,f as Ue,g as ue,A as Me,h as qe,i as Ve,k as Fe,M as He}from"./vendor.3d87cbec.js";import{n as Ye,d as Ze,a as We,b as Ge,c as me,e as Je,u as Q,f as T,g as O,h as R,i as Qe,j as H,k as Ke,R as Xe,D as er,l as rr}from"./record.update.a6ece0a1.js";import{u as be,a as ve,e as w,d as Se}from"./guest.login.88d56f5f.js";const he=()=>(localStorage.getItem("colour")=="rgb(0,0,0)"?Ye():Ze(),r(E,{children:[r(a,{sx:{m:"10px"},variant:"h4",children:[e("strong",{children:"Welcome Aila,"}),e(m,{to:"/tutorial",children:e(We,{size:"small",color:"primary",sx:{position:"absolute",right:1,mr:"10px",mt:"10px"}})})]}),e(a,{sx:{my:"10px",mx:"30px",pb:"10px"},variant:"subtitle1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})),tr=()=>r(E,{children:[e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Settings"})}),r(P,{sx:{my:"50px"},children:[e(m,{to:"/user/all",style:{margin:0},children:r(Y,{children:[e(Ge,{color:"primary"}),e(a,{sx:{ml:"20px"},aligh:"center",color:"primary",children:"Account Management"}),e(me,{fontSize:"small",color:"primary",style:{position:"absolute",right:"10px"}})]})}),e(m,{to:"/display",style:{margin:0},children:r(Y,{children:[e(Je,{color:"primary"}),e(a,{sx:{ml:"20px"},aligh:"center",color:"primary",children:"Display Mode"}),e(me,{fontSize:"small",color:"primary",style:{position:"absolute",right:"10px"}})]})})]})]}),sr=async()=>(await((s=1100)=>new Promise(n=>setTimeout(n,s)))(),await fetch("https://user.technolashes.com/api/users",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(s=>{switch(s.status){case 200:return s.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(s=>{if(s)return s}).catch(s=>console.log(s))),nr=()=>xe("user-all",sr,{refetchOnWindowFocus:!1}),ar=()=>{const{isLoading:t,isError:o,error:s,data:n,isFetching:l}=nr();return r(E,{children:[e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Account Management"})}),e(P,{sx:{display:"flex",justifyContent:"center"},children:e(m,{to:"/user/add",children:e(b,{variant:"contained",color:"success",children:"Create New User"})})}),e(y,{sx:{m:"10px"},children:e(De,{component:ze,style:{maxHeight:373,overflow:"auto"},children:r(Le,{"aria-label":"simple table",children:[e($e,{children:e(_,{children:e(j,{style:{color:"rgb(0,0,0)"},children:e("strong",{children:"Clients"})})})}),e(Be,{children:t||l?e(_,{sx:{display:"flex",justifyContent:"center"},children:e(j,{children:e(B,{color:"secondary"})})}):o?e(_,{sx:{display:"flex",justifyContent:"center"},children:e(j,{children:r(a,{style:{color:"rgb(0,0,0)"},children:["Error ",s.message]})})}):n?n.map(d=>r(_,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(j,{component:"th",scope:"row",sx:{my:0,py:0,px:"5px",textAlign:"center"},children:r(m,{to:`/user/single/${d.userID}`,style:{color:"rgb(0,0,0)"},children:[d.firstName," ",d.lastName]})}),r(j,{component:"th",scope:"row",sx:{display:"flex",justifyContent:"flex-end",pr:"5px",my:0,py:0},children:[e(m,{to:`/user/edit/${d.userID}`,children:e(b,{size:"small",variant:"contained",color:"warning",style:{textTransform:"none"},children:"Edit"})}),e(m,{style:{marginLeft:"3px",marginRight:"0",float:"right"},to:`/user/delete/${d.userID}`,children:e(b,{size:"small",variant:"contained",color:"error",style:{textTransform:"none"},children:"Delete"})})]})]},d.userID)):null})]})})})]})},or=()=>{const{id:t}=U(),{isLoading:o,isError:s,error:n,data:l,isFetching:d}=Q(t);return r(E,{children:[e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Client"})}),o||d?e(y,{sx:{display:"flex",justifyContent:"center",m:2},children:e(B,{color:"secondary"})}):s?e(P,{sx:{display:"flex",justifyContent:"center"},children:r(a,{style:{color:"white"},children:["Error: ",n.message]})}):l?r(Te,{sx:{m:"10px"},children:[r(je,{children:[r(a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["UserID: ",l.userID]}),r(a,{variant:"h5",component:"div",children:[l.firstName," ",l.lastName]}),e(a,{variant:"body2",color:"primary",children:new Date(l.dateOfBirth).toLocaleDateString()}),r(a,{variant:"body2",color:"secondary",children:["Username: ",l.username]}),r(a,{variant:"body2",color:"secondary",children:["Email: ",l.email]})]}),e(m,{to:"/user/all",children:r(b,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(T,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]},l.userID):null]})};var K={},lr=W.exports;Object.defineProperty(K,"__esModule",{value:!0});var X=K.default=void 0,ir=lr(Z),dr=G,cr=(0,ir.default)((0,dr.jsx)("path",{d:"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z"}),"CakeOutlined");X=K.default=cr;var ee={},ur=W.exports;Object.defineProperty(ee,"__esModule",{value:!0});var re=ee.default=void 0,mr=ur(Z),hr=G,pr=(0,mr.default)((0,hr.jsx)("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}),"EmailOutlined");re=ee.default=pr;const yr=async t=>{await((s=2200)=>new Promise(n=>setTimeout(n,s)))(),await fetch("https://user.technolashes.com/api/user",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then(s=>{switch(s.status){case 200:return s.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(s=>{if(s)return document.getElementById("user-add-success").style.display="flex",s}).catch(s=>{document.getElementById("user-add-error").style.display="flex",document.getElementById("user-add-error-message").innerHTML=s,console.log(s)})},xr=()=>{const t=fe();return J("user-add",yr,{refetchOnWindowFocus:!1,onSuccess:()=>{t.invalidateQueries("user-all")}})},fr=()=>{const t=be(),[o,s]=z.exports.useState({showPassword:!1}),[n,l]=z.exports.useState({showPassword:!1}),[d,x]=z.exports.useState("CLIENT"),{register:i,handleSubmit:u,watch:c,formState:{errors:I}}=ve(),f=g=>{g=="password"?(s(v(p({},o),{showPassword:!o.showPassword})),o.showPassword?document.getElementById("password").setAttribute("type","text"):document.getElementById("password").setAttribute("type","password")):g=="confirmPassword"&&(l(v(p({},n),{showPassword:!n.showPassword})),n.showPassword?document.getElementById("confirmPassword").setAttribute("type","text"):document.getElementById("confirmPassword").setAttribute("type","password"))},L=c(["password","confirmPassword"]),h=L[0]==L[1],{mutate:q}=xr();return r(E,{children:[r(M,{sx:{width:"100%"},children:[e($,{id:"user-add-error",severity:"error",style:{display:"none"},children:e("strong",{id:"user-add-error-message"})}),e($,{id:"user-add-success",severity:"success",style:{display:"none"},children:e("strong",{children:"Account Created Successfully!"})})]}),e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Create Account"})}),r("form",{onSubmit:u(g=>{document.getElementById("user-add-success").style.display="none",document.getElementById("user-add-error").style.display="none",h&&(g.roles=d,delete g.confirmPassword,q(g))}),style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(50,53,101)",padding:"20px 10px",margin:"10px 30px",borderRadius:"10px"},children:[e(S,p({id:"firstName",sx:{m:"10px"},variant:"outlined",name:"firstName",label:"First Name",InputLabelProps:{className:t.input},InputProps:{className:t.input}},i("firstName",{required:!0,pattern:/^[a-zA-Z ,.'-]{3,200}$/i}))),I.firstName&&e("span",{style:w,children:"! Invalid first name ..."}),e(S,p({id:"lastName",sx:{m:"10px"},variant:"outlined",name:"lastName",label:"Last Name",InputLabelProps:{className:t.input},InputProps:{className:t.input}},i("lastName",{required:!0,pattern:/^[a-zA-Z ,.'-]{3,200}$/i}))),I.lastName&&e("span",{style:w,children:"! Invalid last name ..."}),e(S,v(p({id:"dateOfBirth",sx:{m:"10px"},variant:"outlined",name:"dateOfBirth",label:"Date of Birth",InputLabelProps:{className:t.input}},i("dateOfBirth",{required:!0,pattern:/^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/i})),{InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(X,{sx:{color:"rgb(255,255,255)"}})})}})),I.dateOfBirth&&e("span",{style:w,children:"! Invalid date of birth 'YYYY-MM-dd' ..."}),e(S,v(p({id:"email",sx:{m:"10px"},variant:"outlined",name:"email",label:"Email"},i("email",{required:!0,maxLength:200,pattern:/[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(re,{sx:{color:"rgb(255,255,255)"}})})}})),I.email&&e("span",{style:w,children:"! Invalid email ..."}),e(S,v(p({id:"username",sx:{m:"10px"},variant:"outlined",name:"username",label:"Username"},i("username",{required:!0,pattern:/^[a-zA-Z0-9]{3,255}$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(Se,{sx:{color:"rgb(255,255,255)"}})})}})),I.username&&e("span",{style:w,children:"! Invalid username ..."}),e(S,v(p({id:"password",type:"text",sx:{m:"10px"},variant:"outlined",name:"password",label:"Password"},i("password",{required:!0,pattern:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(N,{"aria-label":"toggle password visibility",onClick:g=>f("password"),edge:"end",children:o.showPassword?e(O,{sx:{color:"rgb(255,255,255)"}}):e(R,{sx:{color:"rgb(255,255,255)"}})})})}})),I.password&&e("span",{style:w,children:"! Invalid password ..."}),e(S,v(p({id:"confirmPassword",type:"text",sx:{m:"10px"},variant:"outlined",name:"confirmPassword",label:"Confirm Password"},i("confirmPassword",{required:!0,pattern:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(N,{"aria-label":"toggle password visibility",onClick:g=>f("confirmPassword"),edge:"end",children:n.showPassword?e(O,{sx:{color:"rgb(255,255,255)"}}):e(R,{sx:{color:"rgb(255,255,255)"}})})})}})),I.confirmPassword&&e("span",{style:w,children:"! Invalid confirmation password ..."}),h?"":e("span",{style:w,children:"! Please make sure passwords match ..."}),e(y,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(b,{type:"submit",variant:"contained",color:"success",sx:{width:"50%"},style:{textTransform:"none"},children:"Create"})})]}),e(m,{to:"/user/all",children:r(b,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(T,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},gr=()=>{const t=be(),{id:o}=U(),[s,n]=z.exports.useState(""),[l,d]=z.exports.useState({showPassword:!0}),[x,i]=z.exports.useState({showPassword:!0}),{isLoading:u,isError:c,error:I,data:f,isFetching:L}=Q(o);z.exports.useEffect(()=>{f&&n(f.roles)},[f]);const{register:h,handleSubmit:q,watch:ne,formState:{errors:g}}=ve(),ae=D=>{D=="password"?(d(v(p({},l),{showPassword:!l.showPassword})),l.showPassword?document.getElementById("password").setAttribute("type","text"):document.getElementById("password").setAttribute("type","password")):D=="confirmPassword"&&(i(v(p({},x),{showPassword:!x.showPassword})),x.showPassword?document.getElementById("confirmPassword").setAttribute("type","text"):document.getElementById("confirmPassword").setAttribute("type","password"))},oe=ne(["password","confirmPassword"]),le=oe[0]==oe[1],{mutate:Ie}=Qe();return r(E,{children:[r(M,{sx:{width:"100%"},children:[e($,{id:"user-edit-error",severity:"error",style:{display:"none"},children:e("strong",{id:"user-edit-error-message"})}),e($,{id:"user-edit-success",severity:"success",style:{display:"none"},children:e("strong",{children:"Update Successfully!"})})]}),e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Edit User"})}),u||L?e(y,{sx:{display:"flex",justifyContent:"center",m:2},children:e(B,{color:"secondary"})}):c?e(P,{sx:{display:"flex",justifyContent:"center"},children:r(a,{style:{color:"white"},children:["Error: ",I.message]})}):f?e(E,{children:r("form",{onSubmit:q(D=>{document.getElementById("user-edit-success").style.display="none",document.getElementById("user-edit-error").style.display="none",le&&(D.userID=o,D.roles=s,delete D.confirmPassword,Ie(D))}),style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(50,53,101)",padding:"20px 10px",margin:"10px 30px",borderRadius:"10px"},children:[e(S,p({id:"firstName",color:"primary",sx:{m:"10px"},ref:h,variant:"outlined",name:"firstName",defaultValue:f.firstName,label:"First Name",InputLabelProps:{className:t.input},InputProps:{className:t.input}},h("firstName",{required:!0,pattern:/^[a-zA-Z ,.'-]{3,200}$/i}))),g.firstName&&e("span",{style:w,children:"! Invalid first name ..."}),e(S,p({id:"lastName",color:"primary",sx:{m:"10px"},ref:h,variant:"outlined",name:"lastName",defaultValue:f.lastName,label:"Last Name",InputLabelProps:{className:t.input},InputProps:{className:t.input}},h("lastName",{required:!0,pattern:/^[a-zA-Z ,.'-]{3,200}$/i}))),g.lastName&&e("span",{style:w,children:"! Invalid last name ..."}),e(S,v(p({id:"dateOfBirth",color:"primary",sx:{m:"10px"},ref:h,variant:"outlined",name:"dateOfBirth",defaultValue:f.dateOfBirth.substring(0,10),label:"Date Of Birth"},h("dateOfBirth",{required:!0,pattern:/^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(X,{sx:{color:"rgb(255,255,255)"}})})}})),g.dateOfBirth&&e("span",{style:w,children:"! Invalid date of birth 'YYYY-MM-dd' ..."}),e(S,v(p({id:"email",color:"primary",sx:{m:"10px"},ref:h,variant:"outlined",name:"email",defaultValue:f.email,label:"Email"},h("email",{required:!0,maxLength:200,pattern:/[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(re,{sx:{color:"rgb(255,255,255)"}})})}})),g.email&&e("span",{style:w,children:"! Invalid email ..."}),e(S,v(p({id:"username",color:"primary",sx:{m:"10px"},ref:h,variant:"outlined",name:"username",defaultValue:f.username,label:"Username"},h("username",{required:!0,pattern:/^[a-zA-Z0-9]{3,255}$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(Se,{sx:{color:"rgb(255,255,255)"}})})}})),g.username&&e("span",{style:w,children:"! Invalid username ..."}),e(S,v(p({id:"password",type:"password",color:"primary",sx:{m:"10px"},ref:h,variant:"outlined",name:"password",defaultValue:f.password,label:"Password"},h("password",{required:!0,pattern:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(N,{"aria-label":"toggle password visibility",onClick:D=>ae("password"),edge:"end",children:l.showPassword?e(O,{sx:{color:"rgb(255,255,255)"}}):e(R,{sx:{color:"rgb(255,255,255)"}})})})}})),g.password&&e("span",{style:w,children:"! Invalid password ..."}),e(S,v(p({id:"confirmPassword",type:"password",sx:{m:"10px"},ref:h,variant:"outlined",name:"confirmPassword",label:"Confirm Password",defaultValue:f.password},h("confirmPassword",{required:!0,pattern:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i})),{InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(A,{position:"end",children:e(N,{"aria-label":"toggle password visibility",onClick:D=>ae("confirmPassword"),edge:"end",children:x.showPassword?e(O,{sx:{color:"rgb(255,255,255)"}}):e(R,{sx:{color:"rgb(255,255,255)"}})})})}})),g.confirmPassword&&e("span",{style:w,children:"! Invalid confirmation password ..."}),le?"":e("span",{style:w,children:"! Please make sure passwords match ..."}),e(y,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(b,{variant:"contained",color:"warning",type:"submit",sx:{width:"50%"},style:{textTransform:"none"},children:"Edit"})})]})}):null,e(m,{to:"/user/all",children:r(b,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(T,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})};var te={},wr=W.exports;Object.defineProperty(te,"__esModule",{value:!0});var se=te.default=void 0,br=wr(Z),vr=G,Sr=(0,br.default)((0,vr.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");se=te.default=Sr;const Ir=async t=>{await((n=2200)=>new Promise(l=>setTimeout(l,n)))();const s=t.userID;await fetch(`https://user.technolashes.com/api/user/${s}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then(n=>{switch(n.status){case 200:document.getElementById("user-delete-success").style.display="flex";return;case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).catch(n=>{document.getElementById("user-delete-error").style.display="flex",document.getElementById("user-delete-error-message").innerHTML=n,console.log(n)})},Cr=()=>{const t=fe(),o=ge();return J(Ir,{refetchOnWindowFocus:!1,onSuccess:()=>{t.invalidateQueries("user-all"),setTimeout(()=>o("/user/all"),2500)}})},pe={position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},Pr=()=>{const{id:t}=U(),{isLoading:o,isError:s,error:n,data:l,isFetching:d}=Q(t),[x,i]=z.exports.useState(!0),u=()=>i(!0),c=()=>i(!1),{mutate:I}=Cr(),f=L=>{L.preventDefault(),I({userID:t})};return e(we,{open:x,onClose:u,style:{backgroundColor:"rgb(50,53,101)"},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o||d?e(y,{sx:{style:pe,display:"flex",justifyContent:"center",mt:40},children:e(B,{color:"secondary"})}):s?e(Container,{sx:{display:"flex",justifyContent:"center"},children:r(a,{style:{color:"white"},children:["Error: ",n.message]})}):l?r(y,{children:[r(M,{sx:{width:"100%"},children:[e($,{id:"user-delete-error",severity:"error",style:{display:"none"},children:e("strong",{id:"user-delete-error-message"})}),e($,{id:"user-delete-success",severity:"success",style:{display:"none"},children:e("strong",{children:"Deleted Successfully!"})})]}),r(y,{sx:pe,children:[r(a,{id:"modal-modal-title",variant:"h6",color:"error",children:[r("strong",{style:{color:"blue"},children:[l.firstName,"'s"]})," Account"]}),e(a,{id:"modal-modal-description",sx:{mt:2},color:"error",children:"Are you sure you want this user account deleted?"}),r(b,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"error",onClick:f,children:["Yes",e(se,{fontSize:"small",sx:{ml:1}})]}),e(m,{to:"/user/all",children:r(b,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"primary",onClick:c,children:["No",e(T,{fontSize:"small",sx:{ml:"10px"}})]})})]})]}):null})},Er=async()=>(await((s=1100)=>new Promise(n=>setTimeout(n,s)))(),await fetch("https://user.technolashes.com/api/records",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(s=>{switch(s.status){case 200:return s.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(s=>{if(s)return s}).catch(s=>console.log(s))),Ar=()=>xe("record-all",Er,{refetchOnWindowFocus:!1}),Nr=()=>{const{isLoading:t,isError:o,error:s,data:n,isFetching:l}=Ar();let d,x;return n&&(d=n.reduce((i,u)=>(i.some(c=>c.userUserID===u.userUserID)||i.push(u),i),[]),x=n.reduce((i,u)=>(i.some(c=>c.record.date===u.record.date&&c.userUserID===u.userUserID)||i.push(u),i),[])),r(E,{children:[e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"ALL Records"})}),e(y,{sx:{m:"10px"},children:t||l?e(P,{sx:{display:"flex",justifyContent:"center",mt:1},children:e(y,{children:e(B,{color:"secondary"})})}):o?e(P,{sx:{display:"flex",justifyContent:"center"},children:e(y,{children:r(a,{style:{color:"rgb(0,0,0)"},children:["Error: ",s.message]})})}):n||d?d.map(i=>r(V,{children:[e(k,{expandIcon:e(H,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e(a,{variant:"subtitle2",color:"primary",children:r("strong",{children:[i.user.firstName," ",i.user.lastName]})})}),x.map(u=>{if(i.userUserID===u.userUserID)return r(V,{children:[e(k,{expandIcon:e(H,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e(a,{variant:"subtitle2",color:"secondary",children:e("em",{children:u.record.date})})}),n.map(c=>{if(u.userUserID===c.userUserID&&u.record.date===c.record.date)return r(V,{children:[e(ce,{sx:{my:0,py:0},children:e(k,{expandIcon:e(H,{}),"aria-controls":"panel1a-content",id:"panel1a-header",sx:{my:0,py:0},children:e(a,{variant:"subtitle2",children:r("strong",{style:{color:"rgb(50, 53, 101)"},children:[c.record.start+" ","-"," "+c.record.end]})})})}),r(F,{container:!0,spacing:2,children:[e(F,{item:!0,xs:7,children:e(ce,{children:e(k,{"aria-controls":"panel1a-content",id:"panel1a-header",children:r(a,{variant:"subtitle2",sx:{display:"flex",flexDirection:"column",mt:"-10px",p:0},textAlign:"left",children:[r("em",{children:["Service 1:"," ",c.record.firstService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 2:"," ",c.record.secondService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 3:"," ",c.record.thirdService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 4:"," ",c.record.fourthService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 5:"," ",c.record.fifthService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]})]})})})}),r(F,{item:!0,xs:5,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e(m,{to:`/record/update/${u.record.recordID}`,children:e(b,{size:"small",variant:"contained",color:"warning",sx:{m:1,width:"100px"},style:{textTransform:"none"},children:"Edit"})}),e(m,{to:`/record/delete/${u.record.recordID}`,children:e(b,{size:"small",variant:"contained",color:"error",sx:{m:1,width:"100px"},style:{textTransform:"none"},children:"Delete"})})]})]})]},c.recordRecordID)})]},u.recordRecordID)})]},i.recordRecordID)):null})]})},Dr=async t=>{await((n=2200)=>new Promise(l=>setTimeout(l,n)))();const s=t.recordID;await fetch(`https://user.technolashes.com/api/record/${s}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then(n=>{switch(n.status){case 200:document.getElementById("record-delete-success").style.display="flex";return;case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).catch(n=>{document.getElementById("record-delete-error").style.display="flex",document.getElementById("record-delete-error-message").innerHTML=n,console.log(n)})},zr=()=>{const t=ge();return J(Dr,{refetchOnWindowFocus:!1,onSuccess:()=>{setTimeout(()=>t("/record"),2500)}})},ye={position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},Lr=()=>{const{id:t}=U(),{isLoading:o,isError:s,error:n,data:l,isFetching:d}=Ke(t),[x,i]=z.exports.useState(!0),u=()=>i(!0),c=()=>i(!1),{mutate:I}=zr(),f=L=>{L.preventDefault(),I({recordID:t})};return e(we,{open:x,onClose:u,style:{backgroundColor:"rgb(50,53,101)"},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o||d?e(y,{sx:{style:ye,display:"flex",justifyContent:"center",mt:40},children:e(B,{color:"secondary"})}):s?e(Container,{sx:{display:"flex",justifyContent:"center"},children:r(a,{style:{color:"white"},children:["Error: ",n.message]})}):l?r(y,{children:[r(M,{sx:{width:"100%"},children:[e($,{id:"record-delete-error",severity:"error",style:{display:"none"},children:e("strong",{id:"record-delete-error-message"})}),e($,{id:"record-delete-success",severity:"success",style:{display:"none"},children:e("strong",{children:"Deleted Successfully!"})})]}),r(y,{sx:ye,children:[r(a,{id:"modal-modal-title",variant:"h6",color:"error",children:[e("strong",{style:{color:"blue"},children:l.date})," (",l.start,"-",l.end,")"]}),e(a,{id:"modal-modal-description",sx:{mt:2},color:"error",children:"Are you sure you want this record deleted?"}),r(b,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"error",onClick:f,children:["Yes",e(se,{fontSize:"small",sx:{ml:1}})]}),e(m,{to:"/record",children:r(b,{variant:"contained",size:"small",sx:{m:"10px",mt:"30px"},color:"primary",onClick:c,children:["No",e(T,{fontSize:"small",sx:{ml:"10px"}})]})})]})]}):null})},$r=()=>r(E,{children:[e(a,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Help Tutorial,"})}),e(a,{sx:{m:"10px"},variant:"h6",children:e("strong",{children:"Navigating the Application"})}),e(P,{children:e("img",{sx:{display:"flex",justifyContent:"center"},style:{width:"100%"},src:"../assets/img/admin-nav.webp",alt:"admin-nav",height:"auto",width:"auto"})}),e(a,{sx:{my:"10px",mx:"30px",pb:"10px"},variant:"subtitle2",children:"Clicking onto the hamburger menu on the top-right corner allows access to other features of the application including Records and Settings."}),e(a,{sx:{m:"10px"},variant:"h6",children:e("strong",{children:"Admin Settings"})}),e(P,{children:e("img",{sx:{display:"flex",justifyContent:"center"},style:{width:"100%"},src:"../assets/img/admin-settings.webp",alt:"admin-settings",height:"auto",width:"auto"})}),e(a,{sx:{my:"10px",mx:"30px",pb:"10px"},variant:"subtitle2",children:"Navigating to the Settings page allows access to User Account Management and Display Mode."}),e(P,{children:e("img",{sx:{display:"flex",justifyContent:"center"},style:{width:"100%"},src:"../assets/img/admin-user-account-all.webp",alt:"admin-user-account-all",height:"auto",width:"auto"})}),e(a,{sx:{my:"10px",mx:"30px",pb:"10px"},variant:"subtitle2",children:"Admin is allowed access to every individual user account on the system and may view, edit and delete them."}),e(P,{children:e("img",{sx:{display:"flex",justifyContent:"center"},style:{width:"100%"},src:"../assets/img/admin-user-account-single.webp",alt:"admin-user-account-single",height:"auto",width:"auto"})}),e(a,{sx:{m:"10px"},variant:"h6",children:e("strong",{children:"Admin Records"})}),e(P,{children:e("img",{sx:{display:"flex",justifyContent:"center"},style:{width:"100%"},src:"../assets/img/admin-record-all.webp",alt:"admin-record-all",height:"auto",width:"auto"})}),e(a,{sx:{my:"10px",mx:"30px",pb:"10px"},variant:"subtitle2",children:"Admin may view, edit and delete ALL Client User Records in the system."}),e(m,{to:"/",children:r(b,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(T,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]}),Br=()=>e(E,{children:r(_e,{children:[e(C,{path:"record",element:e(Nr,{})}),e(C,{path:"record/delete/:id",element:e(Lr,{})}),e(C,{path:"record/update/:id",element:e(Xe,{})}),e(C,{path:"display",element:e(er,{})}),e(C,{path:"tutorial",element:e($r,{})}),e(C,{path:"user/delete/:id",element:e(Pr,{})}),e(C,{path:"user/edit/:id",element:e(gr,{})}),e(C,{path:"user/add",element:e(fr,{})}),e(C,{path:"user/single/:id",element:e(or,{})}),e(C,{path:"user/all",element:e(ar,{})}),e(C,{path:"settings",element:e(tr,{})}),e(C,{path:"home",element:e(he,{})}),e(C,{path:"/",element:e(he,{})})]})}),Tr=()=>r("footer",{className:"footer-basic",children:[r(y,{className:"social",style:{padding:"10px 35px"},children:[e("a",{href:"https://m.instagram.com/",children:e(N,{"aria-label":"instagram",children:e(ke,{fontSize:"medium",style:{color:"rgb(255,255,2555)"}})})}),e("a",{href:"https://m.youtube.com/",children:e(N,{"aria-label":"instagram",children:e(Oe,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.twitter.com/",children:e(N,{"aria-label":"instagram",children:e(Re,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.facebook.com/",children:e(N,{"aria-label":"instagram",children:e(Ue,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})})]}),r(y,{id:"internal-links",children:[e(m,{to:"/",children:"Home"}),e(m,{to:"/record",children:"Record"})]}),e(a,{className:"copyright",variant:"caption",display:"block",align:"center",children:"AmourAila \xA9 2022"})]}),jr=[{id:1,title:"Home",href:"home"},{id:2,title:"Record",href:"record"},{id:3,title:"Settings",href:"settings"}],Mr=()=>{const[t,o]=ue.useState(null);ue.useState(!0);const s=d=>{o(d.currentTarget)},n=()=>{o(null)},l=async()=>{await((x=1001)=>new Promise(i=>setTimeout(i,x)))(),await fetch("https://user.technolashes.com/api/user/logout",{method:"POST",credentials:"include"}).then(x=>{x.status===200?(console.log("Logged out successfully!"),window.location.href="https://technolashes.com"):console.log("Error Logging out!")}).catch(x=>console.log(x))};return r(E,{children:[e(Me,{position:"static",children:e(P,{maxWidth:"xl",children:r(qe,{disableGutters:!0,children:[e(y,{sx:{display:"flex"},children:e(m,{to:"/",children:e(N,{size:"large","aria-label":"logo",color:"inherit",children:e("img",{src:"/assets/img/Logo.webp",alt:"Logo",height:"50",width:"50"})})})}),e(a,{variant:"h6",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"AmourAila"}),e(a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"AmourAila"}),r(y,{sx:{flexGrow:0},children:[e(Ve,{title:"Open menu",children:e(N,{size:"large","aria-label":"current menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:s,color:"inherit",children:e(Fe,{})})}),r(He,{sx:{mt:"45px",width:"100%"},id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:n,style:{position:"absolute"},children:[jr.map(d=>e(m,{to:d.href,style:{margin:0},children:e(Y,{onClick:n,style:{width:"1000px"},children:e(a,{sx:{ml:"5px"},align:"center",color:"primary",children:d.title})})},d.id)),e(y,{sx:{display:"flex",justifyContent:"center",mr:"10px"},children:e(m,{to:"",onClick:n,children:r(b,{variant:"contained",color:"warning",onClick:l,style:{textTransform:"none"},children:[e(rr,{sx:{mr:"5px"}}),"Sign out"]})})})]})]})]})})}),e(Br,{}),e(Tr,{})]})};export{Mr as default};
