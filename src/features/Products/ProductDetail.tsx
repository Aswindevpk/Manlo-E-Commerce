import styled from "styled-components";
import StyledDivider from "../../ui/StyledDivider";
import ColorPicker from "../../ui/ColorPicker";
import SizePicker from "../../ui/SizePicker";
import ProductImages from "./ProductImages";
import ProductAction from "./productAction";
import Spinner from "../../ui/Spinner";
import useProductDetail from "./useProductDetail";
import { formatCurrency } from "../../utils/helpers";



function ProductDetail() {
    const { isLoading, productData } = useProductDetail()

    if (isLoading || !productData) {
        return <Spinner />
    }

    return (
        <Main>
            <ProductImages images={productData.images} />
            <Details>
                <div>
                    <BrandName>{productData.brand}</BrandName>
                    <ProductName>{productData.name.toUpperCase()}</ProductName>
                    <Price>{formatCurrency(productData.price)}/-</Price>
                    <Para>MRP including all taxes.</Para>
                </div>
                <StyledDivider />
                <Section>
                    <SectionHeader>Colors</SectionHeader>
                    <ColorPicker productId={productData.product_id} selectedColorId={productData.color_id} />
                </Section>
                <StyledDivider />
                <Section>
                    <SectionHeader>sizes</SectionHeader>
                    <SizePicker parentCategoryId={productData.parent_category_id} variantId={productData.id} />
                </Section>
                <ProductAction />
                <Section>
                    <SectionHeader>SKU : {productData.sku}</SectionHeader>
                    <SectionHeader>Description : {productData.description}</SectionHeader>
                    <SectionHeader>care Instruction : {productData.care_instruction}</SectionHeader>
                </Section>
            </Details>
        </Main>
    )
}

export default ProductDetail

const Main = styled.main`
    padding: 4rem 0;
    display: grid;
    gap: 3rem;
    grid-template-columns: 60vw 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
  }
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
