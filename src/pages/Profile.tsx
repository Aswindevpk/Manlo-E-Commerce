import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { CiLocationOn, CiShoppingCart, CiUser } from "react-icons/ci";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SideBar = styled.div`
  background-color:var(--color-grey-200);
  margin: 0rem 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 500px;
  height: 100%;

  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    flex-direction: row;
    height: 6rem;
    min-height: auto;
    width: 100%;
    justify-content: center;
  }
`;

const Section = styled.section`
  width: 100%;
  padding: 2rem;
`;

const NavItem = styled(NavLink)`
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

    @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
    gap: 0.5rem;
  }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-800);
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-800);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-800);
  }
`;

function Profile() {
  return (
    <Container>
      <SideBar>
        <NavItem to={"account"}>
          <CiUser />
          <span>
            Account
          </span>
        </NavItem>
        <NavItem to={"addresses"}>
          <CiLocationOn />
          <span>
            Addresses
          </span>
        </NavItem>
        <NavItem to={"orders"}>
          <CiShoppingCart />
          <span>
            Orders
          </span>
        </NavItem>
      </SideBar>
      <Section>
        <Outlet />
      </Section>
    </Container>
  )
}

export default Profile