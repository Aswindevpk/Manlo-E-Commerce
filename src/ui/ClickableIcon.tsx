import styled from "styled-components";

const ClickableIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover {
    & svg {
    color: var(--color-brand-900);
    }
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-brand-500);
  }
`;

export default ClickableIcon;
