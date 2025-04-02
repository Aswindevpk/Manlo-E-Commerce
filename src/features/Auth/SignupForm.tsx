import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useSignup from "./useSignup";
import { Link } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("pass@123");
  const [confirmPassword, setConfirmPassword] = useState("pass@123");

  const { signup, isPending } = useSignup()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !password || !confirmPassword) return
    
    signup({ email, password },{
      onSettled:()=>{
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
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label="Confirm Password">
        <Input
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button
          size="large"
          disabled={isPending}
        >
          {isPending ? <SpinnerMini /> : "Sign Up"}</Button>
      </FormRowVertical>
      <Link to="/login">login</Link>
    </Form>
  );
}

export default SignupForm;
