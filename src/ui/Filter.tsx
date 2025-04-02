import { useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import FilterSummary from "./FilterSummary";
import useGetColors from "../features/Filter/useGetColors";
import useGetSizes from "../features/Filter/useGetSizes";



const StyledFilter = styled.div`
  width: 100%;
  background: var(--color-grey-50);
`;


const Title = styled.h3`
  font-size: 14px;
  color: var(--color-brand-900);
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-grey-200);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
  color: var(--color-dark-gray);
`;

const Input = styled.input`
  margin-right: 8px;
`;


const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 10px 0;
`;

type FilterType = "price" | "color" | "size"

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [openFilters, setOpenFilters] = useState<{ price: boolean, color: boolean, size: boolean }>({
        price: false,
        color: false,
        size: false,
    });

    const {colors} = useGetColors()
    const {sizes} = useGetSizes()
    

    const toggleFilter = (filter: FilterType) => {
        setOpenFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
    };

    const handleFilterChange = (key: FilterType, value: string) => {
        const existingValues = searchParams.getAll(key);

        if (existingValues.includes(value)) {
            searchParams.delete(key); // Remove all existing values first

            existingValues
                .filter((v) => v !== value) // Remove the unchecked value
                .forEach((v) => searchParams.append(key, v)); // Re-add remaining values
        } else {
            searchParams.append(key, value); // Add new value
        }

        setSearchParams(searchParams);
    };

    return (
        <StyledFilter>
            <FilterSummary/>

            <Title onClick={() => toggleFilter("color")}>{openFilters.color ? <GoChevronUp /> : <GoChevronDown />}COLOR </Title>
            <DropdownContent isOpen={openFilters.color}>
                {colors?.map((color) => (
                    <Label key={color}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("color", color)}
                            checked={searchParams.getAll("color").includes(color)}
                        />
                        {color}
                    </Label>
                ))}
            </DropdownContent>

            <Title onClick={() => toggleFilter("size")}>{openFilters.size ? <GoChevronUp /> : <GoChevronDown />}SIZE </Title>
            <DropdownContent isOpen={openFilters.size}>
                {sizes?.map((size) => (
                    <Label key={size}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("size", size)}
                            checked={searchParams.getAll("size").includes(size)}
                        />
                        {size}
                    </Label>
                ))}
            </DropdownContent>
        </StyledFilter>

    );
};

export default Filter;
