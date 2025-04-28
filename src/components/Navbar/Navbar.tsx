import SearchBar from "./SearchBar";
import UserActions from "./UserActions";
import Logo from "./Logo";
import styled from "styled-components";
import NavHamburger from "./NavHamburger";


export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <Main>
        <SearchBar />
        <UserActions type="nav" />
      </Main>
      <NavHamburger />
    </NavbarContainer>
  );
}

// Layout container
const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 4.2rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: var(--color-white);
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Main = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;




