import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const ColorButton = styled.button<{ selected: boolean, color: string }>`
    aspect-ratio:1/1;
    width: 2.5rem;
    font-size: 1.4rem;
    background-color: ${({ color }) => (color)};
    border: 1px ${({ selected }) => (selected ? "solid" : "transparent")};
    transition: all 0.3s ease;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap: 1.6rem;
`;


const colors = ['#111', '#f999', '#1999'];

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState<string>('S');

    return (
        <Wrapper>
            <p>COLORS</p>
            <Container>
                {colors.map(color => (
                    <ColorButton
                        key={color}
                        color={color}
                        selected={color === selectedColor}
                        onClick={() => setSelectedColor(color)}
                    >
                    </ColorButton>
                ))}
            </Container>
        </Wrapper>
    )
}

export default ColorPicker