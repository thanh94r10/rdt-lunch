import{m as A,r,j as e,C as G,B as y}from"./index-s0XwZAS9.js";import"./index-Blf2Av0T.js";import{f as X,n as q}from"./DefaultLayout-DTvV0MXD.js";import{a as j}from"./index.es-Q3zgY9hi.js";import{u as m}from"./userService-DXzYnLiy.js";import{C as T,a as v}from"./CCardBody-iE5fZoY8.js";import{C as J}from"./CCardHeader-B5ALcecT.js";import{C as _,a as M,b as C,c as l,d as Y,e as u}from"./CTable-Df6syfUA.js";import{C as D}from"./CAlert-BbiaGhia.js";import{C as Z}from"./CFormInput-CRtxbgoG.js";import"./cil-lock-locked-DmxpJbVL.js";import"./CFormControlWrapper-BDsnkhDQ.js";import"./CFormControlValidation-BfW4Rx8S.js";import"./CFormLabel-DIYgL8zC.js";const pe=()=>{const g=A(s=>s.userLogged),[i,p]=r.useState([]),[$,H]=r.useState([]),[c,R]=r.useState(null),[L,b]=r.useState(0),[S,k]=r.useState([]);r.useState(0);const[F,N]=r.useState(!0);r.useState(!1);const[E,x]=r.useState(!0),[d,O]=r.useState(!1),[B,V]=r.useState("");r.useEffect(()=>{I(),U()},[]);const U=()=>{try{const s=X(new Date);V(s)}catch{}};r.useEffect(()=>{const s=i.filter(t=>t.quantity>0);if(s.length>0){let t=0;s.map(n=>{t+=n.quantity*n.price}),b(t*1e3)}else b(0);H(s)},[i]);const I=async()=>{try{const s=await m.getAllDataLunch();if(s.length>0){const t=s[s.length-1],n=new Date(t.date),a=new Date;n.getDate()==a.getDate()&&n.getMonth()==a.getMonth()&&n.getFullYear()==a.getFullYear()?(R(t),O(t.finished),f(t),t.foods.map(o=>o.quantity=0),p(t.foods)):x(!1)}}catch(s){console.log(s),x(!1),setIsRefreshing(!1)}},f=async s=>{try{const t=await m.UMCL_getLunchDetail(s._id);if(x(!1),t){O(t.finished);let n=[];t.foods.map(o=>{o.orders.map(w=>{w.empCode==g.emp_code&&n.push(w)})}),k(n),N(!(n.length>0));let a=0;n.map(o=>{a+=o.quantity*o.price}),b(a*1e3)}}catch(t){x(!1),console.log(t)}},P=(s,t)=>{const n=[...i];n[s].quantity=parseInt(t.target.value,10),p(n)},W=s=>{const t=[...i];t[s].quantity=Math.max(t[s].quantity-1,0),p(t)},K=s=>{const t=[...i];t[s].quantity=t[s].quantity+1,p(t)},Q=async()=>{try{if((await m.UMCL_getLunchDetail(c._id)).finished){y.warning("Đã chốt món! Không thể ĐẶT/HỦY"),f(c);return}if(i.find(n=>n.quantity>0)){const n=i.filter(h=>h.quantity>0);let a=[];n.map(h=>{a.push({id:h.id,empCode:g.emp_code,userName:g.full_name,quantity:h.quantity,foodName:h.name,price:h.price})});const o={listFoods:a};await m.UMCL_placeOrder(c._id,o)&&(y.success("Đặt món thành công!"),x(!0),f(c))}else y.warning("Vui lòng chọn ít nhất 1 món!")}catch{}},z=async()=>{try{if((await m.UMCL_getLunchDetail(c._id)).finished){f(c),y.warning("Đã chốt món! Không thể ĐẶT/HỦY");return}if(await m.UMCL_cancelOrder(c._id,g.emp_code)){y.success("Hủy đặt món thành công!");let n=[...i];n.map(a=>a.quantity=0),p(n)}if(!F){N(!0);return}}catch(s){console.log(s)}};return e.jsx(e.Fragment,{children:E?e.jsx(G,{color:"primary",style:{marginLeft:15,marginTop:15}}):e.jsxs(T,{className:"mb-4",children:[e.jsxs(J,{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"RDT Lunch"})," ",e.jsx("small",{children:"Đặt món ăn"})]}),e.jsx("div",{children:e.jsx("strong",{children:B})})]}),S.length>0&&!F?e.jsxs(v,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Chọn món và sau đó xác nhận."}),e.jsxs(_,{children:[e.jsx(M,{children:e.jsxs(C,{children:[e.jsx(l,{scope:"col",children:"#"}),e.jsx(l,{scope:"col",children:"Tên món"}),e.jsx(l,{scope:"col",children:"Giá"}),e.jsx(l,{scope:"col",className:"mb-2",children:"Số lượng"})]})}),e.jsx(Y,{children:S.map((s,t)=>e.jsxs(C,{children:[e.jsx(l,{scope:"row",children:t+1}),e.jsx(u,{children:s.foodName}),e.jsxs(u,{children:[s.price,".000 VNĐ"]}),e.jsx(u,{children:s.quantity})]},s.id))})]}),e.jsx("div",{style:{marginVertical:10,height:5,borderRadius:10,backgroundColor:"#F3F4F7"}}),e.jsx(D,{style:{marginTop:10},color:"success",children:"Bạn đã đặt thành công!"}),e.jsxs(T,{className:"mb-4",style:{marginTop:10,padding:15,display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("span",{style:{fontSize:28,fontWeight:"bold",color:"#1B9E3E"},children:[q(L)," VNĐ"]}),e.jsx("span",{style:{},children:"Tổng tiền"})]}),d?null:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.jsx(j,{onClick:()=>z(),type:"submit",color:"secondary",children:"HỦY ĐẶT"})})]}),d?e.jsx(D,{color:"warning",children:"Đã chốt món! Không thể ĐẶT/HỦY"}):null]}):e.jsxs(v,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Chọn món và sau đó xác nhận."}),e.jsxs(_,{children:[e.jsx(M,{children:e.jsxs(C,{children:[e.jsx(l,{scope:"col",children:"#"}),e.jsx(l,{scope:"col",children:"Tên món"}),e.jsx(l,{scope:"col",children:"Giá"}),e.jsx(l,{scope:"col",className:"mb-2",children:"Số lượng"})]})}),e.jsx(Y,{children:i.map((s,t)=>e.jsxs(C,{children:[e.jsx(l,{scope:"row",children:t+1}),e.jsx(u,{children:s.name}),e.jsxs(u,{children:[s.price,".000 VNĐ"]}),e.jsx(u,{className:"mb-2",children:d?null:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(j,{color:"secondary",onClick:()=>W(t),children:"-"}),e.jsx(Z,{type:"number",value:s.quantity,onChange:n=>P(t,n),style:{maxWidth:150,minWidth:50,marginLeft:10,marginRight:10},min:0,max:10}),e.jsx(j,{color:"secondary",onClick:()=>K(t),children:"+"})]})})]},s.id))})]}),e.jsx("div",{style:{marginVertical:10,height:5,borderRadius:10,backgroundColor:"#F3F4F7"}}),c?e.jsxs(T,{className:"mb-4",style:{marginTop:10,padding:15,display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[d?null:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("span",{style:{fontSize:28,fontWeight:"bold",color:"#1B9E3E"},children:[q(L)," VNĐ"]}),e.jsx("span",{style:{},children:"Tổng tiền"})]}),d?null:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.jsx(j,{onClick:()=>Q(),type:"submit",color:"primary",children:"Xác nhận"})})]}):e.jsxs(D,{color:"warning",dismissible:!1,style:{marginTop:10},onClose:()=>{},children:[e.jsx("strong",{children:"Chưa lên món!"})," nhắn cho Thành ngay để lên món nhé."]}),d?e.jsx(D,{color:"warning",children:"Đã chốt món! Không thể ĐẶT/HỦY"}):null]})]})})};export{pe as default};
