import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { Link } from "react-router-dom";

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px 700px;
  overflow: hidden;
  position: relative;
`;

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

`;

const HeroContent = styled.div`
  position: absolute;
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.3);
`;


const HeroHeader = styled.h1`
    font-size: 100px;
`;



export default function Home() {
    return (
        <>
            <HeroSection>
                <HeroWrapper style={{ gridColumn: "span 2" }}>
                    <HeroImg src="/hero-img2.jpg" />
                    <HeroContent>
                        <HeroHeader>Welcome to Manlo</HeroHeader>
                        <p>" Redefining Style. Elevating Confidence."</p>
                        <Link to="/shop">
                          <Button size="large">Shop Now</Button>
                        </Link>
                    </HeroContent>
                </HeroWrapper>

                <HeroWrapper>
                    <HeroImg src="/hero-img1.jpg" />
                    <HeroContent>
                        <Heading as="h2">New Arrivals</Heading>
                        <p>Explore the latest fashion trends</p>
                        <Button size="large">View Collection</Button>
                    </HeroContent>
                </HeroWrapper>

                <HeroWrapper>
                    <HeroImg src="/hero-img3.jpg" />
                    <HeroContent>
                        <h3>Exclusive Deals</h3>
                        <p>Get the best discounts on top products</p>
                        <Button size="large">Shop Offers</Button>
                    </HeroContent>
                </HeroWrapper>
            </HeroSection>
        </>
    );
}
