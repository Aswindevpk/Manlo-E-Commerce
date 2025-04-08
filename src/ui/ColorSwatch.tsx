import styled from "styled-components";
import useProductColors from "../features/Products/useProductColors";

const Container = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0.4rem;
`;

const Swatch = styled.div<{color:string}>`
    background-color: ${(props) => props.color || 'transparent'};
    height: 1rem;
    aspect-ratio:1/1;
`;


function ColorSwatch({productId}) {
  const { isLoading, colors } = useProductColors({productId})
  if(!productId || isLoading) return null

  return (
    <Container>
      {colors?.map(color=>(
        <Swatch color={color.hex_code}/>
      ))}
    </Container>
  )
}

export default ColorSwatch