import { useEffect, useState } from "react"
import styled from "styled-components"
import useProductColors from "../features/Products/useProductColors";
import { getProductVariantByColor } from "../services/apiProduct";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";


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




function ColorPicker({ productId, selectedColorId }: { productId: string, selectedColorId: string }) {
    const [selectedColor, setSelectedColor] = useState(selectedColorId ? selectedColorId : "")
    const { isLoading, colors } = useProductColors({ productId })
    const [isChangingVariant,setIsChangingVariant] = useState(false)

    //current product slug
    const { productSlug } = useParams();

    const navigate = useNavigate()

    //set the color of selected product
    useEffect(() => {
        if (selectedColorId !== selectedColor) {
            setSelectedColor(selectedColorId);
        }
    }, [selectedColorId, selectedColor]);

    async function changeVariant(colorId:string){
        setSelectedColor(colorId)
        setIsChangingVariant(true)
        try{
            const product = await getProductVariantByColor({productId,colorId})
            if(product.slug === productSlug){
                setIsChangingVariant(false)
                return;
            }
            setIsChangingVariant(false)
            navigate(`/product/${product.slug}?unit=${product.unit_id}`)
        }catch(error){
            toast.error("error changing color")
            console.log(error)
            setIsChangingVariant(false)
        }
    }


    if (isLoading || !colors || isChangingVariant ) {
        return <SpinnerMini />
    }

    if (!colors || colors.length === 0) return <p>No colors available</p>;

    return (
        <Container>
            {colors.map(color => (
                <ColorButton
                    key={color.id}
                    selected={color.id === selectedColor}
                    disabled={isChangingVariant}
                    onClick={() => changeVariant(color.id)}
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