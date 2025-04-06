import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import useSubCategories from "./useSubCategory";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;


function SubTable() {
  const { isLoading, subCategories } = useSubCategories()
  return (
    <Container>
      <SectionHeader>
        <Heading>Sub Categories</Heading>
        <Button>Add New</Button>
      </SectionHeader>
      <Table columns="1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>MainCategory</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={subCategories}
          render={(category) => (
            <Table.Row key={category.id}>
              <div>{category.name}</div>
              <div>{category.image}</div>
              <div>{category.parent.name}</div>
              <div>
                <a>Edit</a>/
                <a>Delete</a>
              </div>
              {/* <Tag type={customers.is_blocked ? "red" : "green"}>{customers.is_blocked ? "blocked" : "active"}</Tag> */}
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default SubTable