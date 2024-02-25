import{u as te,r as g,j as e,d as a,L as ge,S as he}from"./index-bXf7bkfr.js";import{l as je,h as pe,f as ue}from"./Layout-ruJfPJtj.js";import{u as B}from"./useAsync-diBcFnqK.js";import{u as ye}from"./useFilter-e3DUymki.js";import{T as se,D as be,u as ve,M as ie}from"./DrawerButton-lg5Ps63C.js";import{M as Ne}from"./MyCategoryDrawer-v8SsM2nH.js";import{T as fe}from"./TableLoading-tWsXKphU.js";import{S as Ce}from"./Status-yEO606rK.js";import"./index-cxPaO_Qc.js";import{r as c}from"./httpService-79bAftQe.js";import{E as o}from"./Error-PIHhCkC5.js";import{I as m}from"./InputArea-0d0LcQwn.js";import{u as ne}from"./useUserSubmit-T5ntqjSt.js";import{L as d}from"./LabelArea-yLMcEKwy.js";import"./toast-J_gpu8Z1.js";import"./index-2hvPrymD.js";import{I as Z}from"./ImageUpload-f-Jf3r7f.js";import{C as de}from"./ProductServices-Gd1CbPQ6.js";import{D as Se,E as we}from"./EditDeleteButton-eekdXM9q.js";import{A as Te}from"./ActiveInActiveButton-Ea4Er-ZK.js";import{T as Ae}from"./Tooltip-Sv8x7z5D.js";import{N as Le}from"./NotFound-dePuPwWH.js";import{P as Ee}from"./PageTitle-ag3IXuSt.js";import{U as Ie}from"./UserServices-_gsJi_DW.js";import"./iconBase-FliByv4u.js";import"./LanguageServices-AJcmbBg5.js";import"./useUtilsFunction-x7MTCbnv.js";import"./SettingServices-beCL0PQm.js";import"./useDispatch--MV0V2w_.js";import"./SelectLanguageTwo-nmb2k5AQ.js";import"./spinner-R50PTWTV.js";import"./index.esm-3tbPwPzp.js";import"./index-GVm8oTZ5.js";import"./tslib.es6-YYMLUA4o.js";import"./AdminServices-B80tspSM.js";import"./index.prod-ZV7SGkYB.js";const oe={getAllState:async()=>c.get("/statee"),getAllCategories:async()=>c.get("/category/all"),getCategoryById:async r=>c.get(`/category/${r}`),addCategory:async r=>c.post("/category/add",r),addAllCategory:async r=>c.post("/category/add/all",r),updateCategory:async(r,l)=>c.put(`/category/${r}`,l),updateStatus:async(r,l)=>c.put(`/category/status/${r}`,l),deleteCategory:async(r,l)=>c.delete(`/category/${r}`,l),updateManyCategory:async r=>c.patch("/category/update/many",r),deleteManyCategory:async r=>c.patch("/category/delete/many",r)},ce={getCityByStateName:async r=>c.get(`/city/get/getCitiesByStateName/${r}`),getAllCategory:async()=>c.get("/category"),getAllCategories:async()=>c.get("/category/all"),addCategory:async r=>c.post("/category/add",r),addAllCategory:async r=>c.post("/category/add/all",r),updateCategory:async(r,l)=>c.put(`/category/${r}`,l),updateStatus:async(r,l)=>c.put(`/category/status/${r}`,l),deleteCategory:async(r,l)=>c.delete(`/category/${r}`,l),updateManyCategory:async r=>c.patch("/category/update/many",r),deleteManyCategory:async r=>c.patch("/category/delete/many",r)},Be=({id:r})=>{var $,V,f;const{register:l,handleSubmit:U,onSubmit:y,errors:n,imageUrl:C,setImageUrl:k,isSubmitting:S,selectedDate:q,userImage:t,setUserImage:N,panImage:R,setPanImage:G,aadharImage:W,setAadharImage:K,setSelectedDate:Y,handleSelectLanguage:Q,Controller:J,control:w,getValues:x,setValue:b}=ne(r);te();const{data:j,loading:T,error:M}=B(()=>de.getAllCategory()),{data:p,loading:A,error:u}=B(()=>oe.getAllState()),[v,z]=g.useState(x("state")?x("state"):"Goa"),[h,L]=g.useState(null),[D,F]=g.useState(!1),[H,P]=g.useState(null);g.useEffect(()=>{ce.getCityByStateName(v==null?void 0:v.trim()).then(i=>{L(i),F(!1),P(null)}).catch(i=>{console.error("Error loading cities:",i),L(null),F(!1),P(i)})},[v]);const _=i=>{z(i)},X=["English","Spanish","French"];let E=x("spkLanguage");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:r?e.jsx(se,{register:l,title:"Update User",description:"Updated your user necessary information from here"}):e.jsx(se,{register:l,title:"Add User",description:"Add your user necessary information from here "})}),e.jsx(je.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsx(a.Card,{className:"overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:U(y),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:" rounded-lg",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsxs("div",{className:"col-span-4 sm:col-span-2",children:[e.jsx(d,{label:"User Image"}),x("profileImage")!==void 0&&x("profileImage")!=""&&e.jsx("img",{src:x("profileImage"),alt:"profile image",style:{height:"100px"}})]}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(Z,{name:"userImage",onUpload:i=>N(i)})})]}),e.jsx("h2",{className:"text-sm font-semibold mb-2",children:"General Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(d,{label:"User Type"}),e.jsxs(a.Select,{className:"bg-white",name:"userType",...l("userType",{required:"User Type is required!"}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"--Select--"}),e.jsx("option",{value:"Manpower",children:"Manpower"}),e.jsx("option",{value:"Agent",children:"Agent"}),e.jsx("option",{value:"Employer",children:"Employer"})]}),e.jsx(o,{errorName:n.userType})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Full Name"}),e.jsx(m,{register:l,label:"Full Name",name:"name",type:"text"}),e.jsx(o,{errorName:n.name})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Mobile Number"}),e.jsx(m,{register:l,label:"Mobile Number",name:"mobile",type:"text"}),e.jsx(o,{errorName:n.mobile})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Email-id"}),e.jsx(m,{register:l,label:"Email-id",name:"email",type:"text"}),e.jsx(o,{errorName:n.email})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Gender"}),e.jsxs(a.Select,{className:" bg-white",name:"gender",...l("gender",{required:"Gender is required!"}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"--Select--"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Other",children:"Other"})]}),e.jsx(o,{errorName:n.gender})]}),e.jsxs("div",{children:[e.jsx(d,{label:"DOB"}),e.jsx(a.Input,{...l("dpb",{required:!1}),label:"DOB",name:"dob",type:"date",defaultValue:x("dob"),required:!0}),e.jsx(o,{errorName:n.dob})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(d,{label:"Speaking Language"}),e.jsxs(a.Select,{multiple:!0,size:"10",style:{height:"100px"},className:"bg-white",name:"speakingLanguages",...l("speakingLanguages",{required:"Speaking Languages is required!"}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"--Select--"}),X.map((i,I)=>e.jsx("option",{value:i,selected:E==null?void 0:E.includes(i),children:i},i))]}),e.jsx(o,{errorName:n.speakingLanguages})]})]})]}),e.jsxs("div",{className:" rounded-lg mt-5",children:[e.jsx("h2",{className:"text-sm font-semibold mb-2",children:"Address"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(d,{label:"Address Line 1"}),e.jsx(m,{register:l,label:"Address Line 1",name:"addressLine1",type:"text",required:!0}),e.jsx(o,{errorName:n.addressLine1})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Address line 2"}),e.jsx(m,{register:l,label:"Address line 2",name:"addressLine2",type:"text",required:!0}),e.jsx(o,{errorName:n.addressLine2})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Block"}),e.jsx(m,{register:l,label:"Block",name:"block",type:"text",required:!0}),e.jsx(o,{errorName:n.block})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Pin Code"}),e.jsx(m,{register:l,label:"Pin Code",name:"pinCode",type:"text",required:!0}),e.jsx(o,{errorName:n.pinCode})]}),e.jsxs("div",{children:[e.jsx(d,{label:"State"}),e.jsxs(a.Select,{className:"bg-white",name:"state",...l("state"),onChange:i=>_(i.target.value),children:[!A&&Array.isArray(p==null?void 0:p.data)&&(($=p==null?void 0:p.data)==null?void 0:$.map((i,I)=>e.jsx("option",{value:i.state,selected:i.state==x("state"),children:i.state},i._id))),A&&e.jsx("option",{value:"Loading...",children:"Loading..."}),u&&e.jsx("option",{value:"Error loading categories",children:"Error loading categories"})]}),e.jsx(o,{errorName:n.state})]}),e.jsxs("div",{children:[e.jsx(d,{label:"City"}),e.jsxs(a.Select,{className:"bg-white",name:"city",...l("city"),children:[!D&&Array.isArray(h==null?void 0:h.data)&&((V=h==null?void 0:h.data)==null?void 0:V.map((i,I)=>e.jsx("option",{value:i.selectcity,selected:i.selectcity==x("city"),children:i.selectcity},i._id))),D&&e.jsx("option",{value:"Loading...",children:"Loading..."}),H&&e.jsx("option",{value:"Error loading categories",children:"Error loading categories"})]}),e.jsx(o,{errorName:n.city})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Country"}),e.jsx(m,{register:l,label:"Country",name:"country",type:"text",defaultValue:"India"}),e.jsx(o,{errorName:n.country})]})]})]}),e.jsxs("div",{className:" rounded-lg mt-5",children:[e.jsx("h2",{className:"text-sm font-semibold mb-2",children:"Work Details"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(d,{label:"Service Location"}),e.jsx(m,{register:l,label:"Service Location",name:"slAddress",type:"text",required:!0}),e.jsx(o,{errorName:n.serviceLocation})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Latitude"}),e.jsx(m,{register:l,label:"Latitude",name:"lati",type:"text",required:!0}),e.jsx(o,{errorName:n.lati})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Longitude"}),e.jsx(m,{register:l,label:"Longitude",name:"longi",type:"text",required:!0}),e.jsx(o,{errorName:n.longi})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Select Category"}),e.jsxs(a.Select,{className:"bg-white",name:"category",...l("category"),children:[!T&&Array.isArray(j==null?void 0:j.data)&&((f=j==null?void 0:j.data)==null?void 0:f.map((i,I)=>e.jsx("option",{value:i._id,selected:i._id==x("category"),children:i.name},i._id))),T&&e.jsx("option",{value:"Loading...",children:"Loading..."}),M&&e.jsx("option",{value:"Error loading categories",children:"Error loading categories"})]}),e.jsx(o,{errorName:n.category})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Experience"}),e.jsx(m,{register:l,label:"Experience",name:"experience",type:"text",required:!0}),e.jsx(o,{errorName:n.experience})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Min Salary"}),e.jsx(m,{register:l,label:"Min Salary",name:"minSalary",type:"text",required:!0}),e.jsx(o,{errorName:n.minSalary})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Max Salary"}),e.jsx(m,{register:l,label:"Max Salary",name:"maxSalary",type:"text",required:!0}),e.jsx(o,{errorName:n.maxSalary})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Job Type"}),e.jsx(m,{register:l,label:"Job Type",name:"jobType",type:"text",required:!0}),e.jsx(o,{errorName:n.jobType})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(d,{label:"Bio"}),e.jsx(a.Textarea,{className:"border text-sm  block w-full bg-white  border-gray-200",...l("bio",{required:!1}),name:"bio",rows:"4"}),e.jsx(o,{errorName:n.bio})]})]})]}),e.jsxs("div",{className:" rounded-lg mt-5",children:[e.jsx("h2",{className:"text-sm font-semibold mb-2",children:"Documents"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(d,{label:"Pan Card No."}),e.jsx(m,{register:l,label:"Pan Card No.",name:"panCardNumber",type:"text",required:!0}),e.jsx(o,{errorName:n.panCardNumber})]}),e.jsxs("div",{children:[e.jsx(d,{label:"Aadhar No."}),e.jsx(m,{register:l,label:"Aadhar No.",name:"aadharNumber",type:"text",required:!0}),e.jsx(o,{errorName:n.aadharNumber})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"col-span-4 sm:col-span-2",children:[e.jsx(d,{label:"Upload Pan Card"}),x("panImage")!==void 0&&x("panImage")!=""&&e.jsx("img",{src:x("panImage"),alt:"profile image",style:{height:"100px"}})]}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(Z,{name:"panImage",onUpload:i=>G(i)})})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"col-span-4 sm:col-span-2",children:[e.jsx(d,{label:"Upload Aadhar Card"}),x("aadharImage")!==void 0&&x("aadharImage")!=""&&e.jsx("img",{src:x("aadharImage"),alt:"profile image",style:{height:"100px"}})]}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(Z,{name:"aadharImage",onUpload:i=>K(i)})})]})]})]}),e.jsxs("div",{className:" rounded-lg mt-5",children:[e.jsx("h2",{className:"text-sm font-semibold mb-2",children:"Other"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(d,{label:`Wallet (Total Balance: ${x("wallet")})`}),e.jsx(m,{register:l,required:"Wallet",label:"Wallet",name:"addWallet",type:"number"})]}),e.jsxs("div",{children:[e.jsx(d,{label:"is KYC Verified"}),e.jsxs(a.Select,{className:"bg-white",name:"isKyc",...l("isKyc",{required:"User Type is required!"}),children:[e.jsx("option",{value:"No",children:"No"}),e.jsx("option",{value:"Yes",children:"Yes"})]}),e.jsx(o,{errorName:n.aadharNumber})]})]})]})]}),e.jsx(be,{id:r,title:"User",isSubmitting:S})]})})})})]})},Ue=({users:r,lang:l})=>{const{title:U,serviceId:y,handleModalOpen:n,handleUpdate:C,isSubmitting:k,handleResetPassword:S}=ve(),{formattedDate:q}=ne();return e.jsxs(e.Fragment,{children:[e.jsx(Se,{id:y,title:U}),e.jsx(ie,{children:e.jsx(Be,{id:y})}),e.jsx(a.TableBody,{children:r==null?void 0:r.map(t=>{var N;return e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[t!=null&&t.profileImage?e.jsx(a.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:t==null?void 0:t.profileImage,alt:"product"}):e.jsx(a.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"}),e.jsx("div",{children:e.jsx("h2",{className:"text-sm font-medium",children:t==null?void 0:t.name})})]})}),e.jsxs(a.TableCell,{children:[e.jsx("span",{className:"text-sm",children:t.gender})," "]}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:t.mobile})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:t.email})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:(N=t==null?void 0:t.category)==null?void 0:N.name})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:t.userType})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:q(t.dob)})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:t.age})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:t.wallet})}),e.jsx(a.TableCell,{className:"text-center text-xs",children:e.jsx(Ce,{status:t.status})}),e.jsx(a.TableCell,{className:"text-center",children:e.jsx(Te,{id:t==null?void 0:t._id,staff:t,option:"user",status:t.status})}),e.jsx(a.TableCell,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(we,{id:t._id,user:t,isSubmitting:k,handleUpdate:C,handleModalOpen:n,title:t==null?void 0:t.name}),e.jsx("span",{className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600",children:e.jsx(ge,{to:`/user/details/${t._id}`,children:e.jsx(Ae,{id:"view",Icon:pe,title:"View User",bgColor:"#059669"})})})]})})]},t._id)})})]})},ja=()=>{var ae,le,re;const{toggleDrawer:r,lang:l,filter:U,setFilter:y}=g.useContext(he),[n,C]=g.useState(""),[k,S]=g.useState(""),[q,t]=g.useState(""),[N,R]=g.useState(""),[G,W]=g.useState(""),[K,Y]=g.useState(""),[Q,J]=g.useState(""),[w,x]=g.useState("Goa"),[b,j]=g.useState(null),[T,M]=g.useState(!1),[p,A]=g.useState(null),{data:u,loading:v,error:z}=B(()=>de.getAllCategory()),{data:h,loading:L,error:D}=B(()=>oe.getAllState());g.useEffect(()=>{ce.getCityByStateName(w==null?void 0:w.trim()).then(s=>{j(s),M(!1),A(null)}).catch(s=>{console.error("Error loading cities:",s),j(null),M(!1),A(s)})},[w]);const F=async s=>{s.preventDefault(),y(ee(1,101))},{data:H,loading:P,error:_}=B(()=>Ie.getAllUser({userType:n,statusBy:k,categoryBy:q,stateBy:N,cityBy:G,pincodeBy:K,searchBy:Q})),{userRef:X,totalResults:E,resultsPerPage:$,dataTable:V,serviceData:f,handleChangePage:i}=ye(H),{t:I}=te(),xe=()=>{C(" "),S(" "),t(" "),R(" "),W(" "),Y(" "),J(" "),y(ee(1,101))};function ee(s,O){return Math.floor(Math.random()*(O-s)+s)}const me=s=>{x(s),R("stateName")};return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{children:"User"}),e.jsx(ie,{children:e.jsx(Ne,{})}),e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsxs("form",{method:"post",onSubmit:F,children:[e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsxs("div",{children:[e.jsx(a.Label,{children:"User Type"}),e.jsxs(a.Select,{onChange:s=>C(s.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"select user type"}),e.jsx("option",{value:"Employer",children:"Employer"}),e.jsx("option",{value:"Manpower",children:"Manpower"}),e.jsx("option",{value:"Agent",children:"Agent"})]})]}),e.jsxs("div",{children:[e.jsx(a.Label,{children:"Status"}),e.jsx("div",{children:e.jsxs(a.Select,{onChange:s=>S(s.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"select status"}),e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Inactive",children:"Inactive"})]})})]}),e.jsxs("div",{children:[e.jsx(a.Label,{children:"Category"}),e.jsx("div",{children:e.jsxs(a.Select,{onChange:s=>t(s.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"select category"}),!v&&Array.isArray(u==null?void 0:u.data)&&((ae=u==null?void 0:u.data)==null?void 0:ae.map((s,O)=>e.jsx("option",{value:s._id,children:s.name},s._id))),v&&e.jsx("option",{value:"Loading...",children:"Loading..."}),z&&e.jsx("option",{value:"Error loading categories",children:"Error loading categories"})]})})]})]}),e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsxs("div",{children:[e.jsx(a.Label,{children:"State"}),e.jsxs(a.Select,{onChange:s=>me(s.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"select state"}),!L&&Array.isArray(h==null?void 0:h.data)&&((le=h==null?void 0:h.data)==null?void 0:le.map((s,O)=>e.jsx("option",{value:s.state,children:s.state},s._id))),L&&e.jsx("option",{value:"Loading...",children:"Loading..."}),D&&e.jsx("option",{value:"Error loading categories",children:"Error loading categories"})]})]}),e.jsxs("div",{children:[e.jsx(a.Label,{children:"City"}),e.jsx("div",{children:e.jsxs(a.Select,{onChange:s=>W(s.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"select city"}),!T&&Array.isArray(b==null?void 0:b.data)&&((re=b==null?void 0:b.data)==null?void 0:re.map((s,O)=>e.jsx("option",{value:s.selectcity,children:s.selectcity},s._id))),T&&e.jsx("option",{value:"Loading...",children:"Loading..."}),p&&e.jsx("option",{value:"Error loading cities",children:"Error loading cities"})]})})]}),e.jsxs("div",{children:[e.jsx(a.Label,{children:"Enter Pin Code"}),e.jsx("div",{children:e.jsx(a.Input,{onChange:s=>Y(s.target.value),type:"text",name:"city",placeholder:"Search by City Name"})})]})]}),e.jsxs("div",{className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(a.Input,{type:"search",name:"search",onChange:s=>J(s.target.value),placeholder:"Search by name/ email/ phone"})}),e.jsxs("div",{className:"mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(a.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full",children:e.jsx(a.Button,{layout:"outline",onClick:xe,type:"reset",className:"px-4 md:py-1 py-3 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]}),e.jsx("div",{className:"w-full md:w-56 lg:w-56 xl:w-56",children:e.jsxs(a.Button,{onClick:r,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-3",children:e.jsx(ue,{})}),"Add User"]})})]})]})})}),P?e.jsx(fe,{row:12,col:7,width:163,height:20}):_?e.jsx("span",{className:"text-center mx-auto text-red-500",children:_}):(f==null?void 0:f.length)!==0?e.jsxs(a.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(a.TableCell,{children:"Name"}),e.jsx(a.TableCell,{children:"Gender"}),e.jsx(a.TableCell,{children:"Mobile"}),e.jsx(a.TableCell,{children:"Email"}),e.jsx(a.TableCell,{children:"Category"}),e.jsx(a.TableCell,{children:"User Type"}),e.jsx(a.TableCell,{children:"DOB"}),e.jsx(a.TableCell,{children:"Age"}),e.jsx(a.TableCell,{children:"Wallet"}),e.jsx(a.TableCell,{children:"Published"}),e.jsx(a.TableCell,{className:"text-center",children:"Status"}),e.jsx(a.TableCell,{className:"text-right",children:I("StaffActionsTbl")})]})}),e.jsx(Ue,{users:V,lang:l})]}),e.jsx(a.TableFooter,{children:e.jsx(a.Pagination,{totalResults:E,resultsPerPage:$,onChange:i,label:"Table navigation"})})]}):e.jsx(Le,{title:"Sorry, There are no user right now."})]})};export{ja as default};