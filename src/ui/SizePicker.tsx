import { useState } from "react"
import styled from "styled-components"

const SizeContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const SizeButton = styled.button<{ selected: boolean }>`
    aspect-ratio:1/1;
    width: 4rem;
    font-size: 1.4rem;
    background-color: transparent;
    border: 1px ${({ selected }) => (selected ? "solid" : "transparent")};
    transition: all 0.3s ease;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  gap: 1.6rem;
`;

const sizes = ['S', 'M', 'L', 'XL'];

function SizePicker() {
    const [selectedSize, setSelectedSize] = useState<string>('S');

    return (
        <Wrapper>
            <p>SIZES</p>
            <SizeContainer>
                {sizes.map(size => (
                    <SizeButton
                        key={size}
                        selected={size === selectedSize}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </SizeButton>
                ))}
            </SizeContainer>
        </Wrapper>
    )
}

export default SizePicker