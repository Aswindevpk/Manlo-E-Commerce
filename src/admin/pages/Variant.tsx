import { useParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import styled from "styled-components";
import Heading from "../../ui/Heading";
import VariantForm from "../features/Variants/VariantForm";
import useGetVariant from "../features/Variants/useGetVariant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;


function Variant() {
  const { variantId } = useParams()
  const { isLoading, variant } = useGetVariant({ variantId })

  if (isLoading || !variant) {
    return <Spinner />
  }


  return (
    <Container>
      <SectionHeader>
        <Heading as="h5">Variant / {variant.name}</Heading>
      </SectionHeader>
      <VariantForm variantToEdit={variant} />
    </Container>
  )
}

export default Variant