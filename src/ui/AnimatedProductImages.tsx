import { useState, useEffect } from "react";
import styled from "styled-components";


const ProductImage = styled.img`
  aspect-ratio: 3/4;
  width: 100%;
  object-fit: cover;
  height: auto; 
  position: absolute;
`;

const ImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 3/4;
    position: relative;
    overflow: hidden;
`;



function AnimatedProductImages({images}:{images:{image_url:string}[]}) {
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hovered) {
            setIndex(0)
            return;
        }
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [hovered,images.length]);

    return (
        <ImageContainer
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {images.map((src, i) => (
                <ProductImage
                    key={i}
                    src={src.image_url}
                    alt={`Product Image ${i + 1}`}
                    style={{ opacity: i === index ? 1 : 0 }}
                />
            ))}
        </ImageContainer>
    )
}

export default AnimatedProductImages