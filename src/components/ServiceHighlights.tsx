import styled from "styled-components";
import {
  PiTruckLight,
  PiDiamondLight,
  PiHeadphonesLight,
  PiArrowUUpLeftLight,
} from "react-icons/pi";

const ServiceHighlights = () => {
  return (
    <Wrapper>
      <Service>
        <PiTruckLight size={32} />
        <Title>FREE SHIPPING</Title>
        <Description>FREE DELIVERY for above Rs.1199</Description>
      </Service>
      <Service>
        <PiDiamondLight size={32} />
        <Title>PREMIUM QUALITY</Title>
        <Description>100% guarantee for all products</Description>
      </Service>
      <Service>
        <PiHeadphonesLight size={32} />
        <Title>CUSTOMER SUPPORT</Title>
        <Description>Mon - Sat 09:00 – 18:00</Description>
      </Service>
      <Service>
        <PiArrowUUpLeftLight size={32} />
        <Title>RETURN AND EXCHANGE</Title>
        <Description>30 days for an exchange or refund</Description>
      </Service>
    </Wrapper>
  );
};

export default ServiceHighlights;

// ---------- STYLES BELOW ----------

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Service = styled.div`
  text-align: center;
  max-width: 240px;
  margin: 1rem;

  svg {
    color: var(--color-brand-700);
    margin-bottom: 1rem;
  }
`;

const Title = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-brand-900);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-grey-500);
  line-height: 1.5;
`;
