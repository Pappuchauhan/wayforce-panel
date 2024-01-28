import{m as R,r as n,S as U,u as H,j as e,L as k,d as s}from"./index-Lpbe05IJ.js";import{g as V,f as $,d as q,e as z}from"./Layout-E0zCJv-y.js";import{a as G}from"./CategoryTable-jClobpf0.js";import{B as J,C as K}from"./BulkActionDrawer-kaRh0qfd.js";import{D as O}from"./EditDeleteButton-0uGBp5za.js";import{L as Q}from"./Loading-dC46GV-d.js";import{N as W}from"./NotFound-76oDYWbd.js";import{P as X}from"./PageTitle-OfFMKDS4.js";import{u as Y}from"./index-gzY5sSy9.js";import{u as Z}from"./useFilter-lJG91-FU.js";import{u as ee}from"./DrawerButton-5jCKX6Zg.js";import{C as se}from"./ProductServices-y9ORDKWk.js";import{u as te}from"./useUtilsFunction-1L03nbkL.js";import"./iconBase-9eKqCuwM.js";import"./ParentCategory-TQN4LMe5.js";import"./toast-RpwxFr5k.js";import"./index.esm-VPrTnZrZ.js";import"./InputArea-z21zghSD.js";import"./LabelArea-4W0PbWQ4.js";import"./SwitchToggle-Cep5Z76n.js";import"./index.prod-5YAP6x9i.js";import"./Uploader-7zdlL4pL.js";import"./httpService-NO-zZZyR.js";import"./index-4c895vgV.js";import"./tslib.es6-YYMLUA4o.js";import"./SettingServices-GiP1SmAf.js";import"./index-3LsQAbHt.js";import"./LanguageServices-pJX5Surk.js";import"./index-zNyNCIWn.js";import"./spinner-R50PTWTV.js";import"./AdminServices-sLHuluOr.js";import"./Tooltip-gGcpELYQ.js";import"./SelectLanguageTwo-WxBRNe0b.js";import"./useDispatch-40nVW7Rg.js";const Me=()=>{const{id:d}=R(),[c,A]=n.useState([]),[g,v]=n.useState([]),[j,P]=n.useState(!1),[m,x]=n.useState([]),{toggleDrawer:S,lang:b}=n.useContext(U),{handleDeleteMany:F,allId:T,handleUpdateMany:B}=ee(),{data:h,loading:p,error:N}=Y(se.getAllCategory),{showingTranslateValue:D}=te(),{t:r}=H();n.useEffect(()=>{var w,y;const l=(t,o,i=[])=>{for(let a of o){if(a._id===t)return i.concat(a);const f=l(t,a==null?void 0:a.children,i==null?void 0:i.concat(a));if(f)return f}},u=(t,o)=>{var i;return t._id===o?t:(i=t==null?void 0:t.children)==null?void 0:i.reduce((a,f)=>a??u(f,o),void 0)};if(!p){const t=u(h[0],d),o=l(d,(w=h[0])==null?void 0:w.children);((y=t==null?void 0:t.children)==null?void 0:y.length)>0&&(A(t==null?void 0:t.children),v(o))}},[d,p,h,c]);const{totalResults:I,resultsPerPage:E,dataTable:L,serviceData:C,handleChangePage:_}=Z(c),M=()=>{P(!j),x(c==null?void 0:c.map(l=>l._id)),j&&x([])};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:r("CategoryPageTitle")}),e.jsx(O,{ids:T,setIsCheck:x,category:!0}),e.jsx(J,{ids:T,title:"Child Categories",lang:b,data:h,childId:d}),e.jsx("div",{className:"flex items-center pb-4",children:e.jsxs("ol",{className:"flex items-center w-full overflow-hidden font-serif",children:[e.jsx("li",{className:"text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold",children:e.jsx(k,{to:"/categories",children:r("Categories")})}),g==null?void 0:g.map((l,u)=>e.jsxs("span",{className:"flex items-center font-serif",children:[e.jsxs("li",{className:"text-sm mt-[1px]",children:[" ",e.jsx(V,{})," "]}),e.jsx("li",{className:"text-sm pl-1 transition duration-200 ease-in cursor-pointer text-blue-700 hover:text-emerald-500 font-semibold ",children:e.jsx(k,{to:`/categories/${l._id}`,children:D(l==null?void 0:l.name)})})]},u+1))]})}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("div",{className:"flex justify-end items-end",children:[e.jsxs(s.Button,{onClick:S,className:"rounded-md h-12",children:[e.jsx("span",{className:"mr-3",children:e.jsx($,{})}),r("AddCategory")]}),e.jsx("div",{className:"ml-3 w-full md:w-24 lg:w-24 xl:w-24",children:e.jsxs(s.Button,{disabled:m.length<1,onClick:()=>B(m),className:"w-full rounded-md h-12",children:[e.jsx(q,{}),r("BulkAction")]})}),e.jsxs(s.Button,{disabled:m.length<1,onClick:()=>F(m),className:"ml-3 rounded-md h-12 bg-red-500",children:[e.jsx("span",{className:"mr-3",children:e.jsx(z,{})}),r("Delete")]})]})})}),p?e.jsx(Q,{loading:p}):N?e.jsx("span",{className:"text-center mx-auto text-red-500",children:N}):(C==null?void 0:C.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:e.jsx(K,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:M,isChecked:j})}),e.jsx(s.TableCell,{children:r("catIdTbl")}),e.jsx(s.TableCell,{children:r("catIconTbl")}),e.jsx(s.TableCell,{children:r("Name")}),e.jsx(s.TableCell,{children:r("Description")}),e.jsx(s.TableCell,{className:"text-center",children:r("catPublishedTbl")}),e.jsx(s.TableCell,{className:"text-right",children:r("catActionsTbl")})]})}),e.jsx(G,{categories:L,data:h,lang:b,isCheck:m,setIsCheck:x,useParamId:d})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:I,resultsPerPage:E,onChange:_,label:"Table navigation"})})]}):e.jsx(W,{title:"Sorry, There are no categories right now."})]})};export{Me as default};