import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetBrands from "./useBrands";



const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;



function BrandsTable() {
  const { isLoading, brands } = useGetBrands()

  if (isLoading || !brands) {
    return <Spinner />
  }

  return (
    <Container>
      <SectionHeader>
        <Heading>Brands</Heading>
        <Button>Add New Brand</Button>
      </SectionHeader>
      <Table columns="1fr">
        <Table.Header>
          <div>Name</div>
        </Table.Header>
        <Table.Body
          data={brands}
          render={(brand) => (
            <Table.Row key={brand.id}>
              <div>{brand.name}</div>
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default BrandsTable