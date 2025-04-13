import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import useMainCategories from "./useMainCategory";
import Spinner from "../../../ui/Spinner";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;


function MainTable() {
  const { isLoading, mainCategories } = useMainCategories()

  if(isLoading){
    return <Spinner/>
  }
  
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
              <div>{category.image}</div>
              <div>
                <a>Edit</a>/
                <a>Delete</a>
              </div>
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default MainTable