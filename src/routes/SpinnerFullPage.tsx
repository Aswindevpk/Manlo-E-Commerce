import styled from "styled-components";
import Spinner from "../ui/Spinner";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--color-grey-50);
`;
  

function SpinnerFullPage() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default SpinnerFullPage;
