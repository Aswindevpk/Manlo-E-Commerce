import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";


const Container = styled.div`
  display: flex;
    flex-direction: column;
`;
const FilterSummaryHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;


const ActiveFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`;

const FilterTag = styled.div`
  background-color: var(--color-light-gray);
  color: var(--color-dark-gray);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
`;

const CloseButton = styled.span`
  cursor: pointer;
  font-weight: bold;
  margin-left: 4px;
  color: var(--color-dark-gray);
`;

function FilterSummary() {
    const [searchParams, setSearchParams] = useSearchParams()

    //remove sortby and search from list
    const allFilters = Array.from(searchParams.entries()).filter(
        ([key]) => key !== "q" && key !== "sortBy"
      );


    function removeFilter(key: string, value: string) {
        const existingValues = searchParams.getAll(key);
        const updatedValues = existingValues.filter((v) => v !== value);

        if (updatedValues.length) {
            searchParams.delete(key);
            updatedValues.forEach((v) => searchParams.append(key, v));
        } else {
            searchParams.delete(key);
        }

        setSearchParams(searchParams);
    }

    function ClearFilter() {
        const filterKeys = ["color", "size", "price"];

        filterKeys.forEach((key) => {
            searchParams.delete(key); // Directly remove the filter key from searchParams
        });

        setSearchParams(searchParams); // Update the URL parameters
    }


    return (
        <Container>
            {allFilters.length > 0 &&
                <FilterSummaryHeader>
                    <span>FILTER BY</span>
                    <Button size="small" onClick={() => ClearFilter()}>Clear all</Button>
                </FilterSummaryHeader>
            }
            <ActiveFiltersContainer>
                {allFilters.map(([key, value], index) => (
                    <FilterTag key={`${key}-${value}-${index}`}>
                        {key}: {value}
                        <CloseButton onClick={() => removeFilter(key, value)}>✕</CloseButton>
                    </FilterTag>
                ))}
            </ActiveFiltersContainer>
        </Container>
    )
}

export default FilterSummary