import { Link } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import CartIcon from "../../ui/CartIcon";
import Logout from "../../features/Auth/Logout";
import styled from "styled-components";
import ClickableIcon from "../../ui/ClickableIcon";


export default function UserActions() {
    return (
        <NavSection>
            <ClickableIcon as={Link} to="/wishlist"><CiHeart /></ClickableIcon>
            <ClickableIcon as={Link} to="/cart"><CartIcon /></ClickableIcon>
            <ClickableIcon as={Link} to="/user"><CiUser /></ClickableIcon>
            <Logout />
        </NavSection>
    );
}


// Nav section (left or right group)
export const NavSection = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
`;