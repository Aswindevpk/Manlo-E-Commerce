import styled from "styled-components";
import Heading from "../ui/Heading";
import StyledDivider from "../ui/StyledDivider";
import ProductDetail from "../features/Products/ProductDetail";
import SimilarProducts from "../ui/SimilarProducts";
import ProductReviews from "../features/Reviews/ProductReviews";

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
        <Heading as="h2" center={true}>REVIEWS</Heading>
        <ProductReviews/>
      </Section>
    </>
  )
}

export default Product