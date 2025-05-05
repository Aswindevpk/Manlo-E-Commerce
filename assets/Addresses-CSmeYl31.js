import{e as c,g as m,s as x,j as e,M as i,R as p,B as o,w as u,d as a,h}from"./index-KJ9wKMvK.js";import{G as j}from"./index-j8Xlr1kn.js";import{C as f}from"./ConfirmDelete-DdOSWqb1.js";import{A as l,u as g}from"./useGetAddressList-CuGUEEdh.js";function A(){const s=c(),{mutate:r,isPending:n}=m({mutationFn:async t=>{const{error:d}=await x.from("addresses").delete().eq("id",t);if(d)throw new Error(d.message);return t},onSuccess:()=>{s.invalidateQueries({queryKey:["addresses"]})}});return{deleteAddress:r,isDeleting:n}}const w=a.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 100px;
  max-height: 200px;
  padding: 1.5rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e7eb;
`;function b({address:s}){const{isDeleting:r,deleteAddress:n}=A(),t=`${s.first_name} ${s.last_name} - ${s.phone}`,d=`${s.line1}, ${s.line2}, ${s.city} - ${s.pincode}`;return e.jsxs(w,{children:[e.jsxs("div",{children:[e.jsxs("h5",{children:["Recipent : ",t]}),e.jsxs("h5",{children:["Address  : ",d]})]}),e.jsx(i,{children:e.jsxs(p,{type:"vertical",children:[e.jsx(i.Open,{opens:"delete",children:e.jsx(o,{size:"small",children:e.jsx(j,{size:20})})}),e.jsx(i.Window,{name:"delete",children:e.jsx(f,{resourceName:"address",disabled:r,onConfirm:()=>{s.id&&n(s.id)}})}),e.jsx(i.Open,{opens:"edit",children:e.jsx(o,{size:"small",children:e.jsx(u,{size:20})})}),e.jsx(i.Window,{name:"edit",children:e.jsx(l,{addressToEdit:s})})]})})]})}const y=a.section`
    display: grid;
    margin: 4rem 0rem;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;function z(){const{addressList:s,isLoading:r}=g();return r||!s?e.jsx(h,{}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Saved Addresses"}),e.jsx(y,{children:s.map(n=>e.jsx(b,{address:n},n.id))}),e.jsxs(i,{children:[e.jsx(i.Open,{opens:"cabin-form",children:e.jsx(o,{type:"submit",children:"Add New Address"})}),e.jsx(i.Window,{name:"cabin-form",children:e.jsx(l,{addressToEdit:{id:null}})})]})]})}export{z as default};
