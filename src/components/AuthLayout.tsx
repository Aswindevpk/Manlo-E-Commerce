import { ReactElement } from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";

const Layout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-grey-50);
`;

const Logo = styled.h3`
  font-size: 4rem;
  font-weight: 800;
`
interface Props {
  header: string;
  children: ReactElement
}


function AuthLayout({ header, children }: Props) {
  return (
    <Layout>
      <Logo>MANLO</Logo>
      <Heading as="h3">{header}</Heading>
      {children}
    </Layout>
  )
}

export default AuthLayout