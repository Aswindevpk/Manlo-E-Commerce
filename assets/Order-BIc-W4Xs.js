import{e as C,g as O,m as S,V as f,n as _,j as e,h as z,o as t,p as k,T as P,i as c,M as n,B as b,d as s}from"./index-KJ9wKMvK.js";import{C as y}from"./ConfirmDelete-DdOSWqb1.js";const R=()=>{const r=C(),{mutate:p,isPending:d,error:a}=O({mutationFn:S,onSuccess:i=>{f.success("Order Canceled Successfully!"),r.invalidateQueries({queryKey:["order",i]})},onError:i=>{f.error(i.message),console.error("Order cancellation failed:",i.message)}});return{cancelOrder:p,error:a,isPending:d}},x=[t.Ordered,t.Processing,t.Shipped,t.Delivered];function W(){var g;const{order:r,isLoading:p}=_(),{cancelOrder:d,isPending:a}=R();if(p||!r)return e.jsx(z,{});const i=r.shipping_status===t.Canceled,u=r.shipping_status===t.Delivered,h=x.indexOf(r.shipping_status);return e.jsxs(T,{children:[e.jsxs($,{children:[e.jsxs("h2",{children:["Order #",r.order_number]}),e.jsx("p",{children:k(r.created_at)}),i&&e.jsx(P,{type:"red",children:"canceled"})]}),e.jsx(N,{children:x.map((j,o)=>e.jsxs(q,{children:[e.jsx(B,{active:o<=h}),e.jsx(Q,{active:o<=h,children:j}),o<x.length-1&&e.jsx(M,{active:o<h})]},j))}),e.jsxs(w,{children:[e.jsx(l,{children:"Ordered Product"}),e.jsxs(E,{children:[e.jsx("img",{src:r.product.image}),e.jsxs("div",{children:[e.jsx("h4",{children:r.product.name}),e.jsxs("p",{children:["Qty: ",r.product.quantity]}),e.jsxs("p",{children:["Price: ",c(r.product.price)]})]})]})]}),e.jsxs(D,{children:[e.jsxs(v,{children:[e.jsx(l,{children:"Ship To"}),e.jsxs("p",{children:[r.shipping_address.first_name," ",r.shipping_address.last_name]}),e.jsx("p",{children:r.shipping_address.phone}),e.jsx("p",{children:r.shipping_address.line1}),e.jsx("p",{children:(g=r.shipping_address)==null?void 0:g.line2}),e.jsxs("p",{children:[r.shipping_address.city,", ",r.shipping_address.state,"- ",r.shipping_address.pincode]})]}),e.jsxs(v,{right:!0,children:[e.jsx(l,{children:"Order Summary"}),e.jsxs(m,{children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{children:c(r.price)})]}),e.jsxs(m,{children:[e.jsx("span",{children:"Shipping:"}),e.jsx("span",{children:c(0)})]}),e.jsxs(m,{bold:!0,children:[e.jsx("span",{children:"Total:"}),e.jsx("span",{children:c(r.price)})]})]})]}),e.jsxs(w,{style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx(l,{children:"Return & Cancellation"}),e.jsx("p",{children:"Returns accepted within 10 days of delivery."})]}),e.jsxs("div",{children:[!i&&!u&&e.jsxs(n,{children:[e.jsx(n.Open,{opens:"delete",children:e.jsx(b,{children:"Cancel Order"})}),e.jsx(n.Window,{name:"delete",children:e.jsx(y,{actionName:"Cancel",resourceName:"order",disabled:a,onConfirm:()=>{r.id&&d(r.id)}})})]}),u&&e.jsxs(n,{children:[e.jsx(n.Open,{opens:"delete",children:e.jsx(b,{children:"Return Package"})}),e.jsx(n.Window,{name:"delete",children:e.jsx(y,{actionName:"Cancel",resourceName:"order",disabled:a,onConfirm:()=>{r.id&&d(r.id)}})})]})]})]})]})}const T=s.div`
  max-width: 900px;
  margin:0rem auto;
  padding: 2rem;
  background:var(--color-grey-0);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`,$=s.div`
  margin-bottom: 2rem;
  font-family: var(--font-secondary);

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
    color:var(--color-grey-400);
  }
`,D=s.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--color-grey-100);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`,v=s.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 1rem;

  ${({right:r})=>r&&`
    text-align: right;
  `}
`,l=s.h3`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: capitalize;
  margin-bottom: 1rem;
`,m=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: ${({bold:r})=>r?"600":"normal"};
`,N=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  position: relative;
`,q=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
`,B=s.div`
  width: 16px;
  height: 16px;
  background: ${({active:r})=>r?"#2fe371":"#d1d5db"};
  border-radius: 50%;
  z-index: 1;
`,M=s.div`
  position: absolute;
  height: 4px;
  background: ${({active:r})=>r?"#4ade80":"#e5e7eb"};
  width: 100%;
  top: 6px;
  left: 50%;
  transform: translateX(0%);
  z-index: 0;
`,Q=s.span`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({active:r})=>r?"#111":"#aaa"};
`,w=s.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  margin-bottom: 1.5rem;
`,E=s.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    background: #f3f3f3;
  }

  h4 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    margin: 2px 0;
    font-size: 1.2rem;
    color: #444;
  }
`;export{W as default};
