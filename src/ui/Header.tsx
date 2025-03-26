import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";



const SearchWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px; /* Adjust width as needed */
`;

const SearchIcon = styled(HiMagnifyingGlass)`
  position: absolute;
  left: 10px;
  color: var(--color-grey-500); /* Adjust color */
  font-size: 14px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 3.5rem; /* Left padding for icon space */
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);
  outline: none;
  font-size: 14px;
  background-color: var(--color-grey-50);
  transition: all 0.3s ease-in-out;

`;

const Navlinks = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:4rem;
`;

const Navlink = styled(Link)`
  font-weight: 400;
  width: 150px;
  font-size: 14px;
  text-transform:uppercase;
  border-bottom: 2px solid transparent; /* Default transparent */
  transition: border-bottom 0.3s ease-in-out, color 0.3s ease-in-out;
  color: var(--color-brand-900);

  &:hover {
    border-bottom: 2px solid var(--color-brand-500);
    color: var(--color-brand-700); /* Optional: Change text color on hover */
  }
`;

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4.2rem;
  border-bottom:1px solid var(--color-grey-200);
`;

const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-dark-gray);
  text-transform: uppercase;
`;


const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };
  return (
    <NavBar>
      <Navlinks>
        <Logo to="/">Manlo</Logo>
        <SearchWrapper onSubmit={handleSearch}>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} />
        </SearchWrapper>
        <Navlink to="shop">shop now</Navlink>
        <Navlink to="shop">deals</Navlink>
      </Navlinks>
      <Navlinks>
        <Link to="wishlist">
          <CiHeart size={30} />
        </Link>
        <Link to="cart">
          <CiShoppingCart size={30} />
        </Link>
        <Link to="profile">
          <CiUser size={30} />
        </Link>
      </Navlinks>
    </NavBar>
  );
};

export default Header;



