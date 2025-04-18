import { useParams } from "react-router-dom"
import ProductForm from "../features/Products/ProductForm"
import useGetProduct from "../features/Products/useGetProduct"
import Spinner from "../../ui/Spinner"
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import VariantsTable from "../features/Variants/VariantsTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;


function Product() {
  const { productId } = useParams()
  const { isLoading, product } = useGetProduct({ productId })

  if (isLoading || !product) {
    return <Spinner />
  }


  return (
    <Container>
      <SectionHeader>
        <Heading as="h5">Product / {product.name}</Heading>
      </SectionHeader>
      <ProductForm productToEdit={product} />

      <SectionHeader>
        <Heading as="h3">Product Variants</Heading>
        <Button>Add New Varient</Button>
      </SectionHeader>

      <VariantsTable productId={productId} />
    </Container>
  )
}

export default Product