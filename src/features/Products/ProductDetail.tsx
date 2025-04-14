import styled from "styled-components";
import StyledDivider from "../../ui/StyledDivider";
import ColorPicker from "../../ui/ColorPicker";
import SizePicker from "../../ui/SizePicker";
import useProductItem from "./useProductItem";
import ProductImages from "./ProductImages";
import ProductAction from "./productAction";



const Main = styled.main`
    padding: 4rem 0;
    display: grid;
    gap: 3rem;
    grid-template-columns: 60vw 1fr;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;



const BrandName = styled.p`
    font-size: 12px;
    letter-spacing:1px;
    text-transform: uppercase;
    color: var(--color-grey-500);
`;

const ProductName = styled.h3`
    font-size: 24px;
    font-weight:600;
    font-family:var(--font-secondary);
    color: var(--color-brand-700);
`;

const Price = styled.span`
    font-size: 20px;
    font-weight:600;
    font-family:var(--font-secondary);
    color: var(--color-brand-700);
`;

const Para = styled.span`
    padding-left:1rem;
    font-size: 10px;
    color: var(--color-grey-500);
`;

const SectionHeader = styled.p`
    font-size: 14px;
    color: var(--color-grey-500);
    text-transform:uppercase;
`;




function ProductDetail() {
    const { isLoading, productItem } = useProductItem()

    if (isLoading || !productItem) {
        return <h1>loading</h1>
    }
    return (
        <Main>
            <ProductImages />
            <Details>
                <div>
                    <BrandName>{productItem?.brand.name}</BrandName>
                    <ProductName>{productItem?.name}</ProductName>
                    <Price>Rs. {productItem?.price}/-</Price>
                    <Para>MRP including all taxes.</Para>
                </div>
                <StyledDivider />
                <Section>
                    <SectionHeader>Colors</SectionHeader>
                    <ColorPicker />
                </Section>
                <StyledDivider />
                <Section>
                    <SectionHeader>sizes</SectionHeader>
                    <SizePicker />
                </Section>
                <ProductAction />
                <Section>
                    <SectionHeader>SKU : {productItem.sku}</SectionHeader>
                    <SectionHeader>Description : {productItem?.description}</SectionHeader>
                    <SectionHeader>care Instruction : {productItem?.care_instruction}</SectionHeader>
                </Section>
            </Details>
        </Main>
    )
}

export default ProductDetail