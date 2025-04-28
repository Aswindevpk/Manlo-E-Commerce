import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroImg src="hero-1.jpg" alt="Hero banner" />
      <Overlay />
      <Content>
        <h1>DISCOVER YOUR STYLE</h1>
        <p>FRESH DROPS. CLASSIC FITS. EVERYTHING FOR THE MODERN MAN.</p>
      </Content>
    </HeroWrapper>
  );
};

export default HeroSection;

// ---------- STYLES BELOW ----------

const HeroWrapper = styled.section`
  position: relative;
  height: 40vh;
  width: 100%;
  border-radius:16px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  max-width: 500px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;

    h1 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

