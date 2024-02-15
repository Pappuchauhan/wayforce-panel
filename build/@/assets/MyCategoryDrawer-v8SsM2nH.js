import{r as l,A as O,S as P,e as R,u as z,j as e,d as I}from"./index-bXf7bkfr.js";import{l as G}from"./Layout-ruJfPJtj.js";import{E as D}from"./Error-PIHhCkC5.js";import{T as A,D as H}from"./DrawerButton-lg5Ps63C.js";import{I as U}from"./InputArea-0d0LcQwn.js";import"./index-cxPaO_Qc.js";import{u as J}from"./index.esm-3tbPwPzp.js";import{M as E}from"./EditDeleteButton-eekdXM9q.js";import{n as k,a as L}from"./toast-J_gpu8Z1.js";import{L as y}from"./LabelArea-yLMcEKwy.js";import"./httpService-79bAftQe.js";import"./index-2hvPrymD.js";import{I as K}from"./ImageUpload-f-Jf3r7f.js";const Q=o=>{const{state:i}=l.useContext(O),{adminInfo:f}=i,{isDrawerOpen:p,closeDrawer:n,setIsUpdate:h,lang:j}=l.useContext(P),[u,b]=l.useState(j||"en"),[S,v]=l.useState({}),[x,m]=l.useState(!1),[c,C]=l.useState("");R();const{register:w,handleSubmit:M,setValue:t,clearErrors:g,formState:{errors:V},getValues:B}=J(),F=async r=>{var d,a;try{m(!0);const s=new FormData;if(s.append("name",r.name),s.append("status",r.status),s.append("price",r.price),s.append("image",c),o){const N=await E.updateCategory(o,s);h(!0),m(!1),k(N.message),n()}else{const N=await E.addCategory(s);h(!0),m(!1),k(N.message),n()}}catch(s){L(s?(a=(d=s==null?void 0:s.response)==null?void 0:d.data)==null?void 0:a.message:s==null?void 0:s.message),m(!1),n()}},T=async()=>{var r,d;try{const a=await E.getCategoryById(o);a&&(v(a),t("name",a.data.name),t("price",a.data.price),t("status",a.data.status),t("image",a.data.image))}catch(a){L(a?(d=(r=a==null?void 0:a.response)==null?void 0:r.data)==null?void 0:d.message:a==null?void 0:a.message)}},q=r=>{b(r),Object.keys(S).length>0&&t("name",S.name[r||"en"])};return l.useEffect(()=>{if(!p){v({}),t("name"),t("price"),t("status"),t("image"),g("name"),g("price"),g("status"),g("image"),b(j),t("language",u);return}o&&T()},[o,t,p,f.email,g]),{register:w,handleSubmit:M,onSubmit:F,language:u,errors:V,isSubmitting:x,handleSelectLanguage:q,categoryImage:c,setCategoryImage:C,getValues:B}},ie=({id:o})=>{const{register:i,handleSubmit:f,onSubmit:p,errors:n,imageUrl:h,setImageUrl:j,isSubmitting:u,selectedDate:b,setSelectedDate:S,handleSelectLanguage:v,categoryImage:x,setCategoryImage:m,getValues:c}=Q(o),{t:C}=z();return l.useEffect(()=>{console.log(x)},[x]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:o?e.jsx(A,{register:i,title:"Update Category",description:C("Updated your category necessary information from here")}):e.jsx(A,{register:i,title:"Add Category",description:"Add your category necessary information from here "})}),e.jsx(G.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsx(I.Card,{className:"overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full",children:e.jsx(I.CardBody,{children:e.jsxs("form",{onSubmit:f(p),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(y,{label:"Category Image"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(K,{name:"image1",onUpload:w=>m(w)}),c("image")!==void 0&&c("image")!=""&&e.jsx("img",{src:c("image"),alt:"category",style:{height:"150px"}})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(y,{label:"Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(U,{register:i,label:"Name",name:"name",type:"text",placeholder:"Category name"}),e.jsx(D,{errorName:n.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(y,{label:"Price"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(U,{register:i,label:"Price",name:"price",type:"text",placeholder:"Category price"}),e.jsx(D,{errorName:n.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(y,{label:"Status"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsxs(I.Select,{name:"status",...i("status",{required:"status is required!"}),children:[e.jsxs("option",{value:"",defaultValue:!0,hidden:!0,children:[" ","Choose Status"," "]}),e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Inactive",children:"Inactive"})]}),e.jsx(D,{errorName:n.status})]})]})]}),e.jsx(H,{id:o,title:"Category",isSubmitting:u})]})})})})]})};export{ie as M};
