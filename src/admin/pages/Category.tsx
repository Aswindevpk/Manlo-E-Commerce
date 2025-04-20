import { useParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import useGetCategory from "../features/Categories/useGetCategory"
import styled from "styled-components";
import Heading from "../../ui/Heading";
import CategoryForm from "../features/Categories/CategoryForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import useGetCategories from "../features/Categories/useGetCategories";
import CategoriesTable from "../features/Categories/CategoriesTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;


function Category() {
  const { categoryId } = useParams()


  const { isLoading: isLoadingCategory, category } = useGetCategory({ categoryId })
  const { isLoading: isLoadingCategories, categories } = useGetCategories()

  if (isLoadingCategories || isLoadingCategory || !category || !categories) {
    return <Spinner />
  }

  const subCategories = categories?.filter(cat => cat.parent_id === categoryId)

  return (
    <Container>
      <SectionHeader>
        <Heading as="h5">Product / {category.name}</Heading>
      </SectionHeader>
      <CategoryForm categoryToEdit={category} />

      <SectionHeader>
        <Heading as="h2">Sub Categories</Heading>
        <Modal>
          <Modal.Open opens="product-form">
            <Button>Create new SubCategory</Button>
          </Modal.Open>
          <Modal.Window name="product-form">
            <CategoryForm parentId={categoryId} />
          </Modal.Window>
        </Modal>
      </SectionHeader>

      <CategoriesTable categories={subCategories} isSub={true} />
    </Container>
  )
}

export default Category