import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavLinks() {
    return (
        <NavSection>
            <NavItem to="/shop">Shop Now</NavItem>
            <NavItem to="/shop">Deals</NavItem>
        </NavSection>
    );
}

// Nav section (left or right group)
export const NavSection = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
`;

// Individual nav item (text link)
export const NavItem = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--color-brand-900);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 2px solid var(--color-brand-500);
    color: var(--color-brand-700);
  }
`;

