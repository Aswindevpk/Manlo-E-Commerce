import styled from "styled-components";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { Category } from "../../types";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import CategoryForm from "./CategoryForm";
import Tag from "../../ui/Tag";
import Row from "../../../ui/Row";
import ListCategoryToggle from "./ListCategoryToggle";



const StyledImg = styled.img`
    height: 60px;
    width: 50px;
    object-fit: cover;
    aspect-ratio: 1/1;
`;

function CategoriesTable({ categories, isSub = false }: { categories: Category[], isSub?: boolean }) {
  return (
    <Table columns="10rem 1fr 1fr  1fr">
      <Table.Header>
        <div>Image</div>
        <div>Name</div>
        <div>Status</div>
        <div>Action</div>
      </Table.Header>
      <Table.Body
        data={categories}
        render={(category) => (
          <Table.Row key={category.id}>
            <StyledImg src={typeof category.image === "string" ? category.image : ""}></StyledImg>
            <div>{category.name}</div>
            <Tag type={category.is_listed ? "green" : "red"}>{category.is_listed ? "listed" : "un-listed"}</Tag>
            <Row type="horizontal">
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
                  <Button as={Link} to={`/admin/category/${category.id}`}>view</Button>
                }
              </div>
              <ListCategoryToggle is_listed={category.is_listed} categoryId={category.id} />
            </Row>
          </Table.Row>
        )} />
    </Table>
  )
}

export default CategoriesTable