import{m as g,j as e,h as j,n as u,i as s,B as l,d as i}from"./index-B8BJ-eIj.js";const a=["ordered","processing","shipped","delivered"];function O(){var c;const{order:r,isLoading:m}=g();if(m||!r)return e.jsx(j,{});const d=a.indexOf(r.shipping_status);return e.jsxs(f,{children:[e.jsxs(b,{children:[e.jsxs("h2",{children:["Order #",r.order_number]}),e.jsx("p",{children:u(r.created_at)})]}),e.jsx(w,{children:a.map((p,n)=>e.jsxs(y,{children:[e.jsx(_,{active:n<=d}),e.jsx(z,{active:n<=d,children:p}),n<a.length-1&&e.jsx(S,{active:n<d})]},p))}),e.jsxs(x,{children:[e.jsx(t,{children:"Ordered Product"}),e.jsxs(C,{children:[e.jsx("img",{src:r.product.image}),e.jsxs("div",{children:[e.jsx("h4",{children:r.product.name}),e.jsxs("p",{children:["Qty: ",r.product.quantity]}),e.jsxs("p",{children:["Price: ",s(r.product.price)]})]})]})]}),e.jsxs(v,{children:[e.jsxs(h,{children:[e.jsx(t,{children:"Ship To"}),e.jsxs("p",{children:[r.shipping_address.first_name," ",r.shipping_address.last_name]}),e.jsx("p",{children:r.shipping_address.phone}),e.jsx("p",{children:r.shipping_address.line1}),e.jsx("p",{children:(c=r.shipping_address)==null?void 0:c.line2}),e.jsxs("p",{children:[r.shipping_address.city,", ",r.shipping_address.state,"- ",r.shipping_address.pincode]})]}),e.jsxs(h,{right:!0,children:[e.jsx(t,{children:"Order Summary"}),e.jsxs(o,{children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{children:s(r.price)})]}),e.jsxs(o,{children:[e.jsx("span",{children:"Shipping:"}),e.jsx("span",{children:s(0)})]}),e.jsxs(o,{bold:!0,children:[e.jsx("span",{children:"Total:"}),e.jsx("span",{children:s(r.price)})]}),e.jsx(l,{children:"Download Invoice"})]})]}),e.jsxs(x,{children:[e.jsx(t,{children:"Return & Cancellation"}),e.jsx("p",{children:"Returns accepted within 10 days of delivery."}),r&&e.jsx(l,{onClick:()=>alert("Cancel order logic here"),children:"Cancel Order"})]})]})}const f=i.div`
  max-width: 900px;
  margin:0rem auto;
  padding: 2rem;
  background:var(--color-grey-0);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`,b=i.div`
  margin-bottom: 2rem;
  font-family: var(--font-secondary);

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
    color:var(--color-grey-400);
  }
`,v=i.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--color-grey-100);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`,h=i.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 1rem;

  ${({right:r})=>r&&`
    text-align: right;
  `}
`,t=i.h3`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: capitalize;
  margin-bottom: 1rem;
`,o=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: ${({bold:r})=>r?"600":"normal"};
`,w=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  position: relative;
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
`,_=i.div`
  width: 16px;
  height: 16px;
  background: ${({active:r})=>r?"#2fe371":"#d1d5db"};
  border-radius: 50%;
  z-index: 1;
`,S=i.div`
  position: absolute;
  height: 4px;
  background: ${({active:r})=>r?"#4ade80":"#e5e7eb"};
  width: 100%;
  top: 6px;
  left: 50%;
  transform: translateX(0%);
  z-index: 0;
`,z=i.span`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({active:r})=>r?"#111":"#aaa"};
`,x=i.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  margin-bottom: 1.5rem;
`,C=i.div`
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
`;export{O as default};
