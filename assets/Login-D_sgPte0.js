import{k as w,m as S,l as I,r as o,j as e,L as B,B as a}from"./index-Bf4jx_xy.js";import{b as T,c as h,a as m}from"./index.es-BH78Th98.js";import{u as P}from"./userService-DXzYnLiy.js";import{C as d,a as p}from"./CRow-DIxyu8A3.js";import{C as U}from"./CCardGroup-DLSBLAsa.js";import{C as u,a as g}from"./CCardBody-uByGfjuK.js";import{C as E}from"./CForm-Co1lrBE7.js";import{C as x,a as j}from"./CInputGroupText-Cu_kazgB.js";import{c as D}from"./cil-user-Ddrdy7PS.js";import{C}from"./CFormInput-DL94rU7Q.js";import{c as G}from"./cil-lock-locked-DmxpJbVL.js";import"./CFormControlWrapper-BVu4C2xH.js";import"./CFormControlValidation-BOOAFQI5.js";import"./CFormLabel-Bx5-oVjI.js";const X=()=>{const y=w(),f=S(s=>s.userLogged),c=I(),[n,k]=o.useState(""),[t,b]=o.useState("");o.useEffect(()=>{f&&v()},[]);const v=()=>{try{c("/lunch/order-history")}catch(s){console.log(s)}},L=s=>{k(s.target.value)},N=s=>{b(s.target.value)},i=s=>{s.key==="Enter"&&l()},l=async()=>{try{if(n.trim()==""||t.trim()==""){a.warning("Vui lòng nhập số điện thoại và mật khẩu!");return}const s={phone_number:n,password:t,fcm_token:""},r=await P.onUserSignIn(s);r&&(localStorage.setItem("userLogged",JSON.stringify(r.payload)),localStorage.setItem("userToken",r.token),y({type:"set",userLogged:r.payload,userToken:r.token}),a.success("Đăng nhập thành công!"),c("/lunch/order-history"))}catch{a.error("Đăng nhập thất bại!")}};return e.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:e.jsx(T,{children:e.jsx(d,{className:"justify-content-center",children:e.jsx(p,{md:8,children:e.jsxs(U,{children:[e.jsx(u,{className:"p-4",children:e.jsx(g,{children:e.jsxs(E,{children:[e.jsx("h1",{children:"Đăng nhập"}),e.jsx("p",{className:"text-body-secondary",children:"Đăng nhập vào RDT Lunch"}),e.jsxs(x,{className:"mb-3",children:[e.jsx(j,{children:e.jsx(h,{icon:D})}),e.jsx(C,{placeholder:"Số điện thoại",autoComplete:"username",value:n,onChange:L,onKeyPress:i})]}),e.jsxs(x,{className:"mb-4",children:[e.jsx(j,{children:e.jsx(h,{icon:G})}),e.jsx(C,{type:"password",placeholder:"Mật khẩu",autoComplete:"current-password",value:t,onChange:N,onKeyPress:i})]}),e.jsx(d,{children:e.jsx(p,{children:e.jsx(m,{color:"primary",className:"px-4",onClick:l,children:"Đăng nhập"})})})]})})}),e.jsx(u,{className:"text-white bg-primary py-5",style:{width:"44%"},children:e.jsx(g,{className:"text-center",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Đăng ký tài khoản"}),e.jsx("p",{children:"Bạn bận không thể nấu cơm trưa? Bạn lười? Bạn không có thời gian nấu cơm trưa mang đi làm? Đã có tôi! Tôi sẽ thay các bạn chuẩn bị bữa trưa cho bạn ^^"}),e.jsx(B,{to:"/register",children:e.jsx(m,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Đăng ký ngay nè!"})})]})})})]})})})})})};export{X as default};
