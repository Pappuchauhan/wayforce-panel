import{j as e,d as r,u as h,r as p,m as j}from"./index-bXf7bkfr.js";import"./index-cxPaO_Qc.js";import{R as y}from"./index-Xgm0KNEE.js";import{p as u,q as N}from"./Layout-ruJfPJtj.js";import{P as w,I as k}from"./InvoiceForDownload-V-cBRh4K.js";import{u as T}from"./useAsync-diBcFnqK.js";import{S as v}from"./Status-yEO606rK.js";import{O as I}from"./OrderServices-E-OuU2cj.js";import{L as E}from"./Loading-b9-xPAHH.js";import{P as C}from"./PageTitle-ag3IXuSt.js";import{u as O}from"./useUtilsFunction-x7MTCbnv.js";import"./iconBase-FliByv4u.js";import"./tslib.es6-YYMLUA4o.js";import"./index-bW53fTmV.js";import"./httpService-79bAftQe.js";import"./SettingServices-beCL0PQm.js";import"./useDispatch--MV0V2w_.js";const P=({data:t,currency:o,getNumberTwo:n})=>e.jsx(e.Fragment,{children:e.jsx(r.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ",children:e.jsxs(r.TableRow,{className:"dark:border-gray-700 dark:text-gray-400",children:[e.jsx(r.TableCell,{className:"px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left",children:t.startTime}),e.jsx(r.TableCell,{className:"px-6 py-1 whitespace-nowrap font-normal text-gray-500",children:t.endTime}),e.jsx(r.TableCell,{className:"px-6 py-1 whitespace-nowrap font-bold text-center",children:t.workingHours}),e.jsxs(r.TableCell,{className:"px-6 py-1 whitespace-nowrap font-bold text-center",children:[o,n(t.bookedPayment)]}),e.jsxs(r.TableCell,{className:"px-6 py-1 whitespace-nowrap text-right font-bold text-red-500 dark:text-emerald-500",children:[o,n(t.totalPayment)]})]})})}),f="/@/assets/wayforce-logo-55XaaY3V.png",$=()=>{var m,d;const{t}=h(),{mode:o}=p.useContext(r.WindmillContext),{id:n}=j(),x=p.useRef(),{data:s,loading:l,error:c}=T(()=>I.getOrderById(n)),{currency:a,globalSetting:D,showDateTimeFormat:S,showDateFormat:b,getNumberTwo:i}=O();return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:" Invoice "}),e.jsxs("div",{ref:x,className:"bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden",children:[!l&&e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50 dark:border-gray-700 dark:text-gray-300",children:[e.jsxs("h1",{className:"font-bold font-serif text-xl uppercase",children:["Invoice",e.jsxs("p",{className:"text-xs mt-1 text-gray-500",children:["Status",e.jsxs("span",{className:"pl-2 font-medium text-xs capitalize",children:[" ",e.jsx(v,{status:s.orderStatus})]})]})]}),e.jsxs("div",{className:"lg:text-right text-left",children:[e.jsx("h2",{className:"lg:flex lg:justify-end text-lg font-serif font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0",children:o==="dark"?e.jsx("img",{src:f,alt:"Wayforce",width:"110"}):e.jsx("img",{src:f,alt:"Wayforce",width:"110"})}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:["59 Station Rd, Purls Bridge, United Kingdom"," ",e.jsx("br",{}),"8743094991"," ",e.jsx("br",{})," ",e.jsxs("span",{children:[" ","pappuchauhan68@gmail.com"," "]})," ",e.jsx("br",{}),"https://wayforce.in/"]})]})]}),e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between pt-4",children:[e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Invoice Date"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:s==null?void 0:s.date})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"INVOICE NO"}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:["#",s==null?void 0:s.orderId]})]}),e.jsxs("div",{className:"flex flex-col lg:text-right text-left",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"INVOICE TO"}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:[s==null?void 0:s.employerName," ",e.jsx("br",{}),s==null?void 0:s.EmpEmail,e.jsx("span",{className:"ml-2",children:s==null?void 0:s.EmpMobile}),e.jsx("br",{}),(m=s==null?void 0:s.EmpAddressLine1)==null?void 0:m.substring(0,30)," "," ",(d=s==null?void 0:s.EmpAddressLine2)==null?void 0:d.substring(0,30),e.jsx("br",{}),s==null?void 0:s.EmpCity,", ",s==null?void 0:s.EmpCountry,","," ",s==null?void 0:s.EmpPinCode]})]})]})]}),e.jsx("div",{children:l?e.jsx(E,{loading:l}):c?e.jsx("span",{className:"text-center mx-auto text-red-500",children:c}):e.jsx(r.TableContainer,{className:"my-8",children:e.jsxs(r.Table,{children:[e.jsx(r.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(r.TableCell,{children:"START TIME"}),e.jsx(r.TableCell,{children:"END TIME"}),e.jsx(r.TableCell,{className:"text-center",children:"WORKING HOURS"}),e.jsx(r.TableCell,{className:"text-center",children:"BOOKED PAYMENT"}),e.jsx(r.TableCell,{className:"text-right",children:"TOTAL PAYMENT"})]})}),e.jsx(P,{data:s,currency:a,getNumberTwo:i})]})})}),!l&&e.jsx("div",{className:"border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800",children:e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between",children:[e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap",children:[e.jsx("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"PAYMENT METHOD"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block",children:s.paymentMethod})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap",children:[e.jsx("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"GST"}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block",children:[a,0]})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap",children:[e.jsx("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"DISCOUNT"}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block",children:[a,i(s.discount)]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-wrap",children:[e.jsx("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"TOTAL AMOUNT"}),e.jsxs("span",{className:"text-xl font-serif font-bold text-red-500 dark:text-emerald-500 block",children:[a,i(s.totalPayment)]})]})]})})]}),!l&&e.jsxs("div",{className:"mb-4 mt-3 flex justify-between",children:[e.jsx(w,{document:e.jsx(k,{t,data:s,currency:a,getNumberTwo:i,showDateFormat:b}),fileName:"Invoice",children:({blob:A,url:R,loading:g,error:L})=>g?"Loading...":e.jsxs("button",{className:"flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600  w-auto cursor-pointer",children:["Download Invoice",e.jsx("span",{className:"ml-2 text-base",children:e.jsx(u,{})})]})}),e.jsx(y,{trigger:()=>e.jsxs("button",{className:"flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600  w-auto",children:[t("PrintInvoice"),e.jsx("span",{className:"ml-2",children:e.jsx(N,{})})]}),content:()=>x.current,documentTitle:"Invoice"})]})]})};export{$ as default};