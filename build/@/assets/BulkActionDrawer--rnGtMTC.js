import{j as e,e as ee,r as u,S as Y,d as D}from"./index-bXf7bkfr.js";import{a as ie}from"./index.prod-ZV7SGkYB.js";import{C as se,P as ae,e as J,A as G,d as X}from"./ProductServices-Gd1CbPQ6.js";import{L as te}from"./LanguageServices-AJcmbBg5.js";import{n as p,a as M}from"./toast-J_gpu8Z1.js";import{R as ce}from"./index-FwM1kITF.js";import{P as de,M as pe,T as Q}from"./ParentCategory-Hw41UZX1.js";import{a as ge,T as me}from"./DrawerButton-lg5Ps63C.js";import{i as ue,l as he}from"./Layout-ruJfPJtj.js";import{E as k}from"./Error-PIHhCkC5.js";import{L as n}from"./LabelArea-yLMcEKwy.js";import{S as A}from"./SwitchToggle-Yz6HZ5pn.js";import{T as Z}from"./TextAreaCom-aeaaayqM.js";import{u as xe}from"./index.esm-3tbPwPzp.js";import{u as je}from"./useUtilsFunction-x7MTCbnv.js";const Fe=({id:h,name:i,type:S,handleClick:v,isChecked:c})=>e.jsx(e.Fragment,{children:e.jsx("input",{id:h,name:i,type:S,onChange:v,checked:c})}),Oe=({id:h,status:i,category:S,currencyStatusName:v})=>{const c=ee(),{setIsUpdate:d}=u.useContext(Y),b=async t=>{var E,I;try{let a;if(i==="show"?a="hide":a="show",c.pathname==="/categories"||S){const l=await se.updateStatus(t,{status:a});d(!0),p(l.message)}if(c.pathname==="/products"){const l=await ae.updateStatus(t,{status:a});d(!0),p(l.message)}if(c.pathname==="/languages"){const l=await te.updateStatus(t,{status:a});d(!0),p(l.message)}if(c.pathname==="/currencies")if(v==="status"){const l=await J.updateEnabledStatus(t,{status:a});d(!0),p(l.message)}else{const l=await J.updateLiveExchangeRateStatus(t,{live_exchange_rates:a});d(!0),p(l.message)}if(c.pathname==="/attributes"){const l=await G.updateStatus(t,{status:a});d(!0),p(l.message)}if(c.pathname===`/attributes/${c.pathname.split("/")[2]}`){const l=await G.updateChildStatus(t,{status:a});d(!0),p(l.message)}if(c.pathname==="/coupons"){const l=await X.updateStatus(t,{status:a});d(!0),p(l.message)}if(c.pathname==="/our-staff"){const l=await X.updateStaffStatus(t,{status:a});d(!0),p(l.message)}}catch(a){M(a?(I=(E=a==null?void 0:a.response)==null?void 0:E.data)==null?void 0:I.message:a==null?void 0:a.message)}};return e.jsx(ie,{onChange:()=>b(h),checked:i==="show",className:"react-switch md:ml-0",uncheckedIcon:e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",width:120,fontSize:14,color:"white",paddingRight:22,paddingTop:1}}),width:30,height:15,handleDiameter:13,offColor:"#E53E3E",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:73,height:"100%",fontSize:14,color:"white",paddingLeft:20,paddingTop:1}})})},fe=(h,i="en",S)=>{const[v,c]=u.useState(""),[d,b]=u.useState([]),t=ee(),[E,I]=u.useState(""),[a,l]=u.useState(!0),[V,w]=u.useState(!0),[x,q]=u.useState([]),[y,O]=u.useState([]),[z,W]=u.useState(!1),[H,N]=u.useState(""),{isBulkDrawerOpen:L,closeBulkDrawer:C,setIsUpdate:T}=u.useContext(Y),{register:U,handleSubmit:F,watch:B,setValue:o,clearErrors:r,formState:{errors:$}}=xe(),K=async P=>{var s,f,g;try{const j={ids:h,categories:x==null?void 0:x.map(m=>m._id),category:(s=y[0])==null?void 0:s._id,productType:[z?"food":"others"],show:P.show,status:a?"show":"hide",tag:JSON.stringify(d)},_={ids:h,status:a?"show":"hide"},R={ids:h,enabled:a?"show":"hide",live_exchange_rates:V?"show":"hide"},re={ids:h,parentId:E,description:P.description,parentName:H,status:a?"show":"hide"},le={ids:h,option:P.option,status:a?"show":"hide"},oe={ids:h,currentId:S,changeId:P.groupName,status:a?"show":"hide"},ne={ids:h,startTime:P.startTime,endTime:P.endTime,status:a?"show":"hide"};if(t.pathname==="/products"){const m=await ae.updateManyProducts(j);T(!0),p(m.message),C()}if(t.pathname==="/coupons"){const m=await X.updateManyCoupons(ne);T(!0),p(m.message),C()}if(t.pathname==="/languages"){const m=await te.updateManyLanguage(_);T(!0),p(m.message),C()}if(t.pathname==="/currencies"){const m=await J.updateManyCurrencies(R);T(!0),p(m.message),C()}if(t.pathname==="/categories"||t.pathname===`/categories/${S}`){const m=await se.updateManyCategory(re);T(!0),p(m.message),C()}if(t.pathname==="/attributes"){const m=await G.updateManyAttribute(le);T(!0),p(m.message),C()}if(t.pathname===`/attributes/${t.pathname.split("/")[2]}`){const m=await G.updateManyChildAttribute(oe);T(!0),p(m.message),C()}}catch(j){M(((g=(f=j==null?void 0:j.response)==null?void 0:f.data)==null?void 0:g.message)||(j==null?void 0:j.message))}};return u.useEffect(()=>{if(!L){o("parent"),o("children"),o("type"),o("show"),o("name"),c(""),b([]),r("parent"),r("children"),r("type"),r("name"),o("name"),o("iso_code"),o("call_prefix"),o("currency"),o("zone"),r("name"),r("iso_code"),r("call_prefix"),r("currency"),r("zone"),r("status"),o("name"),o("iso_code"),o("country"),o("zone"),o("description"),r("name"),r("iso_code"),r("country"),r("zone"),r("status"),r("show"),r("description"),O([]),q([]);return}},[o,L,r]),u.useEffect(()=>{c(B("children"))},[B,v]),{register:U,watch:B,handleSubmit:F,onSubmit:K,errors:$,tag:d,setTag:b,published:a,setPublished:l,published2:V,setPublished2:w,checked:E,setChecked:I,selectedCategory:x,setSelectedCategory:q,defaultCategory:y,setDefaultCategory:O,selectCategoryName:H,setSelectCategoryName:N,isFoodItem:z,setIsFoodItem:W}},Le=({ids:h,title:i,lang:S,data:v,childId:c,attributes:d,isCheck:b})=>{const{toggleBulkDrawer:t,isBulkDrawerOpen:E,closeBulkDrawer:I}=u.useContext(Y),{showingTranslateValue:a}=je(),{tag:l,setTag:V,published:w,register:x,onSubmit:q,errors:y,checked:O,setChecked:z,resetRefTwo:W,handleSubmit:H,setPublished:N,selectedCategory:L,setSelectedCategory:C,defaultCategory:T,setDefaultCategory:U,selectCategoryName:F,setSelectCategoryName:B}=fe(h,S,c),o={motionName:"node-motion",motionAppear:!1,onAppearStart:s=>({height:0}),onAppearActive:s=>({height:s.scrollHeight}),onLeaveStart:s=>({height:s.offsetHeight}),onLeaveActive:()=>({height:0})},r=s=>{let f=[];for(let g of s)f.push({title:a(g==null?void 0:g.name),key:g._id,children:g.children.length>0&&r(g.children)});return f},$=(s,f)=>{var g;return s._id===f?s:(g=s==null?void 0:s.children)==null?void 0:g.reduce((j,_)=>j??$(_,f),void 0)},K=s=>{var g,j;const f=b==null?void 0:b.find(_=>_===s);if((b==null?void 0:b.length)===((j=(g=v[0])==null?void 0:g.children)==null?void 0:j.length))return M("This can't be select as a parent category!");if(f!==void 0)return M("This can't be select as a parent category!");if(s===c)return M("This can't be select as a parent category!");{if(s===void 0)return;z(s);const _=v[0],R=$(_,s);B(a(R==null?void 0:R.name))}},P=`
  .rc-tree-child-tree {
    display: hidden;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`;return e.jsx(e.Fragment,{children:e.jsxs(ge,{open:E,onClose:I,parent:null,level:null,placement:"right",children:[e.jsx("button",{onClick:t,className:"absolute z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center",children:e.jsx(ue,{className:"mx-auto"})}),e.jsxs("div",{className:"flex flex-col w-full h-full justify-between",children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:e.jsx(me,{title:`Update Selected ${i}`,description:`Apply changes to the selected ${i} from the list`})}),e.jsx(he.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:H(q),className:"block",children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32",children:[i==="Products"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Categorys"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(de,{lang:S,selectedCategory:L,setSelectedCategory:C,setDefaultCategory:U})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Default Category"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(pe,{displayValue:"name",isObject:!0,singleSelect:!0,ref:W,hidePlaceholder:!0,onKeyPressFn:function(){},onRemove:function(){},onSearch:function(){},onSelect:s=>U(s),selectedValues:T,options:L,placeholder:"Default Category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(A,{handleProcess:N,processOption:w}),e.jsx(k,{errorName:y.status})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Product Tags"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(ce,{placeholder:"Product Tag (Write then press enter to add new tag )",tags:l,onChange:s=>V(s)})})]})]}),i==="Coupons"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Start Time"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{...x("startTime",{required:"Coupon Validation Start Time"}),label:"Coupon Validation Start Time",name:"startTime",type:"datetime-local",placeholder:"Start Time"}),e.jsx(k,{errorName:y.startTime})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"End Time"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{...x("endTime",{required:"Coupon Validation End Time"}),label:"Coupon Validation End Time",name:"endTime",type:"datetime-local",placeholder:"End Time"}),e.jsx(k,{errorName:y.endTime})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(A,{handleProcess:N,processOption:w}),e.jsx(k,{errorName:y.published})]})]})]}),i==="Languages"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(A,{title:"",processOption:w,handleProcess:N})})]})}),i==="Currencies"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Enabled"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(A,{title:"",processOption:w,handleProcess:N})})]})}),i==="Categories"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Description"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Z,{required:!0,register:x,label:"Description",name:"description",type:"text",placeholder:"Category Description"}),e.jsx(k,{errorName:y.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Parent Category"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{readOnly:!0,...x("parent",{required:!1}),name:"parent",value:F||"Home",placeholder:"parent category",type:"text"}),e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx(Q,{treeData:r(v),selectedKeys:[O],onSelect:s=>K(s[0]),motion:o,animation:"slide-up"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(A,{title:"",processOption:w,handleProcess:N})})]})]}),i==="Child Categories"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Description"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Z,{required:!0,register:x,label:"Description",name:"description",type:"text",placeholder:"Category Description"}),e.jsx(k,{errorName:y.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Parent Category"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{readOnly:!0,...x("parent",{required:!1}),name:"parent",value:F||"Home",placeholder:"parent category",type:"text"}),e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx(Q,{treeData:r(v),selectedKeys:[O],onSelect:s=>K(s[0]),motion:o,animation:"slide-up"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(A,{title:"",processOption:w,handleProcess:N})})]})]}),i==="Attributes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Options"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsxs(D.Select,{name:"option",...x("option",{required:"Option is required!"}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"Select type"}),e.jsx("option",{value:"Dropdown",children:"Dropdown"}),e.jsx("option",{value:"Radio",children:"Radio"})]}),e.jsx(k,{errorName:y.option})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(A,{title:"",processOption:w,handleProcess:N})})]})]}),i==="Attribute Value(s)"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Change Attribute Group"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsxs(D.Select,{name:"groupName",...x("groupName",{required:!1}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"Select Attribute Group"}),d==null?void 0:d.map((s,f)=>e.jsx("option",{value:s._id,children:a(s==null?void 0:s.name)},f+1))]}),e.jsx(k,{errorName:y.groupName})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(n,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(A,{title:"",processOption:w,handleProcess:N})})]})]})]}),e.jsxs("div",{className:"fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(D.Button,{onClick:t,className:" text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700",layout:"outline",children:"Cancel"})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(D.Button,{type:"submit",className:"h-12 w-full",children:[" ","Bulk Update ",i]})})]})]})})]})]})})};export{Le as B,Fe as C,Oe as S};
