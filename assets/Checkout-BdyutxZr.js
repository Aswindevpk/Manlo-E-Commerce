import{j as e,d as i,r as m,h as u,H as p,e as g,g as y,P as v,b as S,f as b,B as j,V as C,M as o,k as x}from"./index-KJ9wKMvK.js";import{u as A,A as O}from"./useGetAddressList-CuGUEEdh.js";import{u as P}from"./useCart-DtA_vSAC.js";const w=i.img`
    width: 90px;
    height: 120px;
`,E=i.div`
   display: flex;
   gap: 1rem;
`,k=i.div`
   display: flex;
   flex-direction: column;
   max-width: 200px;
   gap: 1rem;
`;function T({cartItem:s}){return e.jsx("div",{children:e.jsxs(E,{children:[e.jsx(w,{src:s.image}),e.jsxs(k,{children:[e.jsx("h3",{children:s.name}),e.jsxs("p",{children:["₹ ",s.price]}),e.jsxs("p",{children:["quantity: ",s.qty]})]})]})})}const q=i.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,F=i.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  gap: 2rem;
`,D=i.label`
  border: 2px solid var(--color-grey-200);
  border-radius:var(--border-radius-sm);
  display: flex;
  padding: 2rem;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  cursor: pointer;
`,L=i.input`
  accent-color: #393e46; /* Dark gray from your color palette */
`,N=({onSelectAddress:s})=>{const{addressList:r,isLoading:t}=A(),[l,c]=m.useState(null);if(t)return e.jsx(u,{});const d=n=>{c(n),s(n)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{as:"h5",children:"Select Address"}),e.jsx(q,{children:e.jsx(F,{children:r==null?void 0:r.map(n=>e.jsxs(D,{children:[e.jsx(L,{type:"radio",name:"delivery",value:n.id,checked:l===n.id,onChange:f=>d(f.target.value)}),n.first_name," ",n.last_name," - ",n.phone," ",e.jsx("br",{}),n.line1,", ",n.line2,", ",n.city," - ",n.pincode]}))})})]})},R=()=>{const s=g();return y({mutationFn:v,onSuccess:()=>{s.invalidateQueries({queryKey:["cartCount"]}),s.invalidateQueries({queryKey:["cart"]}),s.invalidateQueries({queryKey:["orders"]})},onError:r=>{console.error("Order placement failed:",r.message)}})},B=({addressId:s})=>{const r=S(),{user:t}=b(),{mutate:l,isPending:c}=R(),d=async()=>{s||C.error("select an address"),l({userId:t==null?void 0:t.id,addressId:s},{onSuccess:()=>{r("/order-confirm")}})};return c?e.jsx(u,{}):e.jsx(j,{size:"medium",style:{width:"100%"},onClick:d,children:"Place Order and Pay"})},Q=i.main`
    display: grid;
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
    grid-template-rows:auto 1fr;

    @media (max-width: 768px) {
        grid-template-columns:  1fr;
    }
`,a=i.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
`,H=i.div`
    padding: 2.4rem 0;

`,h=i.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,I=i.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    padding-bottom: 2rem;
`;function W(){const{isLoading:s,cartItems:r}=P(),[t,l]=m.useState(null);if(s||!r)return e.jsx(u,{});const c=r==null?void 0:r.reduce((d,n)=>d+n.price*n.qty,0);return e.jsx(e.Fragment,{children:e.jsxs(Q,{children:[e.jsxs(h,{children:[e.jsx(p,{as:"h2",children:"Shipping Details"}),e.jsx(N,{onSelectAddress:l}),e.jsxs(o,{children:[e.jsx(o.Open,{opens:"cabin-form",children:e.jsx(j,{type:"submit",children:"Add New Address"})}),e.jsx(o.Window,{name:"cabin-form",children:e.jsx(O,{addressToEdit:{id:null}})})]})]}),e.jsxs(h,{children:[e.jsx(p,{as:"h2",children:"Summary"}),e.jsxs(H,{children:[e.jsx(I,{children:r==null?void 0:r.map(d=>e.jsx(T,{cartItem:d},d.id))}),e.jsx(a,{children:e.jsx("p",{children:"ENTER COUPON CODE"})}),e.jsx(x,{}),e.jsxs(a,{children:[e.jsx("p",{children:"SUB TOTAL"}),e.jsxs("p",{children:["₹ ",c]})]}),e.jsxs(a,{children:[e.jsx("p",{children:"SHIPPING"}),e.jsx("p",{children:"FREE"})]}),e.jsxs(a,{children:[e.jsx("p",{children:"TAXES"}),e.jsx("p",{children:"₹0"})]}),e.jsx(x,{}),e.jsxs(a,{children:[e.jsx("h2",{children:"TOTAL"}),e.jsxs("p",{children:["₹ ",c]})]}),t&&e.jsx(B,{addressId:t})]})]})]})})}export{W as default};
