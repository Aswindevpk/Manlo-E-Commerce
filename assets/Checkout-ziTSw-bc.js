import{j as e,d as i,r as m,h as u,H as p,e as g,g as y,P as v,b as S,f as b,B as j,V as C,M as a,k as x}from"./index-DRfNn9gb.js";import{u as O,A}from"./useGetAddressList-B4nUgW03.js";import{u as P}from"./useCart-I-ZiiaNN.js";const w=i.img`
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
`;function T({cartItem:n}){return e.jsx("div",{children:e.jsxs(E,{children:[e.jsx(w,{src:n.image}),e.jsxs(k,{children:[e.jsx("h3",{children:n.name}),e.jsxs("p",{children:["₹ ",n.price]}),e.jsxs("p",{children:["quantity: ",n.qty]})]})]})})}const F=i.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,q=i.div`
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
`,N=({onSelectAddress:n})=>{const{addressList:s,isLoading:t}=O(),[l,c]=m.useState(null);if(t)return e.jsx(u,{});const d=r=>{c(r),n(r)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{as:"h5",children:"Select Address"}),e.jsx(F,{children:e.jsx(q,{children:s==null?void 0:s.map(r=>e.jsxs(D,{children:[e.jsx(L,{type:"radio",name:"delivery",value:r.id,checked:l===r.id,onChange:f=>d(f.target.value)}),r.first_name," ",r.last_name," - ",r.phone," ",e.jsx("br",{}),r.line1,", ",r.line2,", ",r.city," - ",r.pincode]}))})})]})},R=()=>{const n=g();return y({mutationFn:v,onSuccess:()=>{n.invalidateQueries({queryKey:["cartCount"]}),n.invalidateQueries({queryKey:["cart"]}),console.log("Orders placed successfully")},onError:s=>{console.error("Order placement failed:",s.message)}})},B=({addressId:n})=>{const s=S(),{user:t}=b(),{mutate:l,isPending:c}=R(),d=async()=>{n||C.error("select an address"),l({userId:t==null?void 0:t.id,addressId:n},{onSuccess:()=>{s("/order-confirm")}})};return c?e.jsx(u,{}):e.jsx(j,{size:"medium",style:{width:"100%"},onClick:d,children:"Place Order and Pay"})},H=i.main`
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
`,I=i.div`
    padding: 2.4rem 0;

`,h=i.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,M=i.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    padding-bottom: 2rem;
`;function z(){const{isLoading:n,cartItems:s}=P(),[t,l]=m.useState(null);if(n||!s)return e.jsx(u,{});const c=s==null?void 0:s.reduce((d,r)=>d+r.price*r.qty,0);return e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsxs(h,{children:[e.jsx(p,{as:"h2",children:"Shipping Details"}),e.jsx(N,{onSelectAddress:l}),e.jsxs(a,{children:[e.jsx(a.Open,{opens:"cabin-form",children:e.jsx(j,{type:"submit",children:"Add New Address"})}),e.jsx(a.Window,{name:"cabin-form",children:e.jsx(A,{addressToEdit:{id:null}})})]})]}),e.jsxs(h,{children:[e.jsx(p,{as:"h2",children:"Summary"}),e.jsxs(I,{children:[e.jsx(M,{children:s==null?void 0:s.map(d=>e.jsx(T,{cartItem:d},d.id))}),e.jsx(o,{children:e.jsx("p",{children:"ENTER COUPON CODE"})}),e.jsx(x,{}),e.jsxs(o,{children:[e.jsx("p",{children:"SUB TOTAL"}),e.jsxs("p",{children:["₹ ",c]})]}),e.jsxs(o,{children:[e.jsx("p",{children:"SHIPPING"}),e.jsx("p",{children:"FREE"})]}),e.jsxs(o,{children:[e.jsx("p",{children:"TAXES"}),e.jsx("p",{children:"₹0"})]}),e.jsx(x,{}),e.jsxs(o,{children:[e.jsx("h2",{children:"TOTAL"}),e.jsxs("p",{children:["₹ ",c]})]}),t&&e.jsx(B,{addressId:t})]})]})]})})}export{z as default};
