import styled from "styled-components"
import MainNav from "./MainNav"


const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row:1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
const Logo = styled.h3`
  padding: 1.2rem 2.4rem;
  font-size: 3rem;
  font-weight: 800;
`
function Sidebar() {
  return (
    <StyledSidebar>
      <Logo>MANLO</Logo>
      <MainNav />
    </StyledSidebar>
  )
}

export default Sidebar