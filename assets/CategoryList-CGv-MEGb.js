import{j as i,d as s,s as c,u,h as g,L as l}from"./index-B8BJ-eIj.js";const a=s.li`
  position: relative;
  width: 200px; /* Fixed width */
  height: 125px; /* Fixed height */
  overflow: hidden;
  cursor: pointer;
  border-radius: var(--border-radius-lg);
`,p=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${a}:hover & {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
    opacity: 0.8; /* Reduced opacity */
  }
`,f=s.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  ${a}:hover & {
    background: rgba(0, 0, 0, 0.4);
  }
`;function h({category:e}){return i.jsxs(a,{children:[i.jsx(p,{src:e.image}),i.jsx(f,{children:e.name})]})}async function y(){const{data:e,error:r}=await c.from("categories").select("*,parent:parent_id(id,slug)").eq("is_listed",!0);if(r||!e)throw new Error("Categories error");return e}function x(){const{isLoading:e,data:r,error:t}=u({queryFn:y,queryKey:["categories"],retry:!1});return{isLoading:e,categories:r,error:t}}function m({collectionSlug:e}){const{isLoading:r,categories:t}=x(),o=e?t==null?void 0:t.filter(n=>{var d;return((d=n.parent)==null?void 0:d.slug)===e}):t==null?void 0:t.filter(n=>n.parent_id===null);return{isLoading:r,categories:o}}const w=s.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8rem;
`;function b({collectionSlug:e=null}){const{isLoading:r,categories:t}=m({collectionSlug:e});return r?i.jsx(g,{}):t?i.jsx(w,{children:t.map(o=>i.jsx(l,{to:`/collection/${o.slug}`,children:i.jsx(h,{category:o},o.id)},o.id))}):null}export{b as C};
