import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetColors from "./useColors";
import Modal from "../../../ui/Modal";
import ColorForm from "./ColorForm";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Swatch = styled.div<{ color: string }>`
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
        <Modal>
          <Modal.Open opens="create-color">
            <Button>Add New Color</Button>
          </Modal.Open>
          <Modal.Window name="create-color">
            <ColorForm />
          </Modal.Window>
        </Modal>
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
              <Swatch color={color.hex_code} />
              <Modal>
                <Modal.Open opens="update-color">
                  <Button>Edit</Button>
                </Modal.Open>
                <Modal.Window name="update-color">
                  <ColorForm colorToEdit={color} />
                </Modal.Window>
              </Modal>
            </Table.Row>
          )} />
      </Table>
    </Container >
  )
}

export default ColorsTable