import styled from "styled-components";
import Heading from "../../ui/Heading";
import StyledDivider from "../../ui/StyledDivider";
import ColorPicker from "../../ui/ColorPicker";
import SizePicker from "../../ui/SizePicker";
import { CiHeart } from "react-icons/ci";
import Button from "../../ui/Button";

const Main = styled.main`
    padding: 4rem 0;
    display: grid;
    gap: 3rem;
    grid-template-columns: 60vw 1fr;
`;

const ProductImages = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;

const ProductImg = styled.img`
    width: 100%;
    height: 600px;
    cursor: pointer;
`;

const Section = styled.div`
    padding: 2rem 0rem;
`

const Cta = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`


function ProductDetail() {
    return (
        <Main>
            <ProductImages>
                <ProductImg src="/hero-img1.jpg" />
                <ProductImg src="/hero-img3.jpg" />
                <ProductImg src="/hero-img3.jpg" />
                <ProductImg src="/hero-img1.jpg" />
            </ProductImages>

            <div>
                <Section>
                    <p>Category</p>
                    <Heading>Product title</Heading>
                    <p>Rs:999/-</p>
                    <p>MRP including all taxes.</p>
                </Section>
                <StyledDivider />

                <Section>
                    <ColorPicker />
                </Section>
                <StyledDivider />
                <Section>
                    <SizePicker />
                </Section>
                <Cta>
                    <Button size="large">Add to cart</Button>
                    <CiHeart fontSize={30} />
                </Cta>
                <Section>
                    <p>ETA introduces this taupe polo t-shirt, crafted with a knit-textured pattern for a soft and comfortable feel. Designed in a relaxed silhouette, it features a classic polo neck collar and half sleeves.</p>
                </Section>
            </div>
        </Main>
    )
}

export default ProductDetail