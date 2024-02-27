import{j as e,d as r,m as v,u as B,r as f,S as F}from"./index-tXNXoeRs.js";import{u as A}from"./useAsync-mFMgt6Cb.js";import{u as E}from"./useFilter-8scIczCo.js";import{u as I,P as O}from"./ProductDrawer-VOBivU6m.js";import{u as _,M as D}from"./DrawerButton-F3DRAt7t.js";import{P as L}from"./ProductServices-dm5sYQJF.js";import{u as C}from"./useUtilsFunction-cpByHX2w.js";import{L as R}from"./Loading-APR6Rx1L.js";import{P as k}from"./PageTitle-jIYcOIh7.js";import"./httpService-W4D8ylqE.js";import"./index-GA65FgQZ.js";import"./LanguageServices-fZF5pM4d.js";import"./toast-1_nHReMg.js";import"./index-Z50dg0F-.js";import"./Tree-8U4K9iEM.js";import"./Layout-7PXJC5ix.js";import"./iconBase-2BF9gXMP.js";import"./Error-02VYyjzt.js";import"./InputArea-6evCb6Ca.js";import"./LabelArea-ysbP6H95.js";import"./InputValue-dhwFV5Zg.js";import"./index.esm-MInxdUYi.js";import"./Uploader-HHoYCzDA.js";import"./index-sWrY0pZa.js";import"./tslib.es6-YYMLUA4o.js";import"./SettingServices-U-Kr69tQ.js";import"./index-vevPY6Xp.js";import"./ParentCategory-suav6tTG.js";import"./Tooltip-tbnP4Kxc.js";import"./index.prod-zJvzKw6K.js";import"./SelectLanguageTwo-ekPVoEE3.js";import"./spinner-R50PTWTV.js";import"./useDispatch-FcLvS5kM.js";const V=({variants:n,variantTitle:l})=>{const{showingTranslateValue:h,currency:c,getNumberTwo:a}=C();return e.jsx(e.Fragment,{children:e.jsx(r.TableBody,{children:n==null?void 0:n.map((t,x)=>{var s;return e.jsxs(r.TableRow,{children:[e.jsx(r.TableCell,{className:"font-semibold uppercase text-xs",children:x+1}),e.jsx(r.TableCell,{children:e.jsx("div",{className:"flex items-center",children:t.image?e.jsx(r.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:t.image,alt:"product"}):e.jsx(r.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})})}),e.jsx(r.TableCell,{children:e.jsxs("div",{className:"flex flex-col text-sm",children:[e.jsx("span",{children:(s=l==null?void 0:l.map(i=>{var p,u;const d=(p=i==null?void 0:i.variants)==null?void 0:p.filter(m=>(m==null?void 0:m.name)!=="All"),o=(u=d==null?void 0:d.find(m=>m._id===t[i==null?void 0:i._id]))==null?void 0:u.name;return o===void 0?o==null?void 0:o.en:h(o)}))==null?void 0:s.filter(Boolean).join(" ")}),t.productId&&e.jsxs("span",{className:"text-xs text-gray-500",children:["(",t.productId,")"]})]})}),e.jsx(r.TableCell,{className:"font-semibold uppercase text-xs",children:t.sku}),e.jsx(r.TableCell,{className:"font-semibold uppercase text-xs",children:t.barcode}),e.jsxs(r.TableCell,{className:"font-semibold uppercase text-xs",children:[c,a(t.originalPrice)]}),e.jsxs(r.TableCell,{className:"font-semibold uppercase text-xs",children:[c,a(t.price)]}),e.jsx(r.TableCell,{className:"font-semibold uppercase text-xs",children:t.quantity})]},x+1)})})})},be=()=>{var b,y,N,T;const{id:n}=v(),{t:l}=B(),{handleUpdate:h}=_(),{attribue:c}=I(n),[a,t]=f.useState([]),{lang:x}=f.useContext(F),{data:s,loading:i}=A(()=>L.getProductById(n)),{currency:d,showingTranslateValue:o,getNumberTwo:p}=C(),{handleChangePage:u,totalResults:m,resultsPerPage:P,dataTable:w}=E(s==null?void 0:s.variants);return f.useEffect(()=>{if(!i){const g=Object.keys(Object.assign({},...s==null?void 0:s.variants)),j=c==null?void 0:c.filter(S=>g.includes(S._id));t(j)}},[c,s==null?void 0:s.variants,i,x]),console.log("product",s),e.jsxs(e.Fragment,{children:[e.jsx(D,{product:!0,children:e.jsx(O,{id:n})}),e.jsx(k,{children:l("ProductDetails")}),i?e.jsx(R,{loading:i}):e.jsx("div",{className:"inline-block overflow-y-auto h-full align-middle transition-all transform",children:e.jsxs("div",{className:"flex flex-col lg:flex-row md:flex-row w-full overflow-hidden",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center justify-center h-auto",children:s!=null&&s.image[0]?e.jsx("img",{src:s==null?void 0:s.image[0],alt:"product",className:"h-64 w-64"}):e.jsx("img",{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"})}),e.jsxs("div",{className:"w-full flex flex-col p-5 md:p-8 text-left",children:[e.jsxs("div",{className:"mb-5 block ",children:[e.jsx("div",{className:"font-serif font-semibold py-1 text-sm",children:e.jsxs("p",{className:"text-sm text-gray-500 pr-4",children:[l("Status"),":"," ",s.status==="show"?e.jsx("span",{className:"text-emerald-400",children:l("ThisProductShowing")}):e.jsx("span",{className:"text-red-400",children:l("ThisProductHidden")})]})}),e.jsx("h2",{className:"text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400",children:o(s==null?void 0:s.title)}),e.jsxs("p",{className:"uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm",children:[l("Sku")," :"," ",e.jsx("span",{className:"font-bold text-gray-500 dark:text-gray-500",children:s==null?void 0:s.sku})]})]}),e.jsx("div",{className:"font-serif product-price font-bold dark:text-gray-400",children:e.jsxs("span",{className:"inline-block text-2xl",children:[d,p((b=s==null?void 0:s.prices)==null?void 0:b.price),((y=s==null?void 0:s.prices)==null?void 0:y.discount)>=1&&e.jsxs("del",{className:"text-gray-400 dark:text-gray-500 text-lg pl-2",children:[d,p((N=s==null?void 0:s.prices)==null?void 0:N.originalPrice)]})]})}),e.jsxs("div",{className:"mb-3",children:[(s==null?void 0:s.stock)<=0?e.jsxs(r.Badge,{type:"danger",children:[e.jsx("span",{className:"font-bold",children:l("StockOut")})," "]}):e.jsxs(r.Badge,{type:"success",children:[" ",e.jsx("span",{className:"font-bold",children:l("InStock")})]}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium pl-4",children:[l("Quantity"),": ",s==null?void 0:s.stock]})]}),e.jsx("p",{className:"text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7",children:o(s==null?void 0:s.description)}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsxs("p",{className:"font-serif font-semibold py-1 text-gray-500 text-sm",children:[e.jsxs("span",{className:"text-gray-700 dark:text-gray-400",children:[l("Category"),":"," "]})," ",o((T=s==null?void 0:s.category)==null?void 0:T.name)]}),e.jsx("div",{className:"flex flex-row",children:JSON.parse(s==null?void 0:s.tag).map((g,j)=>e.jsx("span",{className:"bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300",children:g},j+1))})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{onClick:()=>h(n),className:"cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 ",children:l("EditProduct")})})]})]})}),(s==null?void 0:s.isCombination)&&(a==null?void 0:a.length)>0&&!i&&e.jsxs(e.Fragment,{children:[e.jsx(k,{children:l("ProductVariantList")}),e.jsxs(r.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(r.Table,{children:[e.jsx(r.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(r.TableCell,{children:l("SR")}),e.jsx(r.TableCell,{children:l("Image")}),e.jsx(r.TableCell,{children:l("Combination")}),e.jsx(r.TableCell,{children:l("Sku")}),e.jsx(r.TableCell,{children:l("Barcode")}),e.jsx(r.TableCell,{children:l("OrginalPrice")}),e.jsx(r.TableCell,{children:l("SalePrice")}),e.jsx(r.TableCell,{children:l("Quantity")})]})}),e.jsx(V,{lang:x,variants:w,currency:d,variantTitle:a})]}),e.jsx(r.TableFooter,{children:e.jsx(r.Pagination,{totalResults:m,resultsPerPage:P,onChange:u,label:"Product Page Navigation"})})]})]})]})};export{be as default};
