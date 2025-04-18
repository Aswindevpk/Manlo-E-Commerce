import styled from "styled-components";
import ProductsTable from "../features/Products/ProductsTable"
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ProductForm from "../features/Products/ProductForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;



function Products() {
  return (
    <Container>
      <SectionHeader>
        <Heading>Product</Heading>
        <Modal>
          <Modal.Open opens="product-form">
            <Button>New product</Button>
          </Modal.Open>
          <Modal.Window name="product-form">
            <ProductForm/>
          </Modal.Window>
        </Modal>
      </SectionHeader>
      <ProductsTable />
    </Container>
  )
}

export default Products