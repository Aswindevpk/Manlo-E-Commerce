import styled from "styled-components";
import SubCategory from "../features/Categories/SubCategory";
import ProductList from "../features/Products/ProductList";
import Spinner from "../ui/Spinner";
import { useGetProductsByCategory } from "../features/Products/useGetProductsByCategory";
import { useParams } from "react-router-dom";


const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function Collection() {
  const { collectionSlug } = useParams()
  const { isLoading, products } = useGetProductsByCategory({ categorySlug: collectionSlug })
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Container>
      <SubCategory />
      <ProductList products={products} />
    </Container>
  )
}

export default Collection