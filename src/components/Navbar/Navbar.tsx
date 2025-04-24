import SearchBar from "./SearchBar";
import UserActions from "./UserActions";
import Logo from "./Logo";
import styled from "styled-components";
// import NavLinks from "./NavLinks";


export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo/>
      {/* <NavLinks/> */}
      <SearchBar />
      <UserActions />
    </NavbarContainer>
  );
}

// Layout container
const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.4rem 4.2rem;
  border-bottom: 1px solid var(--color-grey-200);
  background-color: var(--color-white);
  z-index: 10;
`;




