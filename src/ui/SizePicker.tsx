import { useEffect, useState } from "react";
import styled from "styled-components"
import useProductSizes from "../features/Products/useProductSizes";
import { useSearchParams } from "react-router-dom";
import useProductVariantSizes from "../features/Products/useProductItemSizes";
import useProductUnit from "../features/Products/useProductUnit";


const SizeContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const SizeButton = styled.button<{ selected: boolean }>`
    aspect-ratio:1/1;
    width: 4rem;
    font-size: 1.4rem;
      /* Disabled state styles */
    &:disabled {
        opacity: 0.5; /* Make it visually faded */
        cursor: not-allowed; /* Show 'not-allowed' cursor */
        border: 1px solid #ccc; /* Light gray border */
    }
    
    background-color: transparent;
    border: 1px ${({ selected }) => (selected ? "solid" : "transparent")};
    transition: all 0.3s ease;
`;




function SizePicker({ parentCategoryId, variantId }: { parentCategoryId: string, variantId: string }) {
    //fetches all sizes for a specific category
    const { isLoading, sizes } = useProductSizes(parentCategoryId)
    //fetches all sizes available for a specific variant
    const { availableSizes } = useProductVariantSizes(variantId)

    const [selectedSize, setSelectedSize] = useState<string>();
    const [searchParams, setSearchParams] = useSearchParams();

    const { isLoading: unitLoading, productUnit } = useProductUnit(variantId, selectedSize)


    useEffect(() => {
        if (productUnit) {
            const newSearchParams = new URLSearchParams(searchParams); // Create a new instance
            newSearchParams.set("unit", productUnit.id.toString());
            setSearchParams(newSearchParams, { replace: false }); // Ensure history is preserved
        }
    }, [productUnit, searchParams, setSearchParams, unitLoading])


    if (isLoading || !sizes) {
        return <h1>loading</h1>
    }


    return (

        <SizeContainer>
            {sizes.map(size => (
                <SizeButton
                    disabled={!availableSizes.has(size.id)}
                    key={size.id}
                    selected={size.id === selectedSize}
                    onClick={() => setSelectedSize(size.id)}
                >
                    {size.name}
                </SizeButton>
            ))}
        </SizeContainer>
    )
}

export default SizePicker