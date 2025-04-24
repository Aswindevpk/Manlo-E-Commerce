import styled from 'styled-components'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'

const AppLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  background-color: var(--color-grey-50);
  width: 100%;
  padding: 4rem;
`;


function AppLayout() {
    return (
        <AppLayoutContainer>
            <Navbar />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Footer />
        </AppLayoutContainer>
    )
}

export default AppLayout