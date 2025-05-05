import{j as e,H as l,B as o,d}from"./index-KJ9wKMvK.js";const a=d.div`
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

`;function x({actionName:n="Delete",resourceName:i,onConfirm:s,disabled:r,onCloseModal:t}){return e.jsxs(a,{children:[e.jsxs(l,{as:"h3",children:[n," ",i]}),e.jsxs("p",{children:["Are you sure you want to ",n," this ",i,"? This action cannot be undone."]}),e.jsxs("div",{children:[e.jsx(o,{variation:"secondary",disabled:r,onClick:t,children:"Cancel"}),e.jsxs(o,{variation:"danger",disabled:r,onClick:s,children:["Yes, ",n]})]})]})}export{x as C};
