import styled from "styled-components";

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

function ProductImages({images}:{images:{image_url:string}[]}) {

    return (
        <Images>
            {images.map(image=>(
            <ProductImg src={image.image_url} />
            ))}
        </Images>
    )
}

export default ProductImages