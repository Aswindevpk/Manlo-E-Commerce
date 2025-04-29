import{r as a,j as t,d as o,i as d,L as m}from"./index-DRfNn9gb.js";const f=o.img`
  aspect-ratio: 3/4;
  width: 100%;
  object-fit: cover;
  height: auto; 
  position: absolute;
`,x=o.div`
    width: 100%;
    aspect-ratio: 3/4;
    position: relative;
    overflow: hidden;
`;function p({images:e}){const[n,i]=a.useState(0),[c,l]=a.useState(!1);return a.useEffect(()=>{if(!c){i(0);return}const s=setInterval(()=>{i(r=>(r+1)%e.length)},1e3);return()=>clearInterval(s)},[c,e.length]),t.jsx(x,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:e.map((s,r)=>t.jsx(f,{src:s.image_url,alt:`Product Image ${r+1}`,style:{opacity:r===n?1:0}},r))})}const u=o(m)`
  width: ${e=>e.size==="sm"?"270px":"370px"};
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.8rem;
`,h=o.div`
  position: absolute;
  color: white;
  background-color:var(--color-brand-600);
  font-weight:500;
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
`,g=o.div`
  min-width:270px;
  display: flex;
  flex-direction: column;
`,v=o.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  letter-spacing: 1px;
  text-transform:uppercase;
  font-weight:300;
`,j=o.p`
  font-size: 1.6rem;
  text-transform:capitalize;
  color: var(--color-brand-800);
  font-weight: 400;
  font-family:var(--font-secondary);
`,w=o.p`
  font-family:var(--font-secondary);
  font-size: 1.8rem;
  color: var(--color-brand-800);
`;function I({product:e,size:n="md"}){return t.jsxs(u,{to:`/product/${e.slug}`,size:n,children:[t.jsx(p,{images:e.images}),t.jsxs(g,{children:[t.jsx(v,{children:e.brand}),t.jsx(j,{children:e.product_name.toUpperCase()}),t.jsx(w,{children:d(e.price)})]}),(e==null?void 0:e.is_new)&&t.jsx(h,{children:"new"})]})}export{I as P};
