import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Logo() {
    return <StyledLogo to="/">Manlo</StyledLogo>;
}

// Brand logo
export const StyledLogo = styled(Link)`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-brand-800);
  text-decoration: none;
  
  &:hover {
    color: var(--color-dark-gray);
  }
`;
