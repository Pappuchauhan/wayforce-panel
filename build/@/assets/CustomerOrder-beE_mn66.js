import{r as o,S as d,j as e,d as t,m as h,u as j}from"./index-bXf7bkfr.js";import{o as p}from"./Layout-ruJfPJtj.js";import{u as b}from"./useAsync-diBcFnqK.js";import{O as x}from"./OrderServices-E-OuU2cj.js";import{u as C}from"./useFilter-e3DUymki.js";import{P as g}from"./PageTitle-ag3IXuSt.js";import{L as T}from"./Loading-b9-xPAHH.js";import{S as f}from"./Status-yEO606rK.js";import{u as N}from"./useUtilsFunction-x7MTCbnv.js";import{n as P,a as v}from"./toast-J_gpu8Z1.js";import"./iconBase-FliByv4u.js";import"./httpService-79bAftQe.js";import"./ProductServices-Gd1CbPQ6.js";import"./index-cxPaO_Qc.js";import"./LanguageServices-AJcmbBg5.js";import"./SettingServices-beCL0PQm.js";import"./useDispatch--MV0V2w_.js";const O=({id:i,order:s})=>{const{setIsUpdate:c}=o.useContext(d),l=(a,m)=>{x.updateOrder(a,{status:m}).then(n=>{P(n.message),c(!0)}).catch(n=>v(n.message))};return e.jsx(e.Fragment,{children:e.jsxs(t.Select,{onChange:a=>l(i,a.target.value),className:"h-8",children:[e.jsx("option",{value:"status",defaultValue:!0,hidden:!0,children:s==null?void 0:s.status}),e.jsx("option",{defaultValue:(s==null?void 0:s.status)==="Delivered",value:"Delivered",children:"Delivered"}),e.jsx("option",{defaultValue:(s==null?void 0:s.status)==="Pending",value:"Pending",children:"Pending"}),e.jsx("option",{defaultValue:(s==null?void 0:s.status)==="Processing",value:"Processing",children:"Processing"}),e.jsx("option",{defaultValue:(s==null?void 0:s.status)==="Cancel",value:"Cancel",children:"Cancel"})]})})},S=({orders:i})=>{const{showDateTimeFormat:s,getNumberTwo:c,currency:l}=N();return e.jsx(e.Fragment,{children:e.jsx(t.TableBody,{children:i==null?void 0:i.map(a=>{var m,n,r;return e.jsxs(t.TableRow,{children:[e.jsx(t.TableCell,{children:e.jsx("span",{className:"font-semibold uppercase text-xs",children:(m=a==null?void 0:a._id)==null?void 0:m.substring(20,24)})}),e.jsx(t.TableCell,{children:e.jsx("span",{className:"text-sm",children:s(a.createdAt)})}),e.jsx(t.TableCell,{children:e.jsx("span",{className:"text-sm",children:(n=a==null?void 0:a.user_info)==null?void 0:n.address})}),e.jsxs(t.TableCell,{children:[" ",e.jsx("span",{className:"text-sm",children:(r=a.user_info)==null?void 0:r.contact})," "]}),e.jsx(t.TableCell,{children:e.jsx("span",{className:"text-sm font-semibold",children:a.paymentMethod})}),e.jsxs(t.TableCell,{children:[" ",e.jsxs("span",{className:"text-sm font-semibold",children:[l,c(a.total)]})," "]}),e.jsx(t.TableCell,{className:"text-center",children:e.jsx(f,{status:a.status})}),e.jsx(t.TableCell,{className:"text-right",children:e.jsx(O,{id:a._id,order:a})})]},a._id)})})})},z=()=>{const{id:i}=h(),{t:s}=j(),{data:c,loading:l,error:a}=b(()=>x.getOrderCustomer(i)),{handleChangePage:m,totalResults:n,resultsPerPage:r,dataTable:u}=C(c);return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:s("CustomerOrderList")}),l&&e.jsx(T,{loading:l}),!a&&!l&&u.length===0&&e.jsx("div",{className:"w-full bg-white rounded-md dark:bg-gray-800",children:e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("span",{className:"flex justify-center my-30 text-red-500 font-semibold text-6xl",children:e.jsx(p,{})}),e.jsx("h2",{className:"font-medium text-base mt-4 text-gray-600",children:s("CustomerOrderEmpty")})]})}),c.length>0&&!a&&!l?e.jsxs(t.TableContainer,{className:"mb-8",children:[e.jsxs(t.Table,{children:[e.jsx(t.TableHeader,{children:e.jsxs("tr",{children:[e.jsxs(t.TableCell,{children:[" ",s("CustomerOrderId")," "]}),e.jsx(t.TableCell,{children:s("CustomerOrderTime")}),e.jsx(t.TableCell,{children:s("CustomerShippingAddress")}),e.jsxs(t.TableCell,{children:[s("Phone")," "]}),e.jsxs(t.TableCell,{children:[s("CustomerOrderMethod")," "]}),e.jsx(t.TableCell,{children:s("Amount")}),e.jsxs(t.TableCell,{className:"text-center",children:[" ",s("CustomerOrderStatus")," "]}),e.jsx(t.TableCell,{className:"text-center",children:s("CustomerOrderAction")})]})}),e.jsx(S,{orders:u})]}),e.jsx(t.TableFooter,{children:e.jsx(t.Pagination,{totalResults:n,resultsPerPage:r,onChange:m,label:"Table navigation"})})]}):null]})};export{z as default};
