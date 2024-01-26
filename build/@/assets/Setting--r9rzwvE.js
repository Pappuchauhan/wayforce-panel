import{r as p,S as k,l as w,u as C,j as s,d as u}from"./index-BcEi1spj.js";import{u as E,E as i}from"./index.esm-VqXjgaqn.js";import{P as I}from"./PageTitle-KHFS7yVF.js";import{S as j}from"./SettingServices-CwyljUlX.js";import{a as N,n as y}from"./toast-A2-s9beD.js";import{u as A}from"./useDispatch-x9fh-lwf.js";import{s as P}from"./spinner-R50PTWTV.js";import{I as c}from"./InputAreaTwo-_Xehyk6c.js";import"./httpService-u1VH4XlH.js";const G=m=>{const l=A(),{setIsUpdate:d}=p.useContext(k),[g,x]=p.useState(!0),[b,a]=p.useState(!1),{register:f,handleSubmit:v,setValue:r,formState:{errors:S}}=E(),_=async t=>{var n,e;try{a(!0);const o={name:"globalSetting",setting:{commission:t.commission,shop_name:t.shop_name,address:t.address,company_name:t.company_name,vat_number:t.vat_number,post_code:t.post_code,contact:t.contact,email:t.email,website:t.website}};if(g){const h=await j.addGlobalSetting(o);d(!0),a(!1),y(h.message)}else{const h=await j.updateGlobalSetting(o);d(!0),a(!1),l(w("globalSetting")),y(h.message)}}catch(o){N(((e=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:e.message)||(o==null?void 0:o.message)),a(!1)}};return p.useEffect(()=>{(async()=>{var t,n;try{const e=await j.getGlobalSetting();e&&(x(!1),r("shop_name",e.shop_name),r("address",e.address),r("company_name",e.company_name),r("vat_number",e.vat_number),r("post_code",e.post_code),r("contact",e.contact),r("email",e.email),r("website",e.website),r("commission",e.commission))}catch(e){N(((n=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:n.message)||(e==null?void 0:e.message))}})()},[]),{errors:S,register:f,isSave:g,isSubmitting:b,onSubmit:_,handleSubmit:v}},R=()=>{const{errors:m,register:l,isSave:d,isSubmitting:g,onSubmit:x,handleSubmit:b}=G(),{t:a}=C();return s.jsxs(s.Fragment,{children:[s.jsx(I,{children:a("Setting")}),s.jsx("div",{className:"sm:container md:p-6 p-4 w-full mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:s.jsx("form",{onSubmit:b(x),children:s.jsx("div",{className:"grid grid-cols-12 font-sans",children:s.jsx("div",{className:"col-span-12 md:col-span-12 lg:col-span-12 mr-3",children:s.jsxs("div",{className:"lg:px-6 pt-4 lg:pl-40 lg:pr-40 md:pl-5 md:pr-5 flex-grow scrollbar-hide w-full max-h-full pb-0",children:[s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:"Commission in %"}),s.jsxs("div",{className:"sm:col-span-3",children:[s.jsx(c,{register:l,label:"Commission in %",name:"commission",type:"number",placeholder:"commission"}),s.jsx(i,{errorName:m.commission})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("ShopName")}),s.jsxs("div",{className:"sm:col-span-3",children:[s.jsx(c,{register:l,label:a("ShopName"),name:"shop_name",type:"text",placeholder:a("ShopName")}),s.jsx(i,{errorName:m.shop_name})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("InvoiceCompanyName")}),s.jsxs("div",{className:"sm:col-span-3",children:[s.jsx(c,{register:l,label:a("InvoiceCompanyName"),name:"company_name",type:"text",placeholder:a("InvoiceCompanyName")}),s.jsx(i,{errorName:m.company_name})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("VatNumber")}),s.jsxs("div",{className:"sm:col-span-3",children:[s.jsx(c,{required:!0,register:l,label:"Address",name:"vat_number",type:"text",placeholder:"Vat Number"}),s.jsx(i,{errorName:m.vat_number})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("AddressLine")}),s.jsxs("div",{className:"sm:col-span-3",children:[s.jsx(c,{register:l,label:"Address",name:"address",type:"text",placeholder:"Address"}),s.jsx(i,{errorName:m.address})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("PostCode")}),s.jsxs("div",{className:"sm:col-span-3",children:[s.jsx(c,{required:!0,register:l,label:"Address",name:"post_code",type:"text",placeholder:"Post Code"}),s.jsx(i,{errorName:m.post_code})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("GlobalContactNumber")}),s.jsxs("div",{className:" sm:col-span-3",children:[s.jsx(c,{register:l,label:"Phone",name:"contact",type:"text",placeholder:"Contact Number"}),s.jsx(i,{errorName:m.contact})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("FooterEmail")}),s.jsxs("div",{className:" sm:col-span-3",children:[s.jsx(c,{register:l,label:"Email",name:"email",type:"text",placeholder:"Email"}),s.jsx(i,{errorName:m.email})]})]}),s.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[s.jsx("label",{className:"block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2",children:a("WebSite")}),s.jsxs("div",{className:" sm:col-span-3",children:[s.jsx(c,{required:!0,register:l,label:"Email",name:"website",type:"text",placeholder:"Web Site"}),s.jsx(i,{errorName:m.website})]})]}),s.jsx("div",{className:"flex flex-row-reverse pb-6",children:g?s.jsxs(u.Button,{disabled:!0,type:"button",className:"h-12",children:[s.jsx("img",{src:P,alt:"Loading",width:20,height:10})," ",s.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):s.jsxs(u.Button,{type:"submit",className:"h-12 px-8",children:[" ",d?"Save":"Update"]})})]})})})})})]})};export{R as default};