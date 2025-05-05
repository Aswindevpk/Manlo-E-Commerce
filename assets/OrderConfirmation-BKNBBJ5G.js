import{G as i,b as a,j as r,d as n,E as s}from"./index-KJ9wKMvK.js";function d(e){return i({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"},child:[]}]})(e)}const c=s`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,l=n.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
  padding: 2rem;
`,m=n.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  width: 100%;
  text-align: center;
  animation: ${c} 0.4s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`,u=n.div`
  color: #10b981;
  margin-bottom: 1rem;
`,h=n.h1`
  font-size: 2.2cherem;
  margin-bottom: 0.5rem;
`,o=n.p`
  color: #4b5563;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`,p=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`,t=n.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease all;
  font-weight: 500;
  border: ${({variant:e})=>e==="outline"?"1px solid #d1d5db":"none"};
  background-color: ${({variant:e})=>e==="outline"?"white":"#111827"};
  color: ${({variant:e})=>e==="outline"?"#374151":"white"};

  &:hover {
    background-color: ${({variant:e})=>e==="outline"?"#f3f4f6":"#1f2937"};
  }
`;function f(){const e=a();return r.jsx(l,{children:r.jsxs(m,{children:[r.jsx(u,{children:r.jsx(d,{size:80})}),r.jsx(h,{children:"Thank you for your order!"}),r.jsxs("div",{children:[r.jsx(o,{children:"Your order has been successfully placed."}),r.jsxs(o,{children:["A confirmation has been sent to ",r.jsx("strong",{children:"Your Email"}),"."]})]}),r.jsxs(p,{children:[r.jsx(t,{onClick:()=>e("/"),children:"Continue Shopping"}),r.jsx(t,{variant:"outline",onClick:()=>e("/user/orders"),children:"View Orders"})]})]})})}export{f as default};
