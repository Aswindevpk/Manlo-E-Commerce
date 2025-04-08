import styled from "styled-components";
import useProductImages from "./useProductImages";
import Spinner from "../../ui/Spinner";

const Images = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const ProductImg = styled.img`
    width: 100%;
    height: 600px;
    cursor: pointer;
`;

function ProductImages() {
    const { isLoading, productImages } = useProductImages()

    if(isLoading || !productImages){
        return <Spinner/>
    }

    return (
        <Images>
            {productImages.map(image=>(
            <ProductImg src={image.image_url} />
            ))}
        </Images>
    )
}

export default ProductImages