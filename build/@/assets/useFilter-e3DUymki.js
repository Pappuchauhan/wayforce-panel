import{a as He,P as Xe,c as Ke,r as Qe,u as We,C as ve,b as et,d as tt,A as st,e as nt}from"./ProductServices-Gd1CbPQ6.js";import{d as E}from"./index-cxPaO_Qc.js";import{c as ge,g as Se,r as o,e as ot,S as at}from"./index-bXf7bkfr.js";import{L as rt}from"./LanguageServices-AJcmbBg5.js";import"./httpService-79bAftQe.js";import{a as m,n as N}from"./toast-J_gpu8Z1.js";import{u as it}from"./useUtilsFunction-x7MTCbnv.js";var ye={exports:{}};(function(w,j){(function(P,h){w.exports=h()})(ge,function(){return function(P,h,D){h.prototype.isBetween=function(B,R,g,b){var x=D(B),L=D(R),J=(b=b||"()")[0]==="(",S=b[1]===")";return(J?this.isAfter(x,g):!this.isBefore(x,g))&&(S?this.isBefore(L,g):!this.isAfter(L,g))||(J?this.isBefore(x,g):!this.isAfter(x,g))&&(S?this.isAfter(L,g):!this.isBefore(L,g))}}})})(ye);var dt=ye.exports;const ut=Se(dt);var Ce={exports:{}};(function(w,j){(function(P,h){w.exports=h()})(ge,function(){return function(P,h,D){h.prototype.isToday=function(){var B="YYYY-MM-DD",R=D();return this.format(B)===R.format(B)}}})})(Ce);var pt=Ce.exports;const ct=Se(pt),lt={type:"object",properties:{_id:{type:"string"},name:{type:"object"},description:{type:"object"},icon:{type:"string"},status:{type:"string"}},required:["name"]},mt={type:"object",properties:{status:{type:"string"},title:{type:"object"},name:{type:"object"},variants:{type:"array"},option:{type:"string"},type:{type:"string"}},required:["name","title"]},ft={type:"object",properties:{title:{type:"object"},couponCode:{type:"string"},endTime:{type:"string"},discountPercentage:{type:"number"},minimumAmount:{type:"number"},productType:{type:"string"},logo:{type:"string"},discountType:{type:"object"},status:{type:"string"}},required:["title","couponCode","endTime","status"]},gt={type:"object",properties:{name:{type:"string"},email:{type:"string"}},required:["name","email"]},Et=w=>{const j=new He({allErrors:!0}),[P,h]=o.useState(""),[D,B]=o.useState(""),[R,g]=o.useState(""),[b,x]=o.useState(""),[L,J]=o.useState(""),[S,se]=o.useState(""),[$,we]=o.useState(""),[A,ne]=o.useState(""),[T,oe]=o.useState(""),[U,ae]=o.useState(""),[he,be]=o.useState(""),[M,Le]=o.useState(""),[k,De]=o.useState(""),[Ae,Te]=o.useState([]),[Oe,Pe]=o.useState([]),[Re,xe]=o.useState([]),[G,Ne]=o.useState(""),[H,je]=o.useState(""),[X,Be]=o.useState(""),[V,_e]=o.useState(""),[K,Fe]=o.useState(1),[Je,re]=o.useState([]),[Ue,Me]=o.useState(""),[Ie,Ee]=o.useState(""),[Ve,qe]=o.useState(""),[y,q]=o.useState([]),[Ye,Y]=o.useState(""),[ze,z]=o.useState(!1),[Q,Ze]=o.useState(""),[W]=o.useState([]),ie=o.useRef(""),de=o.useRef(""),v=o.useRef(""),ue=o.useRef(""),pe=o.useRef(""),ee=o.useRef(""),ce=o.useRef(""),le=o.useRef(""),me=o.useRef(""),$e=o.useRef(""),fe=o.useRef("");E.extend(ut),E.extend(ct);const p=ot(),{lang:I,setIsUpdate:_,setLoading:f}=o.useContext(at),{globalSetting:F}=it(),O=o.useMemo(()=>{const a=new Date;console.log(w),a.setDate(a.getDate()-V);let t=w==null?void 0:w.map(e=>{const r=new Date(e==null?void 0:e.updatedAt).toLocaleString("en-US",{timeZone:F==null?void 0:F.default_time_zone});return{...e,updatedDate:r==="Invalid Date"?"":r}});if(p.pathname==="/dashboard"){const e=t==null?void 0:t.filter(c=>c.status==="Pending");Te(e);const r=t==null?void 0:t.filter(c=>c.status==="Processing");Pe(r);const s=t==null?void 0:t.filter(c=>c.status==="Delivered");xe(s);const u=t==null?void 0:t.filter(c=>E(c.createdAt).isToday()),l=u==null?void 0:u.reduce((c,C)=>c+C.total,0);Me(l);const n=t==null?void 0:t.filter(c=>E(c.createdAt).isBetween(new Date().setDate(new Date().getDate()-30),new Date)),i=n==null?void 0:n.reduce((c,C)=>c+C.total,0);Ee(i);const te=t==null?void 0:t.reduce((c,C)=>c+C.total,0);qe(te)}return P&&(t=t.filter(e=>e.parent===P)),D==="Low"&&(t=t.sort((e,r)=>e.price<r.price&&-1)),D==="High"&&(t=t.sort((e,r)=>e.price>r.price&&-1)),R&&(t=t.filter(e=>{var r;return(r=e==null?void 0:e.title)==null?void 0:r.toLowerCase().includes(R.toLowerCase())})),T&&(t=t.filter(e=>{var r,s,u;return((s=(r=e==null?void 0:e.title[I])==null?void 0:r.toLowerCase())==null?void 0:s.includes(T==null?void 0:T.toLowerCase()))||((u=e==null?void 0:e.attribute)==null?void 0:u.toLowerCase().includes(T==null?void 0:T.toLowerCase()))})),A&&(t=t.filter(e=>{var r,s,u;return((s=(r=e==null?void 0:e.name[I])==null?void 0:r.toLowerCase())==null?void 0:s.includes(A==null?void 0:A.toLowerCase()))||((u=e==null?void 0:e.category)==null?void 0:u.toLowerCase().includes(A==null?void 0:A.toLowerCase()))})),H&&(t=t.filter(e=>e.role===H)),X&&(t=t.filter(e=>e.userType===X)),b&&(t=t.filter(e=>{var r,s,u;return((r=e==null?void 0:e.name[I])==null?void 0:r.toLowerCase().includes(b.toLowerCase()))||((s=e==null?void 0:e.phone)==null?void 0:s.toLowerCase().includes(b.toLowerCase()))||((u=e==null?void 0:e.email)==null?void 0:u.toLowerCase().includes(b.toLowerCase()))})),L&&(console.log(L),t=t.filter(e=>{var r;return(r=e==null?void 0:e.name)==null?void 0:r.toLowerCase().includes(L.toLowerCase())})),S&&(t=t==null?void 0:t.filter(e=>{var r,s,u;return((s=(r=e==null?void 0:e.title[I])==null?void 0:r.toLowerCase())==null?void 0:s.includes(S==null?void 0:S.toLowerCase()))||((u=e==null?void 0:e.couponCode)==null?void 0:u.toLowerCase().includes(S==null?void 0:S.toLowerCase()))})),G&&(t=t.filter(e=>e.status===G)),$&&(t=t.filter(e=>e.contact.toLowerCase().includes($.toLowerCase()))),V&&(t=t.filter(e=>E(e.createdAt).isBetween(a,new Date))),U&&(t=t.filter(e=>{var r,s;return((r=e==null?void 0:e.name)==null?void 0:r.toLowerCase().includes(U.toLowerCase()))||((s=e==null?void 0:e.iso_code)==null?void 0:s.toLowerCase().includes(U.toLowerCase()))})),Q&&(t=t.filter(e=>e==null?void 0:e.name.toLowerCase().includes(Q.toLowerCase()))),M&&(t=t.filter(e=>e.name.toLowerCase().includes(M.toLowerCase())||e.iso_code.toLowerCase().includes(M.toLowerCase())||e.language_code.toLowerCase().includes(M.toLowerCase()))),k&&(t=t.filter(e=>e.iso_code.toLowerCase().includes(k.toLowerCase()))),t},[V,w,p.pathname,P,D,R,T,A,H,b,S,G,$,U,Q,M,k,ee,L,F==null?void 0:F.default_time_zone,I]),Z=20,ke=O==null?void 0:O.length,Ge=a=>{Fe(a)};return o.useEffect(()=>{re(O==null?void 0:O.slice((K-1)*Z,K*Z))},[O,K,Z]),{userRef:v,searchRef:de,couponRef:ue,orderRef:pe,categoryRef:ee,attributeRef:ce,pending:Ae,processing:Oe,delivered:Re,todayOrder:Ue,monthlyOrder:Ie,totalOrder:Ve,setFilter:h,setSortedField:B,setStatus:Ne,setRole:je,time:V,zone:he,setTime:_e,taxRef:$e,setZone:be,filename:Ye,countryRef:le,dataTable:Je,serviceData:O,country:U,setSearchText:g,setCountry:ae,isDisabled:ze,languageRef:me,currencyRef:ie,shippingRef:fe,setSearchUser:x,setSearchMyCategory:J,setDataTable:re,setCategoryType:ne,handleChangePage:Ge,totalResults:ke,resultsPerPage:Z,handleOnDrop:a=>{for(let t=0;t<a.length;t++)W.push(a[t].data)},setSearchCoupon:se,setAttributeTitle:oe,handleSelectFile:a=>{var r;a.preventDefault();const t=new FileReader,e=(r=a.target)==null?void 0:r.files[0];if(e&&e.type==="application/json")Y(e==null?void 0:e.name),z(!0),t.readAsText(e,"UTF-8"),t.onload=s=>{let u=JSON.parse(s.target.result),l=[];p.pathname==="/categories"&&(l=u.map(n=>({_id:n._id,id:n.id,status:n.status,name:n.name,description:n.description,parentName:n.parentName,parentId:n.parentId,icon:n.icon}))),p.pathname==="/attributes"&&(l=u.map(n=>({_id:n._id,status:n.status,title:n.title,name:n.name,variants:n.variants,option:n.option,type:n.type}))),p.pathname==="/coupons"&&(l=u.map(n=>({title:n.title,couponCode:n.couponCode,endTime:n.endTime,discountPercentage:n.discountPercentage,minimumAmount:n.minimumAmount,productType:n.productType,logo:n.logo,discountType:n.discountType,status:n.status}))),p.pathname==="/customers"&&(l=u.map(n=>({name:n.name,email:n.email,password:n.password,phone:n.phone}))),q(l)};else if(e&&e.type==="text/csv")Y(e==null?void 0:e.name),z(!0),t.onload=async s=>{const u=s.target.result,l=await Ke().fromString(u);let n=[];p.pathname==="/categories"&&(n=l.map(i=>({_id:i._id,id:i.id,status:i.status,name:JSON.parse(i.name),description:JSON.parse(i.description),parentName:i.parentName,parentId:i.parentId,icon:i.icon}))),p.pathname==="/attributes"&&(n=l.map(i=>({status:i.status,title:JSON.parse(i.title),name:JSON.parse(i.name),variants:JSON.parse(i.variants),option:i.option,type:i.type}))),p.pathname==="/coupons"&&(n=l.map(i=>({title:JSON.parse(i.title),couponCode:i.couponCode,endTime:i.endTime,discountPercentage:i.discountPercentage?JSON.parse(i.discountPercentage):0,minimumAmount:i.minimumAmount?JSON.parse(i.minimumAmount):0,productType:i.productType,logo:i.logo,status:i.status}))),p.pathname==="/customers"&&(n=l.map(i=>({name:i.name,email:i.email,password:i.password,phone:i.phone}))),q(n)},t.readAsText(e);else{Y(e==null?void 0:e.name),z(!0);const s=!!t.readAsBinaryString;t.onload=function(u){const l=u.target.result,n=Qe(l,{type:s?"binary":"array",bookVBA:!0}),i=n.SheetNames[0],te=n.Sheets[i],c=We.sheet_to_json(te);let C=[];p.pathname==="/categories"&&(C=c.map(d=>({_id:d._id,id:d.id,status:d.status,name:JSON.parse(d.name),description:JSON.parse(d.description),parentName:d.parentName,parentId:d.parentId,icon:d.icon}))),p.pathname==="/attributes"&&(C=c.map(d=>({status:d.status,title:JSON.parse(d.title),name:JSON.parse(d.name),variants:JSON.parse(d.variants),option:d.option,type:d.type}))),p.pathname==="/coupons"&&(C=c.map(d=>({title:JSON.parse(d.title),couponCode:d.couponCode,endTime:d.endTime,discountPercentage:d.discountPercentage,minimumAmount:d.minimumAmount,productType:d.productType,logo:d.logo,status:d.status}))),p.pathname==="/customers"&&(C=c.map(d=>({name:d.name,email:d.email,password:d.password?d.password:"null",phone:d.phone?d.phone:"null"}))),q(C)},s?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}},handleSubmitUser:a=>{a.preventDefault(),x(v.current.value)},handleSubmitMyCategory:a=>{a.preventDefault(),J(v.current.value)},handleSubmitForAll:a=>{a.preventDefault(),g(de.current.value)},handleSubmitCoupon:a=>{a.preventDefault(),se(ue.current.value)},handleSubmitOrder:a=>{a.preventDefault(),we(pe.current.value)},handleSubmitCategory:a=>{a.preventDefault(),ne(ee.current.value)},handleSubmitAttribute:a=>{a.preventDefault(),oe(ce.current.value)},handleUploadProducts:()=>{W.length<1?m("Please upload/select csv file first!"):Xe.addAllProducts(W).then(a=>{N(a.message)}).catch(a=>m(a.message))},handleSubmitCountry:a=>{a.preventDefault(),ae(le.current.value)},handleSubmitCurrency:a=>{a.preventDefault(),De(ie.current.value)},handleSubmitShipping:a=>{a.preventDefault(),Ze(fe.current.value)},handleSubmitLanguage:a=>{a.preventDefault(),Le(me.current.value)},handleUploadMultiple:a=>{if(y.length>1){if(p.pathname==="/categories"){f(!0);let t=y.map(s=>j.validate(lt,s));const e=s=>s===!0;t.every(e)?ve.addAllCategory(y).then(s=>{f(!1),_(!0),N(s.message)}).catch(s=>{f(!1),m(s?s.response.data.message:s.message)}):m("Please enter valid data!")}if(p.pathname==="/customers"){f(!0);let t=y.map(s=>j.validate(gt,s));const e=s=>s===!0;t.every(e)?et.addAllCustomers(y).then(s=>{f(!1),_(!0),N(s.message)}).catch(s=>{f(!1),m(s?s.response.data.message:s.message)}):m("Please enter valid data!")}if(p.pathname==="/coupons"){f(!0);let t=y.map(s=>j.validate(ft,s));const e=s=>s===!0;t.every(e)?tt.addAllCoupon(y).then(s=>{f(!1),_(!0),N(s.message)}).catch(s=>{f(!1),m(s?s.response.data.message:s.message)}):m("Please enter valid data!")}if(p.pathname==="/attributes"){f(!0);let t=y.map(s=>j.validate(mt,s));const e=s=>s===!0;t.every(e)?st.addAllAttributes(y).then(s=>{f(!1),_(!0),N(s.message)}).catch(s=>{f(!1),m(s?s.response.data.message:s.message)}):m("Please enter valid data!")}p.pathname==="/languages"&&rt.addAllLanguage(y).then(t=>{_(!0),N(t.message)}).catch(t=>m(t?t.response.data.message:t.message)),p.pathname==="/currencies"&&nt.addAllCurrency(y).then(t=>{_(!0),N(t.message)}).catch(t=>m(t?t.response.data.message:t.message))}else m("Please select a valid .JSON/.CSV/.XLS file first!")},handleRemoveSelectFile:a=>{Y(""),q([]),setTimeout(()=>z(!1),1e3)},userType:X,setUserType:Be}};export{ct as a,ut as i,Et as u};
