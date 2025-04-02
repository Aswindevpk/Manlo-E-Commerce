import { useEffect, useState } from "react";
import styled from "styled-components"
import useProductSizes from "../features/Products/useProductSizes";
import useProductItem from "../features/Products/useProductItem";
import useProductItemSizes from "../features/Products/useProductItemSizes";
import useProductVariation from "../features/Products/useProductVariation";
import { useSearchParams } from "react-router-dom";


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




function SizePicker() {
    const { isLoading: ProductLoading, productItem } = useProductItem()
    const sizeCategoryId = productItem?.product.productCategory.size_category_id
    const { isLoading, sizes } = useProductSizes(sizeCategoryId)
    const { availableSizes } = useProductItemSizes(productItem?.id)
    const [selectedSize, setSelectedSize] = useState<number>();
    const { isLoading: variationLoading, productVariation } = useProductVariation(productItem?.id, selectedSize)
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if (productVariation) {
            const newSearchParams = new URLSearchParams(searchParams); // Create a new instance
            newSearchParams.set("variation", productVariation.id.toString());
            setSearchParams(newSearchParams, { replace: false }); // Ensure history is preserved
        }
    }, [productVariation, searchParams, setSearchParams, variationLoading])


    if (isLoading || !sizes || ProductLoading) {
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