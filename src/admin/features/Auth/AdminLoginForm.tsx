import { useState } from "react";
import useAdminLogin from "./useAdminLogin";
import Form from "../../../ui/Form";
import FormRowVertical from "../../../ui/FormRowVertical";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import SpinnerMini from "../../../ui/SpinnerMini";


function AdminLoginForm() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("pass@123");

  const { login, isPending } = useAdminLogin()

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
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
          required
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
            required
          />
      </FormRowVertical>
      <FormRowVertical>
        <>
          <Button
            size="large"
            disabled={isPending}
          >
            {isPending ? <SpinnerMini /> : "Log In"}</Button>
        </>
      </FormRowVertical>
    </Form>
  );
}

export default AdminLoginForm;
