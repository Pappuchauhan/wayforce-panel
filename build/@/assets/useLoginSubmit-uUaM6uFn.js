import{r as l,A as O,k as E,e as I,l as R,b as S}from"./index-tXNXoeRs.js";import{u as k}from"./index.esm-MInxdUYi.js";import{A as i}from"./AdminServices-uOdDQ_SW.js";import{n,a as m}from"./toast-1_nHReMg.js";import{u as v}from"./useDispatch-FcLvS5kM.js";const w=()=>{const d=v(),[h,e]=l.useState(!1),{dispatch:c}=l.useContext(O),f=E(),o=I(),{register:y,handleSubmit:x,formState:{errors:b}}=k();return{onSubmit:({name:A,email:p,verifyEmail:L,password:u,role:N})=>{e(!0);const g=.5;o.pathname==="/login"&&(d(R("globalSetting")),i.loginAdmin({email:p,password:u}).then(s=>{s&&(e(!1),n("Login Success!"),c({type:"USER_LOGIN",payload:s}),S.set("adminInfo",JSON.stringify(s),{expires:g,sameSite:"None",secure:!0}),f.replace("/"))}).catch(s=>{var t,a;m(((a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.message)||(s==null?void 0:s.message)),e(!1)})),o.pathname==="/signup"&&i.registerAdmin({name:A,email:p,password:u,role:N}).then(s=>{s&&(e(!1),n("Register Success!"),c({type:"USER_LOGIN",payload:s}),S.set("adminInfo",JSON.stringify(s),{expires:g,sameSite:"None",secure:!0}),f.replace("/"))}).catch(s=>{var t,a;m(((a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.message)||(s==null?void 0:s.message)),e(!1)}),o.pathname==="/forgot-password"&&i.forgetPassword({verifyEmail:L}).then(s=>{e(!1),n(s.message)}).catch(s=>{var t,a;e(!1),m(((a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.message)||(s==null?void 0:s.message))})},register:y,handleSubmit:x,errors:b,loading:h}};export{w as u};