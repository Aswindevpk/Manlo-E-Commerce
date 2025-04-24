import { useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import FilterSummary from "./FilterSummary";
import useGetFilterCounts from "./useGetFilterCounts";
import Spinner from "../../ui/Spinner";


const StyledFilter = styled.div`
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-grey-200);
  border-radius: 8px;
  padding: 2rem;
  height: fit-content;
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
  gap: 0.8rem;
  margin: 8px 0px;
`;

const LabelName = styled.label`
  font-size: 13px;
  color: var(--color-dark-gray);
`;

const LabelCount = styled.span`
  font-size: 13px;
  letter-spacing: 2px;
  color: var( --color-grey-400);
`;

const Input = styled.input`
  margin-right: 8px;
`;


const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 10px 0;
`;

type FilterType = "price" | "color" | "size" | "brand" | "category" | "type"

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [openFilters, setOpenFilters] = useState<{ price: boolean, color: boolean, size: boolean, brand: boolean, category: boolean, type: boolean }>({
        price: true,
        color: true,
        size: true,
        brand: true,
        category: true,
        type: true,
    });

    const { isLoading, filterCounts } = useGetFilterCounts()

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

    if (isLoading || !filterCounts) {
        return <Spinner />
    }

    const brands = filterCounts.brand
    const colors = filterCounts.color
    const categories = filterCounts.category
    const types = filterCounts.type


    return (
        <StyledFilter>
            <FilterSummary />
            {/* brand filter  */}
            {brands.length > 0 &&
                <>
                    <Title onClick={() => toggleFilter("brand")}>{openFilters.brand ? <GoChevronUp /> : <GoChevronDown />} BRAND</Title>
                    <DropdownContent isOpen={openFilters.brand}>
                        {brands?.map((brand) => (
                            <Label>
                                <LabelName key={brand.name}>
                                    <Input
                                        type="checkbox"
                                        onChange={() => handleFilterChange("brand", brand.name)}
                                        checked={searchParams.getAll("brand").includes(brand.name)}
                                    />
                                    {brand.name.toUpperCase()}
                                </LabelName>
                                <LabelCount> {`(${brand.count})`}</LabelCount>
                            </Label>
                        ))}
                    </DropdownContent>
                </>
            }

            {/* category filter  */}
            {categories.length > 0 &&
                <>
                    <Title onClick={() => toggleFilter("category")}>{openFilters.category ? <GoChevronUp /> : <GoChevronDown />} CATEGORY</Title>
                    <DropdownContent isOpen={openFilters.category}>
                        {categories?.map((category) => (
                            <Label>
                                <LabelName key={category.name}>
                                    <Input
                                        type="checkbox"
                                        onChange={() => handleFilterChange("category", category.name)}
                                        checked={searchParams.getAll("category").includes(category.name)}
                                    />
                                    {category.name.toUpperCase()}
                                </LabelName>
                                <LabelCount> {`(${category.count})`}</LabelCount>
                            </Label>
                        ))}
                    </DropdownContent>
                </>
            }
            {/* type filter  */}

            {types.length > 0 &&
                <>
                    <Title onClick={() => toggleFilter("type")}>{openFilters.type ? <GoChevronUp /> : <GoChevronDown />} TYPE</Title>
                    <DropdownContent isOpen={openFilters.type}>
                        {types.map((type) => (
                            <Label>
                                <LabelName key={type.name}>
                                    <Input
                                        type="checkbox"
                                        onChange={() => handleFilterChange("type", type.name)}
                                        checked={searchParams.getAll("type").includes(type.name)}
                                    />
                                    {type.name.toUpperCase()}
                                </LabelName>
                                <LabelCount> {`(${type.count})`}</LabelCount>
                            </Label>
                        ))}
                    </DropdownContent>
                </>}

            {/* color filter  */}

            {colors.length > 0 &&
                <>
                    <Title onClick={() => toggleFilter("color")}>{openFilters.color ? <GoChevronUp /> : <GoChevronDown />}COLOR </Title>
                    <DropdownContent isOpen={openFilters.color}>
                        {colors.map((color) => (
                            <Label>
                                <LabelName key={color.name}>
                                    <Input
                                        type="checkbox"
                                        onChange={() => handleFilterChange("color", color.name)}
                                        checked={searchParams.getAll("color").includes(color.name)}
                                    />
                                    {color.name.toUpperCase()}
                                </LabelName>
                                <LabelCount> {`(${color.count})`}</LabelCount>
                            </Label>
                        ))}
                    </DropdownContent>
                </>}
        </StyledFilter>

    );
};

export default Filter;
