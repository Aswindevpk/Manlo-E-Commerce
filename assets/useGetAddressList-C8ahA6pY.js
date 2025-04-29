import{e as y,f as g,g as f,s as m,x as S,j as e,B as _,S as x,d as j,u as C}from"./index-B8BJ-eIj.js";function F(){const r=y(),{user:t}=g(),{mutate:a,isPending:u}=f({mutationFn:async({newAddress:i})=>{const l={...i,user_id:t==null?void 0:t.id},{data:d,error:s}=await m.from("addresses").insert([l]).select().single();if(s)throw new Error(s.message);return d},onSuccess:()=>{r.invalidateQueries({queryKey:["addresses"]})}});return{createAddress:a,isCreating:u}}function L(){const r=y(),{mutate:t,isPending:a}=f({mutationFn:async({id:u,newAddressData:i})=>{const{data:l,error:d}=await m.from("addresses").update(i).eq("id",u).select().single();if(d)throw new Error(d.message);return l},onSuccess:()=>{r.invalidateQueries({queryKey:["addresses"]})}});return{editAddress:t,isEditing:a}}const P=j.form`
  padding: 2.4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 2rem;
  min-width: 280px;

  > div:nth-child(3),
  > div:nth-child(4) {
    grid-column: span 2;
  }

  > div:last-child {
    grid-column: span 2;
    justify-self: start;
  }

  p {
    color: red;
    font-size: 1.2rem;
    margin-top: 0.4rem;
  }
`,c=j.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
`;function Q({addressToEdit:r}){var p;const t=!!(r!=null&&r.id),{id:a,...u}=r||{},{register:i,reset:l,handleSubmit:d,formState:{errors:s}}=S({defaultValues:t?u:{first_name:"",last_name:"",line1:"",line2:"",city:"",state:"",pincode:"",phone:""}}),{createAddress:q,isCreating:b}=F(),{editAddress:v,isEditing:A}=L(),n=b||A,w=o=>{const h={first_name:o.first_name,last_name:o.last_name,line1:o.line1,line2:o.line2,city:o.city,state:o.state,pincode:o.pincode,phone:o.phone};t&&a?v({id:a,newAddressData:h},{onSuccess:()=>{l()}}):q({newAddress:h},{onSuccess:()=>l()})};return e.jsxs(P,{onSubmit:d(w),children:[e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"First Name",disabled:n,...i("first_name",{required:"First name is required"})}),s.first_name&&e.jsx("p",{children:s.first_name.message})]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"Last Name",disabled:n,...i("last_name",{required:"Last name is required"})}),s.last_name&&e.jsx("p",{children:s.last_name.message})]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"Address Line 1",disabled:n,...i("line1",{required:"Address is required"})}),s.line1&&e.jsx("p",{children:s.line1.message})]}),e.jsx("div",{children:e.jsx(c,{type:"text",placeholder:"Address Line 2",disabled:n,...i("line2")})}),e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"City",disabled:n,...i("city",{required:"City is required"})}),s.city&&e.jsx("p",{children:s.city.message})]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"State",disabled:n,...i("state",{required:"State is required"})}),s.state&&e.jsx("p",{children:s.state.message})]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"Pincode",disabled:n,...i("pincode",{required:"Pincode is required",pattern:{value:/^[0-9]{6}$/,message:"Invalid pincode format"}})}),s.pincode&&e.jsx("p",{children:s.pincode.message})]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",placeholder:"Phone Number",disabled:n,...i("phone",{required:"Phone number is required",pattern:{value:/^[0-9]{10}$/,message:"Invalid phone number"}})}),(s==null?void 0:s.phone)&&e.jsx("p",{children:(p=s==null?void 0:s.phone)==null?void 0:p.message})]}),e.jsx("div",{children:e.jsx(_,{disabled:n,type:"submit",children:t?n?e.jsx(x,{}):"Update Address":n?e.jsx(x,{}):"Add Address"})})]})}function B(){const{user:r}=g(),t=r==null?void 0:r.id,{isLoading:a,data:u,error:i}=C({queryKey:["addresses"],queryFn:async()=>{if(!t)return null;const{data:l,error:d}=await m.from("addresses").select("*").eq("user_id",t);if(d)throw new Error(d.message);return l},enabled:!!t});return{addressList:u,isLoading:a,error:i}}export{Q as A,B as u};
