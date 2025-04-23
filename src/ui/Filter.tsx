import { useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import FilterSummary from "./FilterSummary";
import useGetColors from "../hooks/useGetColors";
import useGetSizes from "../hooks/useGetSizes";
import useGetCategories from "../hooks/useGetCategories";
import useGetBrands from "../hooks/useGetBrands";



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

type FilterType = "price" | "color" | "size" | "brand" | "category" | "type"

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [openFilters, setOpenFilters] = useState<{ price: boolean, color: boolean, size: boolean, brand: boolean, category: boolean, type: boolean }>({
        price: false,
        color: false,
        size: false,
        brand: false,
        category: false,
        type: false,
    });

    const { colors } = useGetColors()
    const { sizes } = useGetSizes()
    const { categories:allCatgories } = useGetCategories()
    const { brands } = useGetBrands()

    const categories = allCatgories?.filter(cat=>cat.parent_id === null)
    const types = allCatgories?.filter(cat=>cat.parent_id !== null)


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
            <FilterSummary />

            {/* brand filter  */}

            <Title onClick={() => toggleFilter("brand")}>{openFilters.brand ? <GoChevronUp /> : <GoChevronDown />} BRAND</Title>
            <DropdownContent isOpen={openFilters.brand}>
                {brands?.map((brand) => (
                    <Label key={brand.name}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("brand", brand.name)}
                            checked={searchParams.getAll("brand").includes(brand.name)}
                        />
                        {brand.name}
                    </Label>
                ))}
            </DropdownContent>

            {/* category filter  */}

            <Title onClick={() => toggleFilter("category")}>{openFilters.category ? <GoChevronUp /> : <GoChevronDown />} CATEGORY</Title>
            <DropdownContent isOpen={openFilters.category}>
                {categories?.map((category) => (
                    <Label key={category.id}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("category", category.slug)}
                            checked={searchParams.getAll("category").includes(category.slug)}
                        />
                        {category.name}
                    </Label>
                ))}
            </DropdownContent>

            {/* type filter  */}

            <Title onClick={() => toggleFilter("type")}>{openFilters.type ? <GoChevronUp /> : <GoChevronDown />} TYPE</Title>
            <DropdownContent isOpen={openFilters.type}>
                {types?.map((type) => (
                    <Label key={type.id}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("type", type.slug)}
                            checked={searchParams.getAll("type").includes(type.slug)}
                        />
                        {type.name}
                    </Label>
                ))}
            </DropdownContent>

            {/* <Title onClick={() => toggleFilter("size")}>{openFilters.size ? <GoChevronUp /> : <GoChevronDown />} PRICE</Title>
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
            </DropdownContent> */}

            {/* color filter  */}

            <Title onClick={() => toggleFilter("color")}>{openFilters.color ? <GoChevronUp /> : <GoChevronDown />}COLOR </Title>
            <DropdownContent isOpen={openFilters.color}>
                {colors?.map((color) => (
                    <Label key={color.name}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("color", color.name)}
                            checked={searchParams.getAll("color").includes(color.name)}
                        />
                        {color.name}
                    </Label>
                ))}
            </DropdownContent>

            {/* size filter  */}

            <Title onClick={() => toggleFilter("size")}>{openFilters.size ? <GoChevronUp /> : <GoChevronDown />}SIZE </Title>
            <DropdownContent isOpen={openFilters.size}>
                {sizes?.map((size) => (
                    <Label key={size.name}>
                        <Input
                            type="checkbox"
                            onChange={() => handleFilterChange("size", size.name)}
                            checked={searchParams.getAll("size").includes(size.name)}
                        />
                        {size.name}
                    </Label>
                ))}
            </DropdownContent>




            {/* <Title onClick={() => toggleFilter("size")}>{openFilters.size ? <GoChevronUp /> : <GoChevronDown />} RATING</Title>
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
            </DropdownContent> */}

        </StyledFilter>

    );
};

export default Filter;
