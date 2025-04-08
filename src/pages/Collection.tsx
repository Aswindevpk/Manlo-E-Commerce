import styled from "styled-components";
import SubCategory from "../features/Categories/SubCategory";
import ProductList from "../features/Products/ProductList";
import useSearchProducts from "../features/Products/useSearchProducts";
import Spinner from "../ui/Spinner";


const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function Collection() {
 const {isLoading,products}=useSearchProducts({query:"ru"})
 if(isLoading){
  return <Spinner/>
 }
  return (
    <Container>
      <SubCategory />
      <ProductList products={products} />
    </Container>
  )
}

export default Collection