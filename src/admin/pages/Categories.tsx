import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useGetCategories from "../features/Categories/useGetCategories";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CategoryForm from "../features/Categories/CategoryForm";
import CategoriesTable from "../features/Categories/CategoriesTable";


const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;


function Categories() {
  const { isLoading, categories } = useGetCategories()

  //filtereing categories

  if (isLoading || !categories) {
    return <Spinner />
  }

  const mainCategories = categories.filter(cat => cat.parent_id === null)

  return (
    <>
      <SectionHeader>
        <Heading>Categories</Heading>
        <Modal>
          <Modal.Open opens="create-category">
            <Button>Add New</Button>
          </Modal.Open>
          <Modal.Window name="create-category">
            <CategoryForm />
          </Modal.Window>
        </Modal>
      </SectionHeader>
      <CategoriesTable categories={mainCategories} />
    </>
  )
}

export default Categories