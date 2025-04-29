import{j as e,o as s,p as t,q as a,O as o,d as r,N as n}from"./index-B8BJ-eIj.js";const d=r.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,c=r.div`
  background-color:var(--color-grey-200);
  margin: 0rem 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 500px;
  height: 100%;

  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    flex-direction: row;
    height: 6rem;
    min-height: auto;
    width: 100%;
    justify-content: center;
  }
`,l=r.section`
  width: 100%;
  padding: 2rem;
`,i=r(n)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    gap: 0.5rem;
  }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-800);
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-800);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-800);
  }
`;function h(){return e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsxs(i,{to:"account",children:[e.jsx(s,{}),e.jsx("span",{children:"Account"})]}),e.jsxs(i,{to:"addresses",children:[e.jsx(t,{}),e.jsx("span",{children:"Addresses"})]}),e.jsxs(i,{to:"orders",children:[e.jsx(a,{}),e.jsx("span",{children:"Orders"})]})]}),e.jsx(l,{children:e.jsx(o,{})})]})}export{h as default};
