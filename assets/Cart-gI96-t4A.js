import{G as j,e as x,g as m,w as y,V as c,j as e,d as i,U as f,B as d,i as C,k as l,L as g,b as v,h as w,q as b}from"./index-DRfNn9gb.js";import{u as P}from"./useCart-I-ZiiaNN.js";import{E as S}from"./EmptyState-alGSbvmm.js";function Q(r){return j({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(r)}function E(){const r=x(),{mutate:t,isPending:n}=m({mutationFn:y,onSuccess:()=>{c.success("Item removed from cart"),Promise.all([r.invalidateQueries({queryKey:["cartCount"]}),r.invalidateQueries({queryKey:["cart"]})])},onError:()=>{c.error("Failed to remove item from cart")}});return{removeFromCart:t,isRemoving:n}}const R=i.button`
    background-color:transparent;
    border: none;
`;function k({cartId:r}){const{isRemoving:t,removeFromCart:n}=E();return e.jsx("div",{children:e.jsx(R,{onClick:()=>n(r),disabled:t,children:e.jsx(Q,{size:20})})})}function q(){const r=x(),{mutate:t,isPending:n}=m({mutationFn:f,onSuccess:()=>{Promise.all([r.invalidateQueries({queryKey:["cartCount"]}),r.invalidateQueries({queryKey:["cart"]})])},onError:s=>{c.error(s.message)}});return{updateCartQuantity:t,isPending:n}}const F=i.div`
   display: flex;
   max-width: 100px;
   gap: 1rem;
`;function T({cartItemId:r,itemQty:t}){const{updateCartQuantity:n,isPending:s}=q();function p(){const o=t+1;n({cartItemId:r,newQty:o})}function h(){if(t>1){const o=t-1;n({cartItemId:r,newQty:o})}}return e.jsxs(F,{children:[e.jsx(d,{size:"small",onClick:()=>p(),disabled:s,children:"+"}),e.jsx("span",{children:t}),e.jsx(d,{size:"small",onClick:()=>h(),disabled:s,children:"-"})]})}function z({Item:r}){return e.jsxs(L,{children:[e.jsxs(H,{children:[e.jsx(B,{src:r.image}),e.jsxs(N,{children:[e.jsx("h3",{children:r.name}),e.jsx(O,{children:C(r.price)}),e.jsxs("p",{children:[r.size,"/",r.color]})]})]}),e.jsx(T,{itemQty:r.qty,cartItemId:r.id}),e.jsx(k,{cartId:r.id})]})}const L=i.div`
    border: 2px solid var(--color-brand-100);
    border-radius:8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem 2rem;
`,B=i.img`
    border-radius: 4px;
    width: 90px;
    height: 120px;
`,H=i.div`
   display: flex;
   gap: 1rem;
`,N=i.div`
   display: flex;
   flex-direction: column;
   max-width: 200px;
   gap: 1rem;
`,O=i.h5`
    font-family: var(--font-secondary);
`,U=i.div`
    width: 100%;
`,a=i.div`
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-between;
`;function A({cartItems:r}){const t=r.reduce((n,s)=>n+s.price*s.qty,0);return e.jsxs(U,{children:[e.jsx(a,{children:e.jsx("p",{children:"ENTER COUPON CODE"})}),e.jsx(l,{}),e.jsxs(a,{children:[e.jsx("p",{children:"SUB TOTAL"}),e.jsxs("p",{children:["₹ ",t]})]}),e.jsxs(a,{children:[e.jsx("p",{children:"SHIPPING"}),e.jsx("p",{children:"FREE"})]}),e.jsx(l,{}),e.jsxs(a,{children:[e.jsx("h2",{children:"TOTAL"}),e.jsxs("p",{children:["₹ ",t]})]}),e.jsx(g,{to:"/checkout",children:e.jsx(d,{style:{width:"100%"},size:"medium",children:"Proceed to Checkout"})})]})}const K=i.main`
    display: flex;
    gap: 10rem;
    flex-wrap: wrap;
    justify-content: space-between;
`,u=i.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`,D=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;function I(){const{isLoading:r,cartItems:t}=P(),n=v();return r||!t?e.jsx(w,{}):t.length===0?e.jsx(S,{icon:e.jsx(b,{}),title:"Your cart is empty",message:"Start adding items to your cart now!",buttonText:"Shop Now",onButtonClick:()=>n("/")}):e.jsxs(K,{children:[e.jsxs(u,{children:[e.jsx("h2",{children:"Shopping cart"}),e.jsx(D,{children:t.map(s=>e.jsx(z,{Item:s},s.id))})]}),e.jsxs(u,{children:[e.jsx("h2",{children:"Summary"}),e.jsx(A,{cartItems:t})]})]})}export{I as default};
