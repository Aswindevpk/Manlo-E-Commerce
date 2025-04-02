import styled from "styled-components";
import Heading from "../ui/Heading";
import SignupForm from "../features/Auth/SignupForm";

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

function Signup() {
  return (
  <LoginLayout>
    <Logo>MANLO</Logo>
    <Heading as="h3">Create a New Account</Heading>
    <SignupForm />
  </LoginLayout>
  )
}

export default Signup;
