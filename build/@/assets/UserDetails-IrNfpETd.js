import{j as e,d as s,L as u,u as w,r as g,m as v}from"./index-bXf7bkfr.js";import"./index-cxPaO_Qc.js";import"./index-Xgm0KNEE.js";import"./InvoiceForDownload-V-cBRh4K.js";import{u as h}from"./useAsync-diBcFnqK.js";import{S as T}from"./Status-yEO606rK.js";import{U as C}from"./UserServices-_gsJi_DW.js";import{O as S}from"./OrderServices-E-OuU2cj.js";import{L}from"./Loading-b9-xPAHH.js";import{P as O}from"./PageTitle-ag3IXuSt.js";import{u as P}from"./useUtilsFunction-x7MTCbnv.js";import{h as D}from"./Layout-ruJfPJtj.js";import{T as U}from"./Tooltip-Sv8x7z5D.js";import{u as E}from"./useUserSubmit-T5ntqjSt.js";import"./tslib.es6-YYMLUA4o.js";import"./index-bW53fTmV.js";import"./httpService-79bAftQe.js";import"./SettingServices-beCL0PQm.js";import"./useDispatch--MV0V2w_.js";import"./iconBase-FliByv4u.js";import"./index.esm-3tbPwPzp.js";import"./toast-J_gpu8Z1.js";const F=({data:t,currency:r})=>e.jsx(e.Fragment,{children:e.jsx(s.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ",children:t==null?void 0:t.map((a,l)=>e.jsxs(s.TableRow,{className:"dark:border-gray-700 dark:text-gray-400",children:[e.jsxs(s.TableCell,{className:"px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left",children:[l+1,"."," "]}),e.jsx(s.TableCell,{className:"px-6 py-1 whitespace-nowrap font-normal text-gray-500",children:a.orderId}),e.jsxs(s.TableCell,{className:"px-6 py-1 whitespace-nowrap font-bold text-center",children:[a.bookedPayment," "]}),e.jsx(s.TableCell,{className:"px-6 py-1 whitespace-nowrap font-bold text-center",children:a.workingHours}),e.jsx(s.TableCell,{className:"px-6 py-1 whitespace-nowrap text-right font-bold   dark:text-green-500",children:a.orderStatus}),e.jsx(s.TableCell,{className:"px-6 py-1 whitespace-nowrap text-right font-bold dark:text-green-500",children:a.paymentStatus}),e.jsx(s.TableCell,{className:"px-6 py-1 whitespace-nowrap text-right font-bold dark:text-green-500",children:e.jsx("span",{className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600",children:e.jsx(u,{to:`/order/details/${a._id}`,children:e.jsx(U,{id:"view",Icon:D,title:"View Order",bgColor:"#059669"})})})})]},l))})}),de=()=>{var c,o,n,m,i,b,f,p;const{t}=w();g.useContext(s.WindmillContext);const{id:r}=v();g.useRef(),console.log(r);const{data:a,loading:l,error:x}=h(()=>C.getUserById(r)),{data:y,cstLoading:d,cstError:I}=h(()=>S.getOrderCustomer(r)),{currency:j,globalSetting:k,showDateTimeFormat:A,showDateFormat:B,getNumberTwo:W}=P(),{formattedDate:N}=E();return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:" User Details "}),e.jsx("div",{className:"bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden",children:!l&&e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300",children:e.jsxs("h1",{className:"font-bold font-serif text-xl uppercase",children:["General Information"," "," ",e.jsx("span",{className:"font-normal font-serif text-xl lowercase text-green-500",children:(c=a==null?void 0:a.data)==null?void 0:c.userType})]})}),e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between pt-4",children:[e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Name"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.name})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Email"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.email})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Phone"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.mobile})]}),e.jsxs("div",{className:"flex flex-col lg:text-right text-left",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Wallet"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.wallet})]}),e.jsxs("div",{className:"flex flex-col lg:text-right text-left",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Status"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:e.jsx(T,{status:a.data.status})})]})]}),e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between pt-4",children:[e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Age"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.age})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Gender"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.gender})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"DOB"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:N(a.data.dob)})]}),e.jsxs("div",{className:"flex flex-col lg:text-right text-left",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Pan Card Number"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.panCardNumber})]}),e.jsxs("div",{className:"flex flex-col lg:text-right text-left",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Aadhar Number"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.aadharNumber})]})]}),e.jsx("div",{className:"mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300",children:e.jsx("h1",{className:"font-bold font-serif text-xl uppercase",children:"Work Details"})}),e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between pt-4",children:[e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Experience"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.experience})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Address"}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:[(o=a==null?void 0:a.address)==null?void 0:o.addressLine1,e.jsx("br",{}),(n=a==null?void 0:a.address)==null?void 0:n.addressLine2,e.jsx("br",{}),(m=a==null?void 0:a.address)==null?void 0:m.block,e.jsx("br",{}),(i=a==null?void 0:a.address)==null?void 0:i.pinCode,e.jsx("br",{}),(b=a==null?void 0:a.address)==null?void 0:b.state,e.jsx("br",{}),(f=a==null?void 0:a.address)==null?void 0:f.city,e.jsx("br",{}),(p=a==null?void 0:a.address)==null?void 0:p.country,e.jsx("br",{})]})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Min Salary"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.minSalary})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Max Salary"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.maxSalary})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Job Type"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.jobType})]})]}),e.jsx("div",{className:"mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 dark:text-gray-300",children:e.jsx("h1",{className:"font-bold font-serif text-xl uppercase",children:"Other"})}),e.jsxs("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between pt-4",children:[e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Bio"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.bio})]}),e.jsxs("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[e.jsx("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Speaking Language"}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:a.data.speakingLanguage.join(", ")})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-6 flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 dark:text-gray-300",children:e.jsx("h1",{className:"font-bold font-serif text-xl uppercase",children:"Order List"})}),d?e.jsx(L,{loading:d}):x?e.jsx("span",{className:"text-center mx-auto text-red-500",children:x}):e.jsx(s.TableContainer,{className:"my-8 overflow-y-scroll",style:{"max-height":"400px"},children:e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:t("Sr")}),e.jsx(s.TableCell,{children:"OrderId"}),e.jsx(s.TableCell,{children:"Total Payment"}),e.jsx(s.TableCell,{children:"Working Hours"}),e.jsx(s.TableCell,{children:"Status"}),e.jsx(s.TableCell,{children:"Payment Status"}),e.jsx(s.TableCell,{children:"#"})]})}),e.jsx(F,{data:y,currency:j,globalSetting:k})]})})]})]})})]})};export{de as default};
