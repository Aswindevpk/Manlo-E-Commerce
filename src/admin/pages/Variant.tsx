import { useParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import styled from "styled-components";
import Heading from "../../ui/Heading";
import VariantForm from "../features/Variants/VariantForm";
import useGetVariant from "../features/Variants/useGetVariant";
import UnitsTable from "../features/Units/UnitsTable";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import UnitForm from "../features/Units/UnitForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;


function Variant() {
  const { variantId } = useParams()
  const { isLoading, variant } = useGetVariant({ variantId })

  if (isLoading || !variant ) {
    return <Spinner />
  }

  return (
    <Container>
      <SectionHeader>
        <Heading as="h5">Variant / {variant.name}</Heading>
      </SectionHeader>
      <VariantForm variantToEdit={variant} />
      <SectionHeader>
        <Heading as="h5">Product Units</Heading>
        <Modal>
          <Modal.Open opens="create-unit">
            <Button>
              Add Unit
            </Button>
          </Modal.Open>
          <Modal.Window name="create-unit">
            <UnitForm variantId={variantId}/>
          </Modal.Window>
        </Modal>
      </SectionHeader>
      <UnitsTable variantId={variantId} />
    </Container>
  )
}

export default Variant