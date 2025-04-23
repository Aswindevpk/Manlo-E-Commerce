import styled from "styled-components";
import ProductList from "../features/Products/ProductList";
import Spinner from "../ui/Spinner";
import { useParams } from "react-router-dom";
import CategoryList from "../features/Categories/CategoryList";
import useSearchProducts from "../features/Products/useSearchProducts";


const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function Collection() {
  const { collectionSlug } = useParams()
  const { isLoading, products } = useSearchProducts()

  if (isLoading || !products) {
    return <Spinner />
  }
  return (
    <Container>
      <CategoryList collectionSlug={collectionSlug} />
      <ProductList />
    </Container>
  )
}

export default Collection