import { Link, NavLink } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import CartIcon from "../../ui/CartIcon";
import Logout from "../../features/Auth/Logout";
import styled from "styled-components";
import ClickableIcon from "../../ui/ClickableIcon";

const NavList = styled.ul`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;



export default function UserActions({ type }:{type:"nav"|"ham"}) {
    if (type === "nav") return (
        <NavSection>
            <ClickableIcon as={Link} to="/wishlist"><CiHeart /></ClickableIcon>
            <ClickableIcon as={Link} to="/cart"><CartIcon /></ClickableIcon>
            <ClickableIcon as={Link} to="/user"><CiUser /></ClickableIcon>
            <Logout />
        </NavSection>
    )
    if (type === "ham") return (
        <NavList>
            <li>
                <StyledNavLink to="/wishlist">
                    <CiHeart />
                    <span>
                        Wishlist
                    </span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/cart">
                    <CartIcon />
                    <span>
                        User Cart
                    </span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/user">
                    <CiUser />
                    <span>
                        User
                    </span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/">
                    <Logout />
                    <span>
                        Logout
                    </span>
                </StyledNavLink>
            </li>

        </NavList>
    )
}


// Nav section (left or right group)
export const NavSection = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;
`;