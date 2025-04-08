import styled from "styled-components";
import Heading from "../ui/Heading";
import StyledDivider from "../ui/StyledDivider";
import Review from "../ui/Review";
import ProductDetail from "../features/Products/ProductDetail";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductItem from "../features/Products/useProductItem";
import SimilarProducts from "../ui/SimilarProducts";
import Spinner from "../ui/Spinner";
import ReviewList from "../features/Reviews/ReviewList";
// import ProductItem from "../ui/ProductItem";

const Section = styled.div`
    padding: 4rem 0rem;
`






function Product() {
  const { isLoading, productItem } = useProductItem()
  if (isLoading || !productItem) {
    return <Spinner/>
  }

  const categoryId = productItem.category.id

  return (
    <>
      <ProductDetail />
      <StyledDivider />
      <Section>
        <SimilarProducts categoryId={categoryId}/>
      </Section>
      <StyledDivider />
      <Section>
        <Heading center={true}>Reviews</Heading>
        <ReviewList/>
      </Section>
    </>
  )
}

export default Product