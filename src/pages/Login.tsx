import styled from "styled-components";
import Heading from "../ui/Heading";
import LoginForm from "../features/Auth/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Logo = styled.h3`
  font-size: 4rem;
  font-weight: 800;
`

function Login() {
  return (
  <LoginLayout>
    <Logo>MANLO</Logo>
    <Heading as="h3">Log in to your Account</Heading>
    <LoginForm />
  </LoginLayout>
  )
}

export default Login;
