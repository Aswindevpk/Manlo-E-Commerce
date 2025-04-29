import{c as m,j as e,H as E,B as q,d,s as A,a as S,u as k,r as $,h as L,G as O,b as z}from"./index-DRfNn9gb.js";import{P as K}from"./ProductItem-CND2-dyE.js";import{a as f,b as y}from"./index-C1HuU_Wr.js";import{s as T}from"./apiProduct-BmE6HX7m.js";import{E as R}from"./EmptyState-alGSbvmm.js";const _=d.div`
  display: flex;
    flex-direction: column;
`,G=d.div`
    display: flex;
    border-bottom: 2px solid var(--color-brand-800);
    padding-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
`,H=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`,N=d.div`
  background-color: var(--color-light-gray);
  color: var(--color-dark-gray);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
`,U=d.span`
  cursor: pointer;
  font-weight: bold;
  margin-left: 4px;
  color: var(--color-dark-gray);
`;function I(){const[r,c]=m(),s=Array.from(r.entries()).filter(([n])=>n!=="q"&&n!=="sortBy");function i(n,a){const l=r.getAll(n).filter(h=>h!==a);l.length?(r.delete(n),l.forEach(h=>r.append(n,h))):r.delete(n),c(r)}function o(){["color","brand","category","type"].forEach(a=>{r.delete(a)}),c(r)}return e.jsxs(_,{children:[e.jsxs(G,{children:[e.jsx(E,{as:"h3",center:!0,children:"FILTER"}),s.length>0&&e.jsx(q,{size:"small",onClick:()=>o(),children:"Clear all"})]}),e.jsx(H,{children:s.map(([n,a],p)=>e.jsxs(N,{children:[n,": ",a,e.jsx(U,{onClick:()=>i(n,a),children:"✕"})]},`${n}-${a}-${p}`))})]})}function V(r,c){const s={color:[],brand:[],type:[],category:[]};return c.forEach(i=>{const o={};r.forEach(n=>{const a=n[i];a&&(o[a]=(o[a]||0)+1)}),s[i]=Object.entries(o).map(([n,a])=>({name:n,count:a}))}),s}async function D({collectionSlug:r,searchQuery:c,sortBy:s,filters:i}){let o=A.from("product_search_view").select("color,brand,category,type");r&&(o=o.or(`type.eq.${r},category.eq.${r}`)),o=o.ilike("product_name",`%${c}%`),i&&(i==null?void 0:i.length)>0&&i.forEach(l=>{l.values&&(o=o.in(l.field,l.values))}),s&&(o=o.order(s.field,{ascending:s.direction==="asc"}));const{data:n,error:a}=await o,p=["color","brand","category","type"];return n?V(n,p):(a&&console.error("Error fetching brand counts:",a),null)}function Q(){const[r]=m(),{collectionSlug:c}=S(),s=r.get("q")||"a",i=r.get("sortBy")||"is_new-desc",[o,n]=i.split("-"),a={field:o,direction:n},l=["brand","category","color","type"].map(t=>{const u=r.getAll(t);return u.length===0?{field:t,values:null}:{field:t,values:u}}),{isLoading:h,data:g,error:x}=k({queryKey:["filter",s,l,c,a],queryFn:()=>D({searchQuery:s,filters:l,collectionSlug:c,sortBy:a}),retry:!1});return{isLoading:h,filterCounts:g,error:x}}const M=d.div`
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-grey-200);
  border-radius: 8px;
  padding: 2rem;
  height: fit-content;
`,j=d.h3`
  font-size: 14px;
  color: var(--color-brand-900);
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-grey-200);
`,b=d.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 8px 0px;
`,C=d.label`
  font-size: 13px;
  color: var(--color-dark-gray);
`,v=d.span`
  font-size: 13px;
  letter-spacing: 2px;
  color: var( --color-grey-400);
`,w=d.input`
  margin-right: 8px;
`,F=d.div`
  display: ${r=>r.isOpen?"block":"none"};
  padding: 10px 0;
`,W=()=>{const[r,c]=m(),[s,i]=$.useState({price:!0,color:!0,size:!0,brand:!0,category:!0,type:!0}),{isLoading:o,filterCounts:n}=Q(),a=t=>{i(u=>({...u,[t]:!u[t]}))},p=(t,u)=>{const B=r.getAll(t);B.includes(u)?(r.delete(t),B.filter(P=>P!==u).forEach(P=>r.append(t,P))):r.append(t,u),c(r)};if(o||!n)return e.jsx(L,{});const l=n.brand,h=n.color,g=n.category,x=n.type;return e.jsxs(M,{children:[e.jsx(I,{}),l.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{onClick:()=>a("brand"),children:[s.brand?e.jsx(f,{}):e.jsx(y,{})," BRAND"]}),e.jsx(F,{isOpen:s.brand,children:l==null?void 0:l.map(t=>e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(w,{type:"checkbox",onChange:()=>p("brand",t.name),checked:r.getAll("brand").includes(t.name)}),t.name.toUpperCase()]},t.name),e.jsxs(v,{children:[" ",`(${t.count})`]})]}))})]}),g.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{onClick:()=>a("category"),children:[s.category?e.jsx(f,{}):e.jsx(y,{})," CATEGORY"]}),e.jsx(F,{isOpen:s.category,children:g==null?void 0:g.map(t=>e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(w,{type:"checkbox",onChange:()=>p("category",t.name),checked:r.getAll("category").includes(t.name)}),t.name.toUpperCase()]},t.name),e.jsxs(v,{children:[" ",`(${t.count})`]})]}))})]}),x.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{onClick:()=>a("type"),children:[s.type?e.jsx(f,{}):e.jsx(y,{})," TYPE"]}),e.jsx(F,{isOpen:s.type,children:x.map(t=>e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(w,{type:"checkbox",onChange:()=>p("type",t.name),checked:r.getAll("type").includes(t.name)}),t.name.toUpperCase()]},t.name),e.jsxs(v,{children:[" ",`(${t.count})`]})]}))})]}),h.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(j,{onClick:()=>a("color"),children:[s.color?e.jsx(f,{}):e.jsx(y,{}),"COLOR "]}),e.jsx(F,{isOpen:s.color,children:h.map(t=>e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(w,{type:"checkbox",onChange:()=>p("color",t.name),checked:r.getAll("color").includes(t.name)}),t.name.toUpperCase()]},t.name),e.jsxs(v,{children:[" ",`(${t.count})`]})]}))})]})]})},Y=d.select`
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    color:var(--color-brand-700);
    background-color:var(--color-grey-200);
    font-weight: 500;
    border: none;
    text-transform:uppercase;
`;function J(){const[r,c]=m(),s=r.get("sortBy")||"";function i(o){r.set("sortBy",o.target.value),c(r)}return e.jsxs(Y,{value:s,onChange:i,children:[e.jsx("option",{value:"is_new-desc",children:"New Arrivals"}),e.jsx("option",{value:"price-asc",children:"Price (Lowest to Highest)"}),e.jsx("option",{value:"price-desc",children:"Price (Highest to Lowest)"})]})}function X(){const[r]=m(),{collectionSlug:c}=S(),s=r.get("q")||"a",i=r.get("sortBy")||"is_new-desc",[o,n]=i.split("-"),a={field:o,direction:n},l=["brand","category","color","type"].map(t=>{const u=r.getAll(t);return u.length===0?{field:t,values:null}:{field:t,values:u}}),{isLoading:h,data:g,error:x}=k({queryKey:["search",s,l,c,a],queryFn:()=>T({searchQuery:s,filters:l,collectionSlug:c,sortBy:a}),retry:!1});return{isLoading:h,products:g,error:x}}function Z(r){return O({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"},child:[]}]})(r)}const ee=d.div`
    display: grid;
    grid-template-columns:1fr 4fr;
    grid-template-rows:2rem auto;
    gap: 4rem;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,re=d.div`
    grid-row:span 2;
`,te=d.div`
    align-self:flex-start;
    justify-self:end;
`,ne=d.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
`;function de(){return e.jsxs(ee,{children:[e.jsx(re,{children:e.jsx(W,{})}),e.jsx(te,{children:e.jsx(J,{})}),e.jsx(se,{})]})}function se(){const{isLoading:r,products:c}=X(),s=z(),[i]=m();if(r||!c)return e.jsx(L,{});if(c.length===0){const n=`We couldn’t find anything for "${i.get("q")||""}". Try different keywords or browse all products.`;return e.jsx(R,{icon:e.jsx(Z,{}),title:"No results found",message:n,buttonText:"Browse Products",onButtonClick:()=>s("/shop")})}return e.jsx(ne,{children:c.map(o=>e.jsx(K,{size:"sm",product:o},o.product_id))})}export{de as P,X as u};
