import{r as l,j as e}from"./index-bXf7bkfr.js";import{u as x}from"./index-GVm8oTZ5.js";import{m as p}from"./Layout-ruJfPJtj.js";const h=({onUpload:r})=>{const[a,m]=l.useState(null),c=l.useCallback(n=>{const o=n[0];r(o);const s=new FileReader;s.onload=()=>{m(s.result)},s.readAsDataURL(o)},[r]),{getRootProps:i,getInputProps:d,isDragActive:t}=x({onDrop:c});return e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsxs("div",{...i(),className:`border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6 ${t?"bg-gray-200":""}`,children:[e.jsx("input",{...d(),accept:"image/*",className:"hidden"}),e.jsx("span",{className:"mx-auto flex justify-center",children:e.jsx(p,{className:"text-3xl text-emerald-500"})}),e.jsx("p",{className:"text-sm mt-2",children:t?"Drop your images here":"Drag your images here"}),e.jsx("em",{className:"text-xs text-gray-400",children:"(Only *.jpeg, *.webp, and *.png images will be accepted)"})]}),a&&e.jsx("div",{className:"mt-4",children:e.jsx("img",{src:a,alt:"Preview",className:"max-w-xs max-h-xs"})})]})};export{h as I};
