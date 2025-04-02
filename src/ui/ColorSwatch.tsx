import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0.4rem;
`;

const Swatch = styled.div`
    background-color:red;
    height: 1rem;
    aspect-ratio:1/1;
`;


function ColorSwatch() {
  return (
    <Container>
        <Swatch/>
        <Swatch/>
    </Container>
  )
}

export default ColorSwatch