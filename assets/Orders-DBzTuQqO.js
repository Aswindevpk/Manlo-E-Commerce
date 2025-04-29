import{j as e,i as l,n as x,L as p,B as f,d as t,f as m,u as h,v as g,h as u,q as j}from"./index-B8BJ-eIj.js";import{E as y}from"./EmptyState-CKjW8p0-.js";const b=({order:r})=>e.jsxs(v,{children:[e.jsxs(w,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"ORDER #"}),e.jsx(d,{children:r.order_number})]}),e.jsxs(i,{children:[e.jsx(o,{children:"TOTAL"}),e.jsx(d,{children:l(r.price)})]}),e.jsxs(i,{children:[e.jsx(o,{children:"ORDER PLACED"}),e.jsx(d,{children:x(r.created_at)})]})]}),e.jsxs(O,{children:[e.jsxs("div",{style:{display:"flex"},children:[e.jsx(z,{src:r.product.image,alt:"Product"}),e.jsxs(D,{children:[e.jsx(E,{children:r.product.name}),e.jsx(L,{children:r.shipping_status}),e.jsxs(C,{children:[r.size," / ",r.color]})]})]}),e.jsxs(I,{children:[e.jsx(R,{children:"Qty:"}),e.jsx(S,{children:r.qty})]}),e.jsx(T,{children:e.jsx(p,{to:`${r.id}`,children:e.jsx(f,{children:"Order Details"})})})]}),e.jsxs(k,{children:["ESTIMATED DELIVERY: ",r.estimated_delivery]})]}),v=t.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`,w=t.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-grey-200);
  background: var(--color-grey-50);
`,i=t.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`,o=t.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-400);
  letter-spacing: 0.5px;
`,d=t.span`
  font-size: 1.4rem;
  font-family:var(--font-secondary);
  font-weight: 500;
  color: #111827;
`,O=t.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
`,z=t.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`,D=t.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,E=t.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-brand-800);
  margin: 0;
`,L=t.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.25rem;
  width: fit-content;
`,C=t.p`
  font-size: 1rem;
  color: #6b7280;
  margin-top: 4px;
`,I=t.div`
  font-size: 0.9rem;
  text-align: center;
`,R=t.span`
  font-size: 1.4rem;
  color: #6b7280;
`,S=t.span`
  font-weight: 600;
  margin-left: 4px;
  font-size: 1.4rem;
  color: #111827;
`,T=t.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`,k=t.div`
  background: var(--color-grey-50);
  font-size:1.2rem;
  color: var(--color-brand-900);
  font-weight: 600;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-grey-200);
`;function P(){const{user:r}=m(),n=r==null?void 0:r.id,{isLoading:s,data:a,error:c}=h({queryKey:["orders"],queryFn:()=>g({userId:n}),enabled:!!n,retry:!1});return{isLoading:s,orders:a,error:c}}function _(){const{isLoading:r,orders:n}=P();return r||!n?e.jsx(u,{}):n.length===0?e.jsx(y,{icon:e.jsx(j,{}),title:"No Orders Yet !",message:"Start adding items to your cart and order!"}):e.jsxs("div",{children:[e.jsx("h1",{children:"Orders"}),e.jsx("div",{children:n==null?void 0:n.map(s=>e.jsx(b,{order:s}))})]})}export{_ as default};
