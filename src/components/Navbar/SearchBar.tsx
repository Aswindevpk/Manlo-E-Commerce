import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim()) navigate(`/search?q=${query}`);
    };

    return (
        <SearchWrapper onSubmit={handleSearch}>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </SearchWrapper>
    );
}


// Search bar wrapper
export const SearchWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

// Search input
export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 3.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-50);
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--color-brand-500);
  }
`;

// Magnifying glass icon
export const SearchIcon = styled(HiMagnifyingGlass)`
  position: absolute;
  left: 10px;
  font-size: 16px;
  color: var(--color-grey-500);
`;

