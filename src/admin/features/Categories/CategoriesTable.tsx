import styled from "styled-components";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { Category } from "../../types";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import CategoryForm from "./CategoryForm";


const StyledImg = styled.img`
    height: 60px;
    width: 50px;
    object-fit: cover;
    aspect-ratio: 1/1;
`;

function CategoriesTable({ categories, isSub = false }: { categories: Category[], isSub?: boolean }) {
  return (
    <Table columns="1fr 1fr 1fr">
      <Table.Header>
        <div>Image</div>
        <div>Name</div>
        <div>Action</div>
      </Table.Header>
      <Table.Body
        data={categories}
        render={(category) => (
          <Table.Row key={category.id}>
            <StyledImg src={typeof category.image === "string" ? category.image : ""}></StyledImg>
            <div>{category.name}</div>
            <div>
              {isSub ?
                <Modal>
                  <Modal.Open opens="create-category">
                    <Button>Edit</Button>
                  </Modal.Open>
                  <Modal.Window name="create-category">
                    <CategoryForm categoryToEdit={category} />
                  </Modal.Window>
                </Modal>
                :
                <Link to={`/admin/category/${category.id}`}>view</Link>
              }
            </div>
          </Table.Row>
        )} />
    </Table>
  )
}

export default CategoriesTable