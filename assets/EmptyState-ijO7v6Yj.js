import{j as r,B as s,d as e}from"./index-KJ9wKMvK.js";const a=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
`,l=e.h2`
  font-size: 2.4rem;
  color: var(--color-dark-gray);
`,d=e.p`
  font-size: 1.4rem;
  color: var(--color-muted-blue);
  margin-bottom: 20px;
`,m=e.div`
  margin-bottom: 1rem;

  svg {
    width: 60px;
    height: 60px;
    color: var(--color-brand-600);
  }
`,x=({icon:n,title:i,message:c,buttonText:t,onButtonClick:o})=>r.jsxs(a,{children:[r.jsx(m,{children:n}),r.jsx(l,{children:i}),r.jsx(d,{children:c}),t&&o&&r.jsx(s,{onClick:o,children:t})]});export{x as E};
