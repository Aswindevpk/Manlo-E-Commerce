import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styledforgotpass = styled(Link)`
   align-self: end;
`;

const StyledRedirect = styled.p`
   align-self: center;
`;

const StyledRedirectLink = styled(Link)`
   text-decoration:underline;
   font-weight:500;
   color:var(--color-brand-800);
`;

function LoginForm() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("pass@123");

  const { login, isPending } = useLogin()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !password) return
    login({ email, password }, {
      onSettled: () => {
        setEmail("")
        setPassword("")
      }
    })
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
          required
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
            required
          />
          <Styledforgotpass to="/forgot-pass">forgot password?</Styledforgotpass>
        </>
      </FormRowVertical>
      <FormRowVertical>
        <>
          <Button
            size="large"
            disabled={isPending}
          >
            {isPending ? <SpinnerMini /> : "Log In"}</Button>
          <StyledRedirect>Don't have an account? <StyledRedirectLink to="/signup">signup</StyledRedirectLink></StyledRedirect>
        </>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
