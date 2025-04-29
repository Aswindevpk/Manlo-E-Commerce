import{j as e,H as c,B as d,d as l,e as m,g as x,s as p,M as i,R as h,t as u,h as j}from"./index-B8BJ-eIj.js";import{G as f}from"./index-CBe1mJnJ.js";import{A as a,u as g}from"./useGetAddressList-C8ahA6pY.js";const y=l.div`
  width: clamp(250px, 70vw, 400px);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

`;function w({resourceName:s,onConfirm:r,disabled:n,onCloseModal:t}){return e.jsxs(y,{children:[e.jsxs(c,{as:"h3",children:["Delete ",s]}),e.jsxs("p",{children:["Are you sure you want to delete this ",s," permanently? This action cannot be undone."]}),e.jsxs("div",{children:[e.jsx(d,{variation:"secondary",disabled:n,onClick:t,children:"Cancel"}),e.jsx(d,{variation:"danger",disabled:n,onClick:r,children:"Delete"})]})]})}function A(){const s=m(),{mutate:r,isPending:n}=x({mutationFn:async t=>{const{error:o}=await p.from("addresses").delete().eq("id",t);if(o)throw new Error(o.message);return t},onSuccess:()=>{s.invalidateQueries({queryKey:["addresses"]})}});return{deleteAddress:r,isDeleting:n}}const b=l.div`
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
`;function v({address:s}){const{isDeleting:r,deleteAddress:n}=A(),t=`${s.first_name} ${s.last_name} - ${s.phone}`,o=`${s.line1}, ${s.line2}, ${s.city} - ${s.pincode}`;return e.jsxs(b,{children:[e.jsxs("div",{children:[e.jsxs("h5",{children:["Recipent : ",t]}),e.jsxs("h5",{children:["Address  : ",o]})]}),e.jsx(i,{children:e.jsxs(h,{type:"vertical",children:[e.jsx(i.Open,{opens:"delete",children:e.jsx(d,{size:"small",children:e.jsx(f,{size:20})})}),e.jsx(i.Window,{name:"delete",children:e.jsx(w,{resourceName:"address",disabled:r,onConfirm:()=>{s.id&&n(s.id)}})}),e.jsx(i.Open,{opens:"edit",children:e.jsx(d,{size:"small",children:e.jsx(u,{size:20})})}),e.jsx(i.Window,{name:"edit",children:e.jsx(a,{addressToEdit:s})})]})})]})}const C=l.section`
    display: grid;
    margin: 4rem 0rem;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;function z(){const{addressList:s,isLoading:r}=g();return r||!s?e.jsx(j,{}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Saved Addresses"}),e.jsx(C,{children:s.map(n=>e.jsx(v,{address:n},n.id))}),e.jsxs(i,{children:[e.jsx(i.Open,{opens:"cabin-form",children:e.jsx(d,{type:"submit",children:"Add New Address"})}),e.jsx(i.Window,{name:"cabin-form",children:e.jsx(a,{addressToEdit:{id:null}})})]})]})}export{z as default};
