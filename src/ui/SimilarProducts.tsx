import styled from "styled-components";
import Heading from "./Heading";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../features/Products/useGetProductsByCategory";
import useSearchProducts from "../features/Products/useSearchProducts";
import ProductItem from "./ProductItem";

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

function SimilarProducts({ categoryId }) {
  const { isLoading, products } = useSearchProducts({ query: "ru" })
  return (
    <>
      <Heading center={true} as="h1">Similar Products</Heading>
      <ProductWrapper>
        <ProductList>
          {products?.map(prod => (<ProductItem size="sm" key={prod.id} product={prod} />))}
        </ProductList>
      </ProductWrapper>
    </>
  )
}

export default SimilarProducts