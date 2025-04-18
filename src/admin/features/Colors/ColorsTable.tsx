import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetColors from "./useColors";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Swatch = styled.div<{color:string}>`
    background-color: ${(props) => props.color || 'transparent'};
    height: 2rem;
    aspect-ratio:1/1;
`;



function ColorsTable() {
  const { isLoading, colors } = useGetColors()

  if (isLoading || !colors) {
    return <Spinner />
  }

  return (
    <Container>
      <SectionHeader>
        <Heading>Colors</Heading>
        <Button>Add New Color</Button>
      </SectionHeader>
      <Table columns="1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>hex code</div>
          <div>color</div>
          <div>action</div>
        </Table.Header>
        <Table.Body
          data={colors}
          render={(color) => (
            <Table.Row key={color.id}>
              <div>{color.name}</div>
              <div>{color.hex_code}</div>
              <Swatch color={color.hex_code}/>
              <Button>Edit</Button>
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default ColorsTable