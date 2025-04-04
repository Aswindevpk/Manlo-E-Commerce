import styled from 'styled-components'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from "react-router-dom"

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-rows:auto 1fr auto;
    min-height: 100vh;
`

const Main = styled.main`
    background-color:var(--color-grey-50);
    max-width: 100vw;
    padding: 4rem;
`

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </StyledAppLayout>
    )
}

export default AppLayout