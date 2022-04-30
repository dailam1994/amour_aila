var Ce=Object.defineProperty,Ae=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ie=(t,i,n)=>i in t?Ce(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,h=(t,i)=>{for(var n in i||(i={}))Be.call(i,n)&&ie(t,n,i[n]);if(ne)for(var n of ne(i))Ie.call(i,n)&&ie(t,n,i[n]);return t},R=(t,i)=>Ae(t,Le(i));import{j as r,aJ as ae,a as e,I as A,d as $e,c as Pe,e as Ne,f as Fe,L as b,T as l,u as ce,F as y,C as L,l as J,r as $,X as de,Y as W,B as g,H as _,Z as E,$ as Oe,m as F,x as ue,P as he,y as me,G as pe,D as P,E as N,a8 as ge,a9 as q,g as G,ab as Q,V as ze,a0 as ye,o as je,J as Me,p as qe,ac as _e,ad as j,ae as M,R as Ve,b as k,A as He,h as Ue,i as Re,k as We,M as Ge}from"./vendor.744e3b36.js";import{n as Ye,d as Ze,a as Je,b as se,c as Qe,u as Xe,h as Ke,f as et,g as tt,e as xe,q as rt,v as be,r as fe,s as nt,t as it,L as at,D as st,T as oe,w as ot,x as lt}from"./useBooking.all.96e45f7e.js";import{u as ct,a as we,e as S}from"./guest.login.35999d71.js";const dt=()=>r("footer",{className:"footer-basic",children:[r(ae,{className:"social",style:{padding:"10px 35px"},children:[e("a",{href:"https://m.instagram.com/",children:e(A,{"aria-label":"instagram",children:e($e,{fontSize:"medium",style:{color:"rgb(255,255,2555)"}})})}),e("a",{href:"https://m.youtube.com/",children:e(A,{"aria-label":"instagram",children:e(Pe,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.twitter.com/",children:e(A,{"aria-label":"instagram",children:e(Ne,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})}),e("a",{href:"https://m.facebook.com/",children:e(A,{"aria-label":"instagram",children:e(Fe,{fontSize:"medium",style:{color:"rgb(255,255,255)"}})})})]}),r(ae,{id:"internal-links",children:[e(b,{to:"/",children:"Home"}),e(b,{to:"/booking/availability",children:"Booking"}),e(b,{to:"/appointment/user",children:"Appointment"})]}),e(l,{className:"copyright",variant:"caption",display:"block",align:"center",children:"AmourAila \xA9 2022"})]}),ut=async()=>(await((n=1010)=>new Promise(a=>setTimeout(a,n)))(),await fetch("https://no-lashes19940827.herokuapp.com/api/user/client",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(n=>{switch(n.status){case 200:return n.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(n=>{if(n)return n}).catch(n=>console.log(n))),X=()=>ce("client-session",ut,{refetchOnWindowFocus:!1}),le=()=>{localStorage.getItem("colour")=="rgb(0,0,0)"?Ye():Ze();const{data:t}=X();return r(y,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:t?r("strong",{children:["Welcome ",t.user.username,","]}):e("strong",{children:"Welcome Client,"})}),e(l,{sx:{my:"10px",mx:"30px",pb:"10px"},variant:"subtitle1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},ht=()=>r(y,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Settings"})}),r(L,{sx:{my:"50px"},children:[e(b,{to:"/user/edit",style:{margin:0},children:r(J,{children:[e(Je,{color:"primary"}),e(l,{sx:{ml:"20px"},aligh:"center",color:"primary",children:"Manage Account"}),e(se,{fontSize:"small",color:"primary",style:{position:"absolute",right:"10px"}})]})}),e(b,{to:"/display",style:{margin:0},children:r(J,{children:[e(Qe,{color:"primary"}),e(l,{sx:{ml:"20px"},aligh:"center",color:"primary",children:"Display Mode"}),e(se,{fontSize:"small",color:"primary",style:{position:"absolute",right:"10px"}})]})})]})]}),mt=()=>{const t=ct(),[i,n]=$.exports.useState({showPassword:!0}),[a,c]=$.exports.useState("");let u;const{data:m}=X();m&&(u=m.user.userId);const{isLoading:d,isError:O,error:B,data:s,isFetching:f}=Xe(u),{register:p,handleSubmit:V,formState:{errors:w}}=we();$.exports.useEffect(()=>{s&&c(s.roles)},[s]);const H=v=>{v=="password"&&(n(R(h({},i),{showPassword:!i.showPassword})),i.showPassword?document.getElementById("password").setAttribute("type","text"):document.getElementById("password").setAttribute("type","password"))},{mutate:Y}=Ke();return r(y,{children:[r(de,{sx:{width:"100%"},children:[e(W,{id:"user-edit-error",severity:"error",style:{display:"none"},children:e("strong",{id:"user-edit-error-message"})}),e(W,{id:"user-edit-success",severity:"success",style:{display:"none"},children:e("strong",{children:"Update Successfully!"})})]}),e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Edit Account"})}),d||f?e(g,{sx:{display:"flex",justifyContent:"center",m:2},children:e(_,{color:"secondary"})}):O?e(L,{sx:{display:"flex",justifyContent:"center"},children:r(l,{style:{color:"white"},children:["Error: ",B.message]})}):s?e(y,{children:r("form",{onSubmit:V(v=>{document.getElementById("user-edit-success").style.display="none",document.getElementById("user-edit-error").style.display="none",v.userID=u,v.roles=a,Y(v)}),style:{display:"flex",flexDirection:"column",backgroundColor:"rgb(50,53,101)",padding:"20px 10px",margin:"10px 30px",borderRadius:"10px"},children:[e(E,h({id:"username",ref:p,color:"primary",sx:{m:"10px"},variant:"outlined",name:"username",label:"Username",defaultValue:s.username,InputLabelProps:{className:t.input},InputProps:{className:t.input,readOnly:!0}},p("username",{required:!0,pattern:/^[a-zA-Z0-9]{3,255}$/i}))),w.username&&e("span",{style:S,children:"! Invalid user name ..."}),e(E,h({id:"firstName",ref:p,color:"primary",sx:{m:"10px"},variant:"outlined",name:"firstName",label:"First Name",defaultValue:s.firstName,InputLabelProps:{className:t.input},InputProps:{className:t.input}},p("firstName",{required:!0,pattern:/^[a-zA-Z ,.'-]{3,200}$/i}))),w.firstName&&e("span",{style:S,children:"! Invalid first name ..."}),e(E,h({id:"lastName",ref:p,color:"primary",sx:{m:"10px"},variant:"outlined",name:"lastName",defaultValue:s.lastName,label:"Last Name",InputLabelProps:{className:t.input},InputProps:{className:t.input}},p("lastName",{required:!0,pattern:/^[a-zA-Z ,.'-]{3,200}$/i}))),w.lastName&&e("span",{style:S,children:"! Invalid last name ..."}),e(E,h({id:"dateOfBirth",ref:p,color:"primary",sx:{m:"10px"},variant:"outlined",name:"dateOfBirth",label:"Date of Birth",defaultValue:s.dateOfBirth.substring(0,10),InputLabelProps:{className:t.input},InputProps:{className:t.input}},p("dateOfBirth",{required:!0,pattern:/^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/i}))),w.dateOfBirth&&e("span",{style:S,children:"! Invalid Date of Birth ..."}),e(E,h({id:"email",ref:p,color:"primary",sx:{m:"10px"},variant:"outlined",name:"email",label:"Email",defaultValue:s.email,InputLabelProps:{className:t.input},InputProps:{className:t.input}},p("email",{required:!0,maxLength:200,pattern:/[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/i}))),w.email&&e("span",{style:S,children:"! Invalid email ..."}),e(E,h({id:"password",type:"password",ref:p,color:"primary",sx:{m:"10px"},variant:"outlined",name:"password",label:"Password",defaultValue:s.password,InputLabelProps:{className:t.input},InputProps:{className:t.input,endAdornment:e(Oe,{position:"end",children:e(A,{"aria-label":"toggle password visibility",onClick:v=>H("password"),edge:"end",children:i.showPassword?e(et,{sx:{color:"rgb(255,255,255)"}}):e(tt,{sx:{color:"rgb(255,255,255)"}})})})}},p("password",{required:!0,pattern:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i}))),w.password&&e("span",{style:S,children:"! Invalid password ..."}),e(g,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(F,{variant:"contained",color:"warning",type:"submit",sx:{width:"50%"},style:{textTransform:"none"},children:"Edit"})})]})}):null,e(b,{to:"/settings",children:r(F,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(xe,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]})},pt=()=>{const{isLoading:t,isError:i,error:n,data:a,isFetching:c}=rt(),{isLoading:u,isFetching:m,isError:d,error:O,data:B}=be();return r(y,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"ALL Schedules"})}),e(g,{sx:{m:"10px"},children:e(ue,{component:he,style:{maxHeight:373,overflow:"auto"},children:e(me,{"aria-label":"simple table",children:e(pe,{children:t||c?e(P,{sx:{display:"flex",justifyContent:"center"},children:e(N,{children:e(_,{color:"secondary"})})}):i?e(P,{sx:{display:"flex",justifyContent:"center"},children:e(N,{children:r(l,{style:{color:"rgb(0,0,0)"},children:["Error: ",n.message]})})}):a?a.map(s=>e(P,{sx:{"&:last-child td, &:last-child th":{border:0}},children:e(N,{component:"th",scope:"row",sx:{my:0,py:0,px:"5px",textAlign:"center"},children:r(ge,{children:[e(q,{expandIcon:e(fe,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e(l,{variant:"subtitle2",color:"primary",children:new Date().toDateString()===new Date(s.date).toDateString()?e(y,{children:r("strong",{children:[e("em",{children:new Date(s.startTime).toLocaleTimeString().substring(0,5)+"-"+new Date(s.endTime).toLocaleTimeString().substring(0,5)})," | "+new Date(s.date).toDateString()]})}):r(y,{children:[e("em",{children:new Date(s.startTime).toLocaleTimeString().substring(0,5)+"-"+new Date(s.endTime).toLocaleTimeString().substring(0,5)})," | "+new Date(s.date).toDateString()]})})}),u||m?e(L,{sx:{my:"10px",display:"flex",justifyContent:"center"},children:e(g,{children:e(_,{color:"secondary"})})}):d?e(L,{sx:{display:"flex",justifyContent:"center"},children:e(g,{children:r(l,{style:{color:"rgb(0,0,0)"},children:["Error ",O.message]})})}):B?B.map(f=>{if(new Date(s.date).toDateString()===new Date(f.date).toDateString())return e(G.Fragment,{children:e(Q,{children:e(q,{"aria-controls":"panel1a-content",id:"panel1a-header",sx:{minHeight:0,height:0,my:0,py:0},children:e(l,{variant:"subtitle2",color:"secondary",children:new Date(s.date).toDateString()===new Date(f.date).toDateString()?r(y,{children:[e("strong",{children:"Booked"}),": "+new Date(f.startTime).toLocaleTimeString().substring(0,5)+"-"+new Date(f.endTime).toLocaleTimeString().substring(0,5)]}):null})})})},f.bookingID)}):null,e(b,{style:{display:"flex",justifyContent:"flex-end"},to:`/booking/availability/${new Date(s.date).toDateString()+" "+new Date(s.startTime).toLocaleTimeString().substring(0,5)+"-"+new Date(s.endTime).toLocaleTimeString().substring(0,5)}`,children:e(F,{size:"small",variant:"contained",color:"success",children:"Book"})})]})})},s.availabilityID)):null})})})})]})},gt=async t=>{await((n=3030)=>new Promise(a=>setTimeout(a,n)))(),await fetch("http://localhost:3333/api/booking",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then(n=>{switch(n.status){case 200:return n.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(n=>{if(n)return document.getElementById("booking-add-success").style.display="flex",n}).catch(n=>{document.getElementById("booking-add-error").style.display="flex",document.getElementById("booking-add-error-message").innerHTML=n,console.log(n)})},yt=()=>{const t=ye();return ze("booking-add",gt,{refetchOnWindowFocus:!1,retry:!1,onSuccess:()=>{setTimeout(()=>t("/booking/availability"),2500)}})},x=nt.exports.extendMoment(it),xt=je({components:{MuiInputLabel:{styleOverrides:{root:{color:"#b39ddb"}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"#ede7f6 !important"}}}}}),bt=()=>{const{date:t}=Me(),i=t.substring(0,15),a=new Date(new Date(t).setDate(new Date(t).getDate()-1)).toISOString().substring(0,10).toLocaleString().replace(",","").replaceAll("/","-").split(" "),c=t.substring(16,21),u=new Date(i+" "+c).setMinutes(new Date(i+" "+c).getMinutes()-1),m=new Date(u).toLocaleString().substring(12,17),d=t.substring(22,26)+"1",[O,B]=$.exports.useState(new Date(i+" "+t.substring(16,21))),[s,f]=$.exports.useState(new Date(i+" "+t.substring(22,27))),[p,V]=$.exports.useState(!1);let w=0,H;const{isLoading:Y,isFetching:K,isError:v,error:Se,data:I}=be(),{register:C,handleSubmit:ve,formState:{errors:ee}}=we(),{mutate:Te}=yt();return e(y,{children:Y||K?e(L,{sx:{my:"10px",display:"flex",justifyContent:"center"},children:e(g,{children:e(_,{color:"secondary"})})}):v?e(L,{sx:{display:"flex",justifyContent:"center"},children:e(g,{children:r(l,{style:{color:"rgb(0,0,0)"},children:["Error ",Se.message]})})}):I?r(y,{children:[r(de,{sx:{width:"100%"},children:[e(W,{id:"booking-add-error",severity:"error",style:{display:"none"},children:e("strong",{id:"booking-add-error-message"})}),e(W,{id:"booking-add-success",severity:"success",style:{display:"none"},children:e("strong",{children:"Book Successfully!"})})]}),e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"Set Time"})}),e(l,{sx:{m:"10px"},variant:"subtitle1",color:"primary",children:e("strong",{children:i})}),r("form",{onSubmit:ve(o=>{document.getElementById("booking-add-success").style.display="none",document.getElementById("booking-add-error").style.display="none";let T=o.startTime,D=o.endTime;o.startTime.match("am")?T=T.substring(0,5):o.startTime.match("pm")&&(T=parseInt(o.startTime.substring(0,2))+12,T=T.toString()+":00"),o.endTime.match("am")?D=D.substring(0,5):o.endTime.match("pm")&&(D=parseInt(o.endTime.substring(0,2))+12,D=D.toString()+":00");const z=x(`${a} ${T}`).isBetween(x(`${a} ${m}`),x(`${a} ${d}`))&&x(`${a} ${D}`).isBetween(x(`${a} ${m}`),x(`${a} ${d}`)),Z=()=>{throw document.getElementById("booking-add-error").style.display="flex",document.getElementById("booking-add-error-message").innerHTML="Booking Date/Time Unavailable",new Error("Overlapping Date/Time")},te=()=>{o.serviceOne==!1&&o.serviceTwo==!1&&o.serviceThree==!1&&o.serviceFour==!1&&o.serviceFive==!1?(V(!0),console.log("Need to pick one service")):(V(!1),H={date:i,startTime:T,endTime:D,firstService:o.serviceOne,secondService:o.serviceTwo,thirdService:o.serviceThree,fourthService:o.serviceFour,fifthService:o.serviceFive},Te(H))};if(I.length<1&&z)te();else if(I.length<1&&!z)Z();else if(I.length>=1&&!z)Z();else if(I.length>=1&&z){for(let U of I){const De=new Date(U.date).setDate(new Date(U.date).getDate()+1),re=new Date(De).toISOString().substring(0,10),ke=new Date(U.startTime).toLocaleString().replace(",","").replaceAll("/","-").split(" ")[1].substring(0,5),Ee=new Date(U.endTime).toLocaleString().replace(",","").replaceAll("/","-").split(" ")[1].substring(0,5);x.range([x(`${a} ${T}`),x(`${a} ${D}`)]).overlaps(x.range([x(`${re} ${ke}`),x(`${re} ${Ee}`)]))&&w++}w>=1?Z():z&&te()}}),style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px",backgroundColor:"#671E15"},children:[e(at,{dateAdapter:st,children:r(qe,{theme:xt,children:[e(g,{style:{margin:"10px"},children:e(oe,{label:"Start Time",value:O,onChange:o=>B(o),renderInput:o=>e(E,R(h(h({},o),C("startTime",{required:!0})),{sx:{input:{color:"#d1c4e9"}}}))})}),ee.startTime&&e("span",{style:S,children:"! Please choose start time ..."}),e(g,{style:{margin:"10px"},children:e(oe,{label:"End Time",value:s,onChange:o=>f(o),renderInput:o=>e(E,R(h(h({},o),C("endTime",{required:!0})),{sx:{input:{color:"#d1c4e9"}}}))})}),ee.endTime&&e("span",{style:S,children:"! Please choose end time ..."})]})}),r(_e,{sx:{width:1,ml:11,mt:2},children:[e(j,{control:e(M,h({color:"success",sx:{color:"rgb(255,255,255)"}},C("serviceOne"))),label:"Service 1",sx:{color:"rgb(255,255,255)"}}),e(j,{control:e(M,h({color:"success",sx:{color:"rgb(255,255,255)"}},C("serviceTwo"))),label:"Service 2",sx:{color:"rgb(255,255,255)"}}),e(j,{control:e(M,h({color:"success",sx:{color:"rgb(255,255,255)"}},C("serviceThree"))),label:"Service 3",sx:{color:"rgb(255,255,255)"}}),e(j,{control:e(M,h({color:"success",sx:{color:"rgb(255,255,255)"}},C("serviceFour"))),label:"Service 4",sx:{color:"rgb(255,255,255)"}}),e(j,{control:e(M,h({color:"success",sx:{color:"rgb(255,255,255)"}},C("serviceFive"))),label:"Service 5",sx:{color:"rgb(255,255,255)"}})]}),p?e("span",{style:S,children:"! Please pick at least 1 service ..."}):null,e(g,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e(F,{type:"submit",variant:"contained",color:"success",sx:{width:"100%"},children:"Book"})})]}),e(b,{to:"/booking/availability",children:r(F,{sx:{m:"10px",mb:"20px"},variant:"contained",color:"primary",children:[e(xe,{fontSize:"small",sx:{mr:"10px"}}),"Back"]})})]}):null})},ft=async({queryKey:t})=>{await((a=2020)=>new Promise(c=>setTimeout(c,a)))();const n=t[1];if(n)return await fetch(`http://localhost:3333/api/appointment/user/${n}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(c=>{switch(c.status){case 200:return c.json();case 400:throw new Error("400 Status Code");case 401:throw new Error("401 Status Code");case 429:throw new Error("429 Status Code");case 500:throw new Error("500 Status Code")}}).then(c=>{if(c)return c}).catch(c=>console.log(c))},wt=t=>ce(["appointment-user",t],ft,{refetchOnWindowFocus:!1}),St=()=>{let t;const{data:i}=X();i&&(t=i.user.userId);const{isLoading:n,isError:a,error:c,data:u,isFetching:m}=wt(t);return r(y,{children:[e(l,{sx:{m:"10px"},variant:"h4",children:e("strong",{children:"My Appointments"})}),e(g,{sx:{m:"10px"},children:e(ue,{component:he,style:{maxHeight:373,overflow:"auto"},children:e(me,{"aria-label":"simple table",children:e(pe,{children:n||m?e(P,{sx:{display:"flex",justifyContent:"center"},children:e(N,{children:e(_,{color:"secondary"})})}):a?e(P,{sx:{display:"flex",justifyContent:"center"},children:e(N,{children:r(l,{style:{color:"rgb(0,0,0)"},children:["Error: ",c.message]})})}):u?u.map(d=>e(G.Fragment,{children:e(P,{sx:{"&:last-child td, &:last-child th":{border:0}},children:e(N,{component:"th",scope:"row",sx:{my:0,py:0,px:"5px",textAlign:"center"},children:r(ge,{children:[e(q,{expandIcon:e(fe,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e(l,{variant:"subtitle2",color:"primary",children:new Date().toDateString()===new Date(d.booking.date).toDateString()?e("strong",{children:new Date(d.booking.date).toDateString()}):e(y,{children:new Date(d.booking.date).toDateString()})})}),e(Q,{children:e(q,{"aria-controls":"panel1a-content",id:"panel1a-header",sx:{minHeight:0,height:0,my:0,py:0},children:r(l,{variant:"subtitle1",children:[e("strong",{children:"Booked"}),": "+new Date(d.booking.startTime).toLocaleTimeString().substring(0,5)+"-"+new Date(d.booking.endTime).toLocaleTimeString().substring(0,5)]})})}),e(Q,{children:e(q,{"aria-controls":"panel1a-content",id:"panel1a-header",children:r(l,{variant:"subtitle2",color:"secondary",sx:{display:"flex",flexDirection:"column",mt:"-20px",p:0},textAlign:"left",children:[r("em",{children:["Service 1:"," ",d.booking.firstService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 2:"," ",d.booking.secondService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 3:"," ",d.booking.thirdService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 4:"," ",d.booking.fourthService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]}),r("em",{children:["Service 5:"," ",d.booking.fifthService=="true"?e("strong",{style:{color:"green"},children:"Yes"}):e("em",{style:{color:"red"},children:"nope"})]})]})})})]})})})},d.booking.bookingID)):null})})})})]})},vt=()=>e(y,{children:r(Ve,{children:[e(k,{path:"display",element:e(ot,{})}),e(k,{path:"appointment/user",element:e(St,{})}),e(k,{path:"booking/availability/:date",element:e(bt,{})}),e(k,{path:"booking/availability",element:e(pt,{})}),e(k,{path:"user/edit",element:e(mt,{})}),e(k,{path:"settings",element:e(ht,{})}),e(k,{path:"registered/home",element:e(le,{})}),e(k,{path:"/",element:e(le,{})})]})}),Tt=[{id:1,title:"Home",href:"home"},{id:2,title:"Booking",href:"booking/availability"},{id:3,title:"Appointments",href:"appointment/user"},{id:4,title:"Settings",href:"settings"}],It=()=>{const[t,i]=G.useState(null);G.useState(!0),ye();const n=u=>{i(u.currentTarget)},a=()=>{i(null)},c=async()=>{await((m=1001)=>new Promise(d=>setTimeout(d,m)))(),await fetch("https://no-lashes19940827.herokuapp.com/api/user/logout",{method:"POST",credentials:"include"}).then(m=>{m.status===200?(console.log("Logged out successfully!"),window.location.href="https://lashing19940827.herokuapp.com"):console.log("Error Logging out!")}).catch(m=>console.log(m))};return r(y,{children:[e(He,{position:"static",children:e(L,{maxWidth:"xl",children:r(Ue,{disableGutters:!0,children:[e(g,{sx:{display:"flex"},children:e(b,{to:"/",children:e(A,{size:"large","aria-label":"logo",color:"inherit",children:e("img",{src:"../assets/img/Logo.webp",alt:"Logo",height:"50",width:"50"})})})}),e(l,{variant:"h6",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"AmourAila"}),e(l,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"AmourAila"}),r(g,{sx:{flexGrow:0},children:[e(Re,{title:"Open menu",children:e(A,{size:"large","aria-label":"current menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:n,color:"inherit",children:e(We,{})})}),r(Ge,{sx:{mt:"45px",width:"100%"},id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:a,style:{position:"absolute"},children:[Tt.map(u=>e(b,{to:u.href,style:{margin:0},children:e(J,{onClick:a,style:{width:"1000px"},children:e(l,{sx:{ml:"5px"},align:"center",color:"primary",children:u.title})})},u.id)),e(g,{sx:{display:"flex",justifyContent:"center",mr:"10px"},children:e(b,{to:"",onClick:a,children:r(F,{variant:"contained",color:"warning",onClick:c,style:{textTransform:"none"},children:[e(lt,{sx:{mr:"5px"}}),"Sign out"]})})})]})]})]})})}),e(vt,{}),e(dt,{})]})};export{It as default};
