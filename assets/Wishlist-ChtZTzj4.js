import{f as r,u,b as d,j as t,h as m,C as c,R as p,B as h,d as f}from"./index-KJ9wKMvK.js";import{a as x,u as j}from"./useDeleteWishlist-DaxjpuSe.js";import{P as y}from"./ProductItem-BTuBiTdJ.js";import{E as g}from"./EmptyState-ijO7v6Yj.js";function v(){const{user:s}=r(),e=s==null?void 0:s.id,{isLoading:n,data:o,error:i}=u({queryKey:["allWishlist"],queryFn:()=>x({userId:e}),enabled:!!e});return{wishlist:o,isLoading:n,error:i}}const W=f.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    gap: 4rem;
`;function I(){const{wishlist:s,isLoading:e}=v(),{removeFromWishlist:n,isRemoving:o}=j(),{user:i}=r(),l=d();return e||!s?t.jsx(m,{}):s.length===0?t.jsx(g,{icon:t.jsx(c,{}),title:"Your Wishlist is empty",message:"Start adding items to your wishlist now!",buttonText:"Shop Now",onButtonClick:()=>l("/")}):t.jsx(W,{children:s==null?void 0:s.map(a=>t.jsxs(p,{type:"vertical",children:[t.jsx(y,{product:a,size:"sm"}),t.jsx(h,{onClick:()=>n({unitId:a.unit_id,userId:i==null?void 0:i.id}),disabled:o,children:"Remove"})]},a.id))})}export{I as default};
