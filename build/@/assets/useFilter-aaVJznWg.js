import{a as ke,P as Ge,c as He,r as Xe,u as Ke,C as Qe,b as We,d as ve,A as et,e as tt}from"./ProductServices-yLpjgfy_.js";import{d as E}from"./index-yCcgJFTK.js";import{c as fe,g as ge,r as o,e as nt,S as st}from"./index-BcEi1spj.js";import{L as ot}from"./LanguageServices-8I-lsifF.js";import"./httpService-u1VH4XlH.js";import{a as m,n as N}from"./toast-A2-s9beD.js";import{u as at}from"./useUtilsFunction-33Lhhpsl.js";var Se={exports:{}};(function(w,j){(function(P,h){w.exports=h()})(fe,function(){return function(P,h,D){h.prototype.isBetween=function(B,R,g,b){var x=D(B),L=D(R),J=(b=b||"()")[0]==="(",S=b[1]===")";return(J?this.isAfter(x,g):!this.isBefore(x,g))&&(S?this.isBefore(L,g):!this.isAfter(L,g))||(J?this.isBefore(x,g):!this.isAfter(x,g))&&(S?this.isAfter(L,g):!this.isBefore(L,g))}}})})(Se);var rt=Se.exports;const it=ge(rt);var ye={exports:{}};(function(w,j){(function(P,h){w.exports=h()})(fe,function(){return function(P,h,D){h.prototype.isToday=function(){var B="YYYY-MM-DD",R=D();return this.format(B)===R.format(B)}}})})(ye);var dt=ye.exports;const ut=ge(dt),ct={type:"object",properties:{_id:{type:"string"},name:{type:"object"},description:{type:"object"},icon:{type:"string"},status:{type:"string"}},required:["name"]},pt={type:"object",properties:{status:{type:"string"},title:{type:"object"},name:{type:"object"},variants:{type:"array"},option:{type:"string"},type:{type:"string"}},required:["name","title"]},lt={type:"object",properties:{title:{type:"object"},couponCode:{type:"string"},endTime:{type:"string"},discountPercentage:{type:"number"},minimumAmount:{type:"number"},productType:{type:"string"},logo:{type:"string"},discountType:{type:"object"},status:{type:"string"}},required:["title","couponCode","endTime","status"]},mt={type:"object",properties:{name:{type:"string"},email:{type:"string"}},required:["name","email"]},Mt=w=>{const j=new ke({allErrors:!0}),[P,h]=o.useState(""),[D,B]=o.useState(""),[R,g]=o.useState(""),[b,x]=o.useState(""),[L,J]=o.useState(""),[S,te]=o.useState(""),[$,Ce]=o.useState(""),[A,ne]=o.useState(""),[T,se]=o.useState(""),[U,oe]=o.useState(""),[we,he]=o.useState(""),[M,be]=o.useState(""),[k,Le]=o.useState(""),[De,Ae]=o.useState([]),[Te,Oe]=o.useState([]),[Pe,Re]=o.useState([]),[G,xe]=o.useState(""),[H,Ne]=o.useState(""),[V,je]=o.useState(""),[X,Be]=o.useState(1),[_e,ae]=o.useState([]),[Fe,Je]=o.useState(""),[Ue,Me]=o.useState(""),[Ie,Ee]=o.useState(""),[y,q]=o.useState([]),[Ve,Y]=o.useState(""),[qe,z]=o.useState(!1),[K,Ye]=o.useState(""),[Q]=o.useState([]),re=o.useRef(""),ie=o.useRef(""),W=o.useRef(""),de=o.useRef(""),ue=o.useRef(""),v=o.useRef(""),ce=o.useRef(""),pe=o.useRef(""),le=o.useRef(""),ze=o.useRef(""),me=o.useRef("");E.extend(it),E.extend(ut);const c=nt(),{lang:I,setIsUpdate:_,setLoading:f}=o.useContext(st),{globalSetting:F}=at(),O=o.useMemo(()=>{const a=new Date;console.log(w),a.setDate(a.getDate()-V);let t=w==null?void 0:w.map(e=>{const r=new Date(e==null?void 0:e.updatedAt).toLocaleString("en-US",{timeZone:F==null?void 0:F.default_time_zone});return{...e,updatedDate:r==="Invalid Date"?"":r}});if(c.pathname==="/dashboard"){const e=t==null?void 0:t.filter(p=>p.status==="Pending");Ae(e);const r=t==null?void 0:t.filter(p=>p.status==="Processing");Oe(r);const n=t==null?void 0:t.filter(p=>p.status==="Delivered");Re(n);const u=t==null?void 0:t.filter(p=>E(p.createdAt).isToday()),l=u==null?void 0:u.reduce((p,C)=>p+C.total,0);Je(l);const s=t==null?void 0:t.filter(p=>E(p.createdAt).isBetween(new Date().setDate(new Date().getDate()-30),new Date)),i=s==null?void 0:s.reduce((p,C)=>p+C.total,0);Me(i);const ee=t==null?void 0:t.reduce((p,C)=>p+C.total,0);Ee(ee)}return P&&(t=t.filter(e=>e.parent===P)),D==="Low"&&(t=t.sort((e,r)=>e.price<r.price&&-1)),D==="High"&&(t=t.sort((e,r)=>e.price>r.price&&-1)),R&&(t=t.filter(e=>{var r;return(r=e==null?void 0:e.title)==null?void 0:r.toLowerCase().includes(R.toLowerCase())})),T&&(t=t.filter(e=>{var r,n,u;return((n=(r=e==null?void 0:e.title[I])==null?void 0:r.toLowerCase())==null?void 0:n.includes(T==null?void 0:T.toLowerCase()))||((u=e==null?void 0:e.attribute)==null?void 0:u.toLowerCase().includes(T==null?void 0:T.toLowerCase()))})),A&&(t=t.filter(e=>{var r,n,u;return((n=(r=e==null?void 0:e.name[I])==null?void 0:r.toLowerCase())==null?void 0:n.includes(A==null?void 0:A.toLowerCase()))||((u=e==null?void 0:e.category)==null?void 0:u.toLowerCase().includes(A==null?void 0:A.toLowerCase()))})),H&&(t=t.filter(e=>e.role===H)),b&&(t=t.filter(e=>{var r,n,u;return((r=e==null?void 0:e.name[I])==null?void 0:r.toLowerCase().includes(b.toLowerCase()))||((n=e==null?void 0:e.phone)==null?void 0:n.toLowerCase().includes(b.toLowerCase()))||((u=e==null?void 0:e.email)==null?void 0:u.toLowerCase().includes(b.toLowerCase()))})),L&&(console.log(L),t=t.filter(e=>{var r;return(r=e==null?void 0:e.name)==null?void 0:r.toLowerCase().includes(L.toLowerCase())})),S&&(t=t==null?void 0:t.filter(e=>{var r,n,u;return((n=(r=e==null?void 0:e.title[I])==null?void 0:r.toLowerCase())==null?void 0:n.includes(S==null?void 0:S.toLowerCase()))||((u=e==null?void 0:e.couponCode)==null?void 0:u.toLowerCase().includes(S==null?void 0:S.toLowerCase()))})),G&&(t=t.filter(e=>e.status===G)),$&&(t=t.filter(e=>e.contact.toLowerCase().includes($.toLowerCase()))),V&&(t=t.filter(e=>E(e.createdAt).isBetween(a,new Date))),U&&(t=t.filter(e=>{var r,n;return((r=e==null?void 0:e.name)==null?void 0:r.toLowerCase().includes(U.toLowerCase()))||((n=e==null?void 0:e.iso_code)==null?void 0:n.toLowerCase().includes(U.toLowerCase()))})),K&&(t=t.filter(e=>e==null?void 0:e.name.toLowerCase().includes(K.toLowerCase()))),M&&(t=t.filter(e=>e.name.toLowerCase().includes(M.toLowerCase())||e.iso_code.toLowerCase().includes(M.toLowerCase())||e.language_code.toLowerCase().includes(M.toLowerCase()))),k&&(t=t.filter(e=>e.iso_code.toLowerCase().includes(k.toLowerCase()))),t},[V,w,c.pathname,P,D,R,T,A,H,b,S,G,$,U,K,M,k,v,L,F==null?void 0:F.default_time_zone,I]),Z=20,Ze=O==null?void 0:O.length,$e=a=>{Be(a)};return o.useEffect(()=>{ae(O==null?void 0:O.slice((X-1)*Z,X*Z))},[O,X,Z]),{userRef:W,searchRef:ie,couponRef:de,orderRef:ue,categoryRef:v,attributeRef:ce,pending:De,processing:Te,delivered:Pe,todayOrder:Fe,monthlyOrder:Ue,totalOrder:Ie,setFilter:h,setSortedField:B,setStatus:xe,setRole:Ne,time:V,zone:we,setTime:je,taxRef:ze,setZone:he,filename:Ve,countryRef:pe,dataTable:_e,serviceData:O,country:U,setSearchText:g,setCountry:oe,isDisabled:qe,languageRef:le,currencyRef:re,shippingRef:me,setSearchUser:x,setSearchMyCategory:J,setDataTable:ae,setCategoryType:ne,handleChangePage:$e,totalResults:Ze,resultsPerPage:Z,handleOnDrop:a=>{for(let t=0;t<a.length;t++)Q.push(a[t].data)},setSearchCoupon:te,setAttributeTitle:se,handleSelectFile:a=>{var r;a.preventDefault();const t=new FileReader,e=(r=a.target)==null?void 0:r.files[0];if(e&&e.type==="application/json")Y(e==null?void 0:e.name),z(!0),t.readAsText(e,"UTF-8"),t.onload=n=>{let u=JSON.parse(n.target.result),l=[];c.pathname==="/categories"&&(l=u.map(s=>({_id:s._id,id:s.id,status:s.status,name:s.name,description:s.description,parentName:s.parentName,parentId:s.parentId,icon:s.icon}))),c.pathname==="/attributes"&&(l=u.map(s=>({_id:s._id,status:s.status,title:s.title,name:s.name,variants:s.variants,option:s.option,type:s.type}))),c.pathname==="/coupons"&&(l=u.map(s=>({title:s.title,couponCode:s.couponCode,endTime:s.endTime,discountPercentage:s.discountPercentage,minimumAmount:s.minimumAmount,productType:s.productType,logo:s.logo,discountType:s.discountType,status:s.status}))),c.pathname==="/customers"&&(l=u.map(s=>({name:s.name,email:s.email,password:s.password,phone:s.phone}))),q(l)};else if(e&&e.type==="text/csv")Y(e==null?void 0:e.name),z(!0),t.onload=async n=>{const u=n.target.result,l=await He().fromString(u);let s=[];c.pathname==="/categories"&&(s=l.map(i=>({_id:i._id,id:i.id,status:i.status,name:JSON.parse(i.name),description:JSON.parse(i.description),parentName:i.parentName,parentId:i.parentId,icon:i.icon}))),c.pathname==="/attributes"&&(s=l.map(i=>({status:i.status,title:JSON.parse(i.title),name:JSON.parse(i.name),variants:JSON.parse(i.variants),option:i.option,type:i.type}))),c.pathname==="/coupons"&&(s=l.map(i=>({title:JSON.parse(i.title),couponCode:i.couponCode,endTime:i.endTime,discountPercentage:i.discountPercentage?JSON.parse(i.discountPercentage):0,minimumAmount:i.minimumAmount?JSON.parse(i.minimumAmount):0,productType:i.productType,logo:i.logo,status:i.status}))),c.pathname==="/customers"&&(s=l.map(i=>({name:i.name,email:i.email,password:i.password,phone:i.phone}))),q(s)},t.readAsText(e);else{Y(e==null?void 0:e.name),z(!0);const n=!!t.readAsBinaryString;t.onload=function(u){const l=u.target.result,s=Xe(l,{type:n?"binary":"array",bookVBA:!0}),i=s.SheetNames[0],ee=s.Sheets[i],p=Ke.sheet_to_json(ee);let C=[];c.pathname==="/categories"&&(C=p.map(d=>({_id:d._id,id:d.id,status:d.status,name:JSON.parse(d.name),description:JSON.parse(d.description),parentName:d.parentName,parentId:d.parentId,icon:d.icon}))),c.pathname==="/attributes"&&(C=p.map(d=>({status:d.status,title:JSON.parse(d.title),name:JSON.parse(d.name),variants:JSON.parse(d.variants),option:d.option,type:d.type}))),c.pathname==="/coupons"&&(C=p.map(d=>({title:JSON.parse(d.title),couponCode:d.couponCode,endTime:d.endTime,discountPercentage:d.discountPercentage,minimumAmount:d.minimumAmount,productType:d.productType,logo:d.logo,status:d.status}))),c.pathname==="/customers"&&(C=p.map(d=>({name:d.name,email:d.email,password:d.password?d.password:"null",phone:d.phone?d.phone:"null"}))),q(C)},n?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}},handleSubmitUser:a=>{a.preventDefault(),x(W.current.value)},handleSubmitMyCategory:a=>{a.preventDefault(),J(W.current.value)},handleSubmitForAll:a=>{a.preventDefault(),g(ie.current.value)},handleSubmitCoupon:a=>{a.preventDefault(),te(de.current.value)},handleSubmitOrder:a=>{a.preventDefault(),Ce(ue.current.value)},handleSubmitCategory:a=>{a.preventDefault(),ne(v.current.value)},handleSubmitAttribute:a=>{a.preventDefault(),se(ce.current.value)},handleUploadProducts:()=>{Q.length<1?m("Please upload/select csv file first!"):Ge.addAllProducts(Q).then(a=>{N(a.message)}).catch(a=>m(a.message))},handleSubmitCountry:a=>{a.preventDefault(),oe(pe.current.value)},handleSubmitCurrency:a=>{a.preventDefault(),Le(re.current.value)},handleSubmitShipping:a=>{a.preventDefault(),Ye(me.current.value)},handleSubmitLanguage:a=>{a.preventDefault(),be(le.current.value)},handleUploadMultiple:a=>{if(y.length>1){if(c.pathname==="/categories"){f(!0);let t=y.map(n=>j.validate(ct,n));const e=n=>n===!0;t.every(e)?Qe.addAllCategory(y).then(n=>{f(!1),_(!0),N(n.message)}).catch(n=>{f(!1),m(n?n.response.data.message:n.message)}):m("Please enter valid data!")}if(c.pathname==="/customers"){f(!0);let t=y.map(n=>j.validate(mt,n));const e=n=>n===!0;t.every(e)?We.addAllCustomers(y).then(n=>{f(!1),_(!0),N(n.message)}).catch(n=>{f(!1),m(n?n.response.data.message:n.message)}):m("Please enter valid data!")}if(c.pathname==="/coupons"){f(!0);let t=y.map(n=>j.validate(lt,n));const e=n=>n===!0;t.every(e)?ve.addAllCoupon(y).then(n=>{f(!1),_(!0),N(n.message)}).catch(n=>{f(!1),m(n?n.response.data.message:n.message)}):m("Please enter valid data!")}if(c.pathname==="/attributes"){f(!0);let t=y.map(n=>j.validate(pt,n));const e=n=>n===!0;t.every(e)?et.addAllAttributes(y).then(n=>{f(!1),_(!0),N(n.message)}).catch(n=>{f(!1),m(n?n.response.data.message:n.message)}):m("Please enter valid data!")}c.pathname==="/languages"&&ot.addAllLanguage(y).then(t=>{_(!0),N(t.message)}).catch(t=>m(t?t.response.data.message:t.message)),c.pathname==="/currencies"&&tt.addAllCurrency(y).then(t=>{_(!0),N(t.message)}).catch(t=>m(t?t.response.data.message:t.message))}else m("Please select a valid .JSON/.CSV/.XLS file first!")},handleRemoveSelectFile:a=>{Y(""),q([]),setTimeout(()=>z(!1),1e3)}}};export{ut as a,it as i,Mt as u};
