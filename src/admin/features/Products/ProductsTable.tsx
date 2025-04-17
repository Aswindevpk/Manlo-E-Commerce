import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetProducts from "./useGetProducts";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;



function ProductsTable() {
  const { isLoading, products } = useGetProducts()

  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <Container>
      <SectionHeader>
        <Heading>Products</Heading>
        <Button>Add New</Button>
      </SectionHeader>
      <Table columns="1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Desc</div>
          <div>Price</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={products}
          render={(product) => (
            <Table.Row key={product.id}>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>{product.price}</div>
              <div>
                <a>Edit</a>/
                <a>Unlist</a>
              </div>
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default ProductsTable