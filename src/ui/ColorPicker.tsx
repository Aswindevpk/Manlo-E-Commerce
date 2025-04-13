import { useEffect, useState } from "react"
import styled from "styled-components"
import useProductColors from "../features/Products/useProductColors";
import useProductItem from "../features/Products/useProductItem";
import { getProductItemIdByColor } from "../services/apiProduct";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const ColorButton = styled.button<{ selected: boolean }>`
    aspect-ratio:1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    font-size: 1.4rem;
    background-color:transparent;
    border: 1px ${({ selected }) => (selected ? "solid" : "transparent")};
    transition: all 0.3s ease;
`;

const ColorSwatch = styled.div<{ color: string }>`
    aspect-ratio:1/1;
    width: 1.5rem;
    border: 1px solid var(--color-grey-400);
    background-color: ${({ color }) => (color)};
`;




function ColorPicker() {
    const { isLoading: ProductLoading, productItem } = useProductItem()
    const [selectedColor, setSelectedColor] = useState("")
    const { isLoading, colors } = useProductColors({productId:productItem?.product_id})
    const navigate = useNavigate()



    //set the color of selected product
    useEffect(() => {
        if (productItem?.color_id) {
            setSelectedColor(productItem.color_id);
        }
    }, [productItem]);


    //navigate to product page according to color selected
    useEffect(() => {
        const fetchProductId = async () => {
            if (productItem?.color_id !== selectedColor && productItem && selectedColor) {
                try {
                    const productId = productItem.product_id;
                    const productItemId = await getProductItemIdByColor({ productId, colorId: selectedColor });
                    navigate('/product/' + productItemId.id)
                } catch (error) {
                    console.error("Error fetching product ID:", error);
                }
            }
        };

        fetchProductId();
    }, [selectedColor, productItem, navigate]);

    if (isLoading || !colors || ProductLoading) {
        return <h1>loading</h1>
    }

    return (
        <Container>
            {colors.map(color => (
                <ColorButton
                    key={color.id}
                    selected={color.id === selectedColor}
                    onClick={() => setSelectedColor(color.id)}
                >
                    <ColorSwatch
                        color={color.hex_code}
                    />
                </ColorButton>
            ))}
        </Container>
    )
}

export default ColorPicker