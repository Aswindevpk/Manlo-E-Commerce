import{u,r as p,a as w,b as E,j as e,S as q,d as i,V as x,c as b,e as A,f as S,g as F,A as W,G as R,C as _,B as K,h as P,i as M,k as y,H as C,s as U,l as G}from"./index-B8BJ-eIj.js";import{g as V,a as D,b as N,c as T,d as $,e as Q}from"./apiProduct-DXyLiVzx.js";import{A as H,G as I,u as O}from"./useDeleteWishlist-B7FM996h.js";import{P as Y}from"./ProductItem-CTTYf3pq.js";import{u as J}from"./useGetProducts-DxgcHRPJ.js";import{E as X}from"./EmptyState-CKjW8p0-.js";function Z({productId:r}){const{isLoading:t,data:s,error:n}=u({queryKey:["color",r],queryFn:()=>V({productId:r}),enabled:!!r,retry:!1});return{isLoading:t,colors:s,error:n}}const ee=i.div`
  display: flex;
  gap: 2rem;
`,re=i.button`
    aspect-ratio:1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    font-size: 1.4rem;
    background-color:transparent;
    border: 1px ${({selected:r})=>r?"solid":"transparent"};
    transition: all 0.3s ease;
`,te=i.div`
    aspect-ratio:1/1;
    width: 1.5rem;
    border: 1px solid var(--color-grey-400);
    background-color: ${({color:r})=>r};
`;function se({productId:r,selectedColorId:t}){const[s,n]=p.useState(t||""),{isLoading:o,colors:a}=Z({productId:r}),[c,l]=p.useState(!1),{productSlug:g}=w(),j=E();p.useEffect(()=>{t!==s&&n(t)},[t,s]);async function m(d){n(d),l(!0);try{const f=await D({productId:r,colorId:d});if(f.slug===g){l(!1);return}l(!1),j(`/product/${f.slug}?unit=${f.unit_id}`)}catch(f){x.error("error changing color"),console.log(f),l(!1)}}return o||!a||c?e.jsx(q,{}):!a||a.length===0?e.jsx("p",{children:"No colors available"}):e.jsx(ee,{children:a.map(d=>e.jsx(re,{selected:d.id===s,disabled:c,onClick:()=>m(d.id),children:e.jsx(te,{color:d.hex_code})},d.id))})}function ne(r){const{isLoading:t,data:s,error:n}=u({queryKey:["sizes",r],queryFn:()=>N({sizeCategoryId:r}),enabled:!!r,retry:!1});return{isLoading:t,sizes:s,error:n}}function ie(r){const{isLoading:t,data:s,error:n}=u({queryKey:["productItemsizes",r],queryFn:()=>T({variantId:r}),enabled:!!r,retry:!1}),o=new Set(s==null?void 0:s.map(a=>a));return{isLoading:t,availableSizes:o,error:n}}function oe(r,t){const{isLoading:s,data:n,error:o}=u({queryKey:["productUnit",r,t],queryFn:()=>$({variantId:r,sizeId:t}),enabled:!!t&&!!r,retry:!1});return{isLoading:s,productUnit:n,error:o}}const ae=i.div`
  display: flex;
  gap: 2rem;
`,ce=i.button`
    aspect-ratio:1/1;
    width: 4rem;
    font-size: 1.4rem;
      /* Disabled state styles */
    &:disabled {
        opacity: 0.5; /* Make it visually faded */
        cursor: not-allowed; /* Show 'not-allowed' cursor */
        border: 1px solid #ccc; /* Light gray border */
    }
    
    background-color: transparent;
    border: 1px ${({selected:r})=>r?"solid":"transparent"};
    transition: all 0.3s ease;
`;function de({parentCategoryId:r,variantId:t}){const{isLoading:s,sizes:n}=ne(r),{availableSizes:o}=ie(t),[a,c]=p.useState(),[l,g]=b(),{isLoading:j,productUnit:m}=oe(t,a);return p.useEffect(()=>{if(m){const d=new URLSearchParams(l);d.set("unit",m.id.toString()),g(d,{replace:!1})}},[m,l,g,j]),s||!n?e.jsx(q,{}):e.jsx(ae,{children:n.map(d=>e.jsx(ce,{disabled:!o.has(d.id),selected:d.id===a,onClick:()=>c(d.id),children:d.name},d.id))})}const le=i.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`,ue=i.img`
    width: 100%;
    height: 550px;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 250px;
  }
`;function ge({images:r}){return e.jsx(le,{children:r.map(t=>e.jsx(ue,{src:t.image_url}))})}function me(){const r=A(),[t]=b(),s=t.get("unit"),{user:n}=S(),o=n==null?void 0:n.id,{mutate:a,isPending:c}=F({mutationFn:()=>W({variationId:s,userId:o}),onSuccess:()=>{Promise.all([r.invalidateQueries({queryKey:["cartCount"]}),r.invalidateQueries({queryKey:["cart"]})]),x.success("Added to Cart!")},onError:l=>x.error(l.message)});return{addCart:a,isAddingToCart:c}}function fe(){const r=A(),{mutate:t,isPending:s}=F({mutationFn:H,onSuccess:()=>{r.invalidateQueries({queryKey:["allWishlist"]}),r.invalidateQueries({queryKey:["wishlist"]}),x.success("Added to wishlist!")},onError:()=>x.error("Failed to add to wishlist")});return{addToWishlist:t,isAdding:s}}function he(){const[r]=b(),t=r.get("variation"),{user:s}=S(),n=s==null?void 0:s.id,{isLoading:o,data:a,error:c}=u({queryKey:["wishlist"],queryFn:()=>I({userId:n,variationId:t}),enabled:!!n&&!!t});return{wishlistItem:a,isLoading:o,error:c}}function pe(r){return R({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"},child:[]}]})(r)}function z(r){return R({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"},child:[]}]})(r)}const xe=i.button`
    background-color:transparent;
    border: none;
`;function ye({unitId:r}){const{wishlistItem:t}=he(),{addToWishlist:s,isAdding:n}=fe(),{removeFromWishlist:o,isRemoving:a}=O(),{user:c}=S(),l=c==null?void 0:c.id,g=()=>{t?o({unitId:r,userId:l}):s({unitId:r,userId:l})};return e.jsx(xe,{onClick:g,disabled:n||a||!r,children:t?e.jsx(pe,{fontSize:30}):e.jsx(_,{fontSize:30})})}const be=i.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;function je(){const[r]=b(),{addCart:t,isAddingToCart:s}=me();let n=null;return r&&(n=r.get("unit")),e.jsxs(be,{children:[e.jsx(K,{onClick:()=>t(),disabled:s||!n,size:"large",children:n?"Add to Cart":"Select a Size"}),e.jsx(ye,{unitId:n})]})}function B(){const{productSlug:r}=w(),{isLoading:t,data:s,error:n}=u({queryKey:["product",r],queryFn:()=>Q({productSlug:r}),enabled:!!r,retry:!1});return{isLoading:t,productData:s,error:n}}function ve(){const{isLoading:r,productData:t}=B();return r||!t?e.jsx(P,{}):e.jsxs(we,{children:[e.jsx(ge,{images:t.images}),e.jsxs(Se,{children:[e.jsxs("div",{children:[e.jsx(Pe,{children:t.brand}),e.jsx(Ce,{children:t.name.toUpperCase()}),e.jsxs(ze,{children:[M(t.price),"/-"]}),e.jsx(ke,{children:"MRP including all taxes."})]}),e.jsx(y,{}),e.jsxs(v,{children:[e.jsx(h,{children:"Colors"}),e.jsx(se,{productId:t.product_id,selectedColorId:t.color_id})]}),e.jsx(y,{}),e.jsxs(v,{children:[e.jsx(h,{children:"sizes"}),e.jsx(de,{parentCategoryId:t.parent_category_id,variantId:t.id})]}),e.jsx(je,{}),e.jsxs(v,{children:[e.jsxs(h,{children:["SKU : ",t.sku]}),e.jsxs(h,{children:["Description : ",t.description]}),e.jsxs(h,{children:["care Instruction : ",t.care_instruction]})]})]})]})}const we=i.main`
    padding: 4rem 0;
    display: grid;
    gap: 3rem;
    grid-template-columns: 60vw 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
  }
`,Se=i.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,v=i.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,Pe=i.p`
    font-size: 12px;
    letter-spacing:1px;
    text-transform: uppercase;
    color: var(--color-grey-500);
`,Ce=i.h3`
    font-size: 24px;
    font-weight:600;
    font-family:var(--font-secondary);
    color: var(--color-brand-700);
`,ze=i.span`
    font-size: 20px;
    font-weight:600;
    font-family:var(--font-secondary);
    color: var(--color-brand-700);
`,ke=i.span`
    padding-left:1rem;
    font-size: 10px;
    color: var(--color-grey-500);
`,h=i.p`
    font-size: 14px;
    color: var(--color-grey-500);
    text-transform:uppercase;
`,Le=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,qe=i.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  padding: 4rem 0;
  gap: 4rem;
  overflow: hidden;
  overflow-x: auto; /* Enables horizontal scrolling */
  white-space: nowrap; /* Prevents items from wrapping */
  scrollbar-width: thin; /* Firefox scrollbar */
  scrollbar-color: #888 #f1f1f1;

  scroll-snap-type: x mandatory;
    scroll-snap-align: start;

  &::-webkit-scrollbar {
    height: 4px; /* Adjust scrollbar height */
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;function Ae(){const{productData:r}=B(),{isLoading:t,products:s}=J({brand:r==null?void 0:r.brand});return t?e.jsx(P,{}):e.jsxs(e.Fragment,{children:[e.jsxs(C,{center:!0,as:"h2",children:["MORE FROM ",r==null?void 0:r.brand.toUpperCase()]}),e.jsx(Le,{children:e.jsx(qe,{children:s==null?void 0:s.map(n=>e.jsx(Y,{size:"sm",product:n},n.product_id))})})]})}async function Fe({productSlug:r}){if(!r)throw new Error("ProductSlug not found");const{data:t,error:s}=await U.from("reviews_view").select("*").eq("product_slug",r);if(s)throw new Error(s.message);return t}function Re(){const{productSlug:r}=w(),{isLoading:t,data:s,error:n}=u({queryKey:["reviews",r],queryFn:()=>Fe({productSlug:r}),enabled:!!r,retry:!1});return{reviews:s,isLoading:t,error:n}}function Be(r){return(r.reduce((s,n)=>s+n.rating,0)/r.length).toFixed(1)}function Ee(r){const t=[0,0,0,0,0];return r.forEach(s=>t[s.rating-1]++),t.reverse()}function We(){const{isLoading:r,reviews:t}=Re();if(r||!t)return e.jsx(P,{});if(t.length===0)return e.jsx(X,{icon:e.jsx(G,{}),title:"No Review Yet",message:"Buy now and Your Review!"});const s=Be(t),n=Ee(t);return e.jsx(_e,{children:e.jsxs(Ke,{children:[e.jsxs(Me,{children:[e.jsx(C,{as:"h2",children:"Average Rating"}),e.jsx(Ue,{children:s}),e.jsx(k,{children:Array.from({length:5}).map((o,a)=>e.jsx(z,{size:20,color:a<Math.round(Number(s))?"#fbbf24":"#ffffff",fill:a<Math.round(Number(s))?"#fbbf24":"none"},a))}),e.jsxs(Ge,{children:[t.length," reviews"]}),e.jsx(Ve,{children:n.map((o,a)=>{const c=5-a;return e.jsxs(De,{children:[e.jsxs("span",{children:[c," star"]}),e.jsx(Ne,{children:e.jsx(Te,{style:{width:`${o/t.length*100}%`}})}),e.jsx("span",{children:o})]},c)})})]}),e.jsx($e,{children:t.map(o=>e.jsxs(Qe,{children:[e.jsx(He,{children:o.username}),e.jsx(k,{children:Array.from({length:5}).map((a,c)=>e.jsx(z,{size:12,color:c<o.rating?"#fbbf24":"#e5e7eb",fill:c<o.rating?"#fbbf24":"none"},c))}),e.jsxs(Ie,{children:['"',o.comment,'"']})]},o.id))})]})})}const _e=i.div`
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ke=i.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Me=i.div`
  padding: 2rem;
`,Ue=i.div`
  font-size: 3rem;
  font-weight: bold;
  font-family: var(--font-secondary);
  margin: 1rem 0;
`,k=i.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`,Ge=i.p`
  color: var(--color-grey-600);
  font-family: var(--font-secondary);
  font-size: 1.6rem;
`,Ve=i.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,De=i.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;
`,Ne=i.div`
  flex: 1;
  height: 8px;
  background: var(--color-brand-100);
  border-radius: 8px;
  overflow: hidden;
`,Te=i.div`
  height: 100%;
  background: var(--color-brand-600);
`,$e=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  gap: 2.4rem;
`,Qe=i.div`
  background-color: var(--color-grey-0);
  /* border: 1px solid #e5e7eb; */
  height: fit-content;
  border-radius: 1rem;
  padding: 2.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,He=i.h4`
 text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,Ie=i.p`
  font-size: 1.4rem;
  color: var(--color-brand-600);
  line-height: 1.4;
`,L=i.div`
    padding: 4rem 0rem;
`;function rr(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsx(y,{}),e.jsx(L,{children:e.jsx(Ae,{})}),e.jsx(y,{}),e.jsxs(L,{children:[e.jsx(C,{as:"h2",center:!0,children:"REVIEWS"}),e.jsx(We,{})]})]})}export{rr as default};
