import { ReactElement } from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;


const Layout = styled.main`
  display: flex;
  flex-direction: column;
  width: clamp(200px, 90%, 450px);
  gap: 2rem;
  height: fit-content;
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
    <Container>
      <Layout>
        <Logo>MANLO</Logo>
        <Heading as="h3">{header}</Heading>
        {children}
      </Layout>
    </Container>
  )
}

export default AuthLayout