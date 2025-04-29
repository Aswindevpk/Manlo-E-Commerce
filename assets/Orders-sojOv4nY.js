import{j as e,i as l,n as x,L as p,B as f,d as n,f as h,u as m,v as g,h as u}from"./index-DRfNn9gb.js";const j=({order:r})=>e.jsxs(y,{children:[e.jsxs(b,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"ORDER #"}),e.jsx(d,{children:r.order_number})]}),e.jsxs(i,{children:[e.jsx(o,{children:"TOTAL"}),e.jsx(d,{children:l(r.price)})]}),e.jsxs(i,{children:[e.jsx(o,{children:"ORDER PLACED"}),e.jsx(d,{children:x(r.created_at)})]})]}),e.jsxs(v,{children:[e.jsxs("div",{style:{display:"flex"},children:[e.jsx(w,{src:r.product.image,alt:"Product"}),e.jsxs(O,{children:[e.jsx(z,{children:r.product.name}),e.jsx(D,{children:r.shipping_status}),e.jsxs(L,{children:[r.size," / ",r.color]})]})]}),e.jsxs(E,{children:[e.jsx(I,{children:"Qty:"}),e.jsx(C,{children:r.qty})]}),e.jsx(R,{children:e.jsx(p,{to:`${r.id}`,children:e.jsx(f,{children:"Order Details"})})})]}),e.jsxs(T,{children:["ESTIMATED DELIVERY: ",r.estimated_delivery]})]}),y=n.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`,b=n.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-grey-200);
  background: var(--color-grey-50);
`,i=n.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`,o=n.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-400);
  letter-spacing: 0.5px;
`,d=n.span`
  font-size: 1.4rem;
  font-family:var(--font-secondary);
  font-weight: 500;
  color: #111827;
`,v=n.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
`,w=n.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`,O=n.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,z=n.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-brand-800);
  margin: 0;
`,D=n.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.25rem;
  width: fit-content;
`,L=n.p`
  font-size: 1rem;
  color: #6b7280;
  margin-top: 4px;
`,E=n.div`
  font-size: 0.9rem;
  text-align: center;
`,I=n.span`
  font-size: 1.4rem;
  color: #6b7280;
`,C=n.span`
  font-weight: 600;
  margin-left: 4px;
  font-size: 1.4rem;
  color: #111827;
`,R=n.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`,T=n.div`
  background: var(--color-grey-50);
  font-size:1.2rem;
  color: var(--color-brand-900);
  font-weight: 600;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-grey-200);
`;function k(){const{user:r}=h(),t=r==null?void 0:r.id,{isLoading:s,data:c,error:a}=m({queryKey:["orders"],queryFn:()=>g({userId:t}),enabled:!!t,retry:!1});return{isLoading:s,orders:c,error:a}}function Q(){const{isLoading:r,orders:t}=k();return r?e.jsx(u,{}):e.jsxs("div",{children:[e.jsx("h1",{children:"Orders"}),e.jsx("div",{children:t==null?void 0:t.map(s=>e.jsx(j,{order:s}))})]})}export{Q as default};
