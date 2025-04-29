import{j as r,z as e,d as o,L as n}from"./index-DRfNn9gb.js";const t=o.div`
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`,c=o.div`
  background-color: white;
  text-align: center;
`,a=o.div`
  color: green;
  margin-bottom: 1.5rem;
`,i=o.h2`
  font-size: 2rem;
  color: var(--color-dark-gray);
  margin-bottom: 0.5rem;
`,s=o.p`
  color: var(--color-muted-blue);
  font-size: 1rem;
  margin-bottom: 2rem;
`,d=o(n)`
  background-color: var(--color-dark-gray);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d323a;
  }
`,u=()=>r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(a,{children:r.jsx(e,{size:64})}),r.jsxs(i,{children:["Thank you, ","test","!"]}),r.jsx(s,{children:"Your order has been placed successfully."}),r.jsx(d,{to:"/shop",children:"Continue Shopping"})]})});export{u as default};
