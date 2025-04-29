import{j as e,d as i,r as m,h as u,H as p,e as f,g as y,P as v,b as S,f as b,B as j,V as C,M as a,k as x}from"./index-B8BJ-eIj.js";import{u as A,A as O}from"./useGetAddressList-C8ahA6pY.js";import{u as P}from"./useCart-DK7zX1VZ.js";const w=i.img`
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
`;function T({cartItem:r}){return e.jsx("div",{children:e.jsxs(E,{children:[e.jsx(w,{src:r.image}),e.jsxs(k,{children:[e.jsx("h3",{children:r.name}),e.jsxs("p",{children:["₹ ",r.price]}),e.jsxs("p",{children:["quantity: ",r.qty]})]})]})})}const q=i.form`
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
`,N=({onSelectAddress:r})=>{const{addressList:n,isLoading:t}=A(),[c,l]=m.useState(null);if(t)return e.jsx(u,{});const d=s=>{l(s),r(s)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{as:"h5",children:"Select Address"}),e.jsx(q,{children:e.jsx(F,{children:n==null?void 0:n.map(s=>e.jsxs(D,{children:[e.jsx(L,{type:"radio",name:"delivery",value:s.id,checked:c===s.id,onChange:g=>d(g.target.value)}),s.first_name," ",s.last_name," - ",s.phone," ",e.jsx("br",{}),s.line1,", ",s.line2,", ",s.city," - ",s.pincode]}))})})]})},R=()=>{const r=f();return y({mutationFn:v,onSuccess:()=>{r.invalidateQueries({queryKey:["cartCount"]}),r.invalidateQueries({queryKey:["cart"]}),r.invalidateQueries({queryKey:["orders"]})},onError:n=>{console.error("Order placement failed:",n.message)}})},B=({addressId:r})=>{const n=S(),{user:t}=b(),{mutate:c,isPending:l}=R(),d=async()=>{r||C.error("select an address"),c({userId:t==null?void 0:t.id,addressId:r},{onSuccess:s=>{console.log(s),n("/order-confirm")}})};return l?e.jsx(u,{}):e.jsx(j,{size:"medium",style:{width:"100%"},onClick:d,children:"Place Order and Pay"})},Q=i.main`
    display: grid;
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
    grid-template-rows:auto 1fr;

    @media (max-width: 768px) {
        grid-template-columns:  1fr;
  }
`,o=i.div`
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
`;function W(){const{isLoading:r,cartItems:n}=P(),[t,c]=m.useState(null);if(r||!n)return e.jsx(u,{});const l=n==null?void 0:n.reduce((d,s)=>d+s.price*s.qty,0);return e.jsx(e.Fragment,{children:e.jsxs(Q,{children:[e.jsxs(h,{children:[e.jsx(p,{as:"h2",children:"Shipping Details"}),e.jsx(N,{onSelectAddress:c}),e.jsxs(a,{children:[e.jsx(a.Open,{opens:"cabin-form",children:e.jsx(j,{type:"submit",children:"Add New Address"})}),e.jsx(a.Window,{name:"cabin-form",children:e.jsx(O,{addressToEdit:{id:null}})})]})]}),e.jsxs(h,{children:[e.jsx(p,{as:"h2",children:"Summary"}),e.jsxs(H,{children:[e.jsx(I,{children:n==null?void 0:n.map(d=>e.jsx(T,{cartItem:d},d.id))}),e.jsx(o,{children:e.jsx("p",{children:"ENTER COUPON CODE"})}),e.jsx(x,{}),e.jsxs(o,{children:[e.jsx("p",{children:"SUB TOTAL"}),e.jsxs("p",{children:["₹ ",l]})]}),e.jsxs(o,{children:[e.jsx("p",{children:"SHIPPING"}),e.jsx("p",{children:"FREE"})]}),e.jsxs(o,{children:[e.jsx("p",{children:"TAXES"}),e.jsx("p",{children:"₹0"})]}),e.jsx(x,{}),e.jsxs(o,{children:[e.jsx("h2",{children:"TOTAL"}),e.jsxs("p",{children:["₹ ",l]})]}),t&&e.jsx(B,{addressId:t})]})]})]})})}export{W as default};
