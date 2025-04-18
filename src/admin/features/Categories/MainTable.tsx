import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetCategories from "./useCategories";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
    height: 60px;
    width: 50px;
    object-fit: cover;
    aspect-ratio: 1/1;
`;




function MainTable() {
  const { isLoading, categories } = useGetCategories()

  if (isLoading || !categories) {
    return <Spinner />
  }

  //filtereing categories
  const mainCategories = categories.filter(cat => cat.parent_id === null)

  return (
    <Container>
      <SectionHeader>
        <Heading>MainCategories</Heading>
        <Button>Add New</Button>
      </SectionHeader>
      <Table columns="1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={mainCategories}
          render={(category) => (
            <Table.Row key={category.id}>
              <div>{category.name}</div>
              <StyledImg src={category.image}></StyledImg>
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

export default MainTable