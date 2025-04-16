import styled from "styled-components";
import Heading from "../ui/Heading";
import StyledDivider from "../ui/StyledDivider";
import ProductDetail from "../features/Products/ProductDetail";
import SimilarProducts from "../ui/SimilarProducts";
import ReviewList from "../features/Reviews/ReviewList";

const Section = styled.div`
    padding: 4rem 0rem;
`


function Product() {
  return (
    <>
      <ProductDetail />
      <StyledDivider />
      <Section>
        <SimilarProducts />
      </Section>
      <StyledDivider />
      <Section>
        <Heading center={true}>Reviews</Heading>
        <ReviewList />
      </Section>
    </>
  )
}

export default Product