import styled from "styled-components";
import { RiMenu3Fill } from "react-icons/ri";
import Hamburger from "../Hamburger";
import UserActions from "./UserActions";
import SearchBar from "./SearchBar";
import ClickableIcon from "../../ui/ClickableIcon";

const StyledNavHamburger = styled.div`
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;


function NavHamburger({ ...props }) {
  return (
    <StyledNavHamburger {...props}>
      <Hamburger>
        <Hamburger.Toggle>
          <ClickableIcon>
          <RiMenu3Fill size={26} />
          </ClickableIcon>
        </Hamburger.Toggle>
        <Hamburger.Menu >
          <>
            <SearchBar />
            <UserActions type="ham"/>
          </>
        </Hamburger.Menu>
      </Hamburger>
    </StyledNavHamburger>
  )
}

export default NavHamburger

