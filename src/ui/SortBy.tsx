import { useSearchParams } from "react-router-dom"
import styled from "styled-components";

const StyledSelect = styled.select`
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    color:var(--color-brand-700);
    background-color:var(--color-grey-200);
    font-weight: 500;
    border: none;
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
            <option value="low-high">Availability</option>
            <option value="high-low">Alphabetically, A-Z</option>
            <option value="high-low">Alphabetically, Z-A</option>
            <option value="high-low">Price, low to high</option>
            <option value="high-low">Price, high to low</option>
        </StyledSelect>
    )
}

export default SortBy