import styled from "styled-components";
import SubTable from "../features/Categories/SubTable";
import MainTable from "../features/Categories/MainTable";

const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`;

function Categories() {
  return (
    <Container>
      <MainTable />
      <SubTable />
    </Container>
  )
}

export default Categories