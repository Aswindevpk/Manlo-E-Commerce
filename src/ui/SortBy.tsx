import { useSearchParams } from "react-router-dom"
import styled from "styled-components";

const StyledSelect = styled.select`
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    color:var(--color-brand-700);
    background-color:var(--color-grey-200);
    font-weight: 500;
    border: none;
    text-transform:uppercase;
`;



function SortBy() {
    const [searchParams, setSearchParams] = useSearchParams()

    const sortBy = searchParams.get("sortBy") || ""

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <StyledSelect value={sortBy} onChange={handleChange}>
            <option value="is_new-desc">New Arrivals</option>
            <option value="price-asc">Price (Lowest to Highest)</option>
            <option value="price-desc">Price (Highest to Lowest)</option>
        </StyledSelect>
    )
}

export default SortBy