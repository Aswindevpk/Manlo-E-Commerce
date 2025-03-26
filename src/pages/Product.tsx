import styled from "styled-components";
import Heading from "../ui/Heading";
import StyledDivider from "../ui/StyledDivider";
import Review from "../ui/Review";
import ProductDetail from "../features/Products/ProductDetail";
import ProductItem from "../ui/ProductItem";

const Section = styled.div`
    padding: 4rem 0rem;
`

const ReviewWrapper = styled.div`
    padding-top:2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 1.5rem;
`


const ProductWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90vw;
  padding: 4rem 0;
  gap: 4rem;
  overflow: hidden;
  overflow-x: auto; /* Enables horizontal scrolling */
  white-space: nowrap; /* Prevents items from wrapping */
  scrollbar-width: thin; /* Firefox scrollbar */
  scrollbar-color: #888 #f1f1f1;

  scroll-snap-type: x mandatory;
    scroll-snap-align: start;

  &::-webkit-scrollbar {
    height: 4px; /* Adjust scrollbar height */
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;


function Product() {
    return (
        <>
            <ProductDetail />
            <StyledDivider />
            <Section>
                <Heading center={true} as="h1">Similar Products</Heading>
                <ProductWrapper>
                    <ProductList>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </ProductList>
                </ProductWrapper>
            </Section>
            <StyledDivider />
            <Section>
                <Heading center={true}>Reviews</Heading>
                <ReviewWrapper>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </ReviewWrapper>
            </Section>
        </>
    )
}

export default Product