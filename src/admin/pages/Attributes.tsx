import styled from "styled-components";
import ColorsTable from "../features/Colors/ColorsTable";
import BrandsTable from "../features/Brands/BrandsTable";

const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`;

function Attributes() {
  return (
    <Container>
      <ColorsTable/>
      <BrandsTable/>
    </Container>
  )
}

export default Attributes