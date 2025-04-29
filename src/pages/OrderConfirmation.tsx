
import styled, { keyframes } from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #10b981;
  margin-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.2cherem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;


const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button<{ variant?: "outline" }>`
  padding: 0.75rem 1.5rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease all;
  font-weight: 500;
  border: ${({ variant }) => (variant === "outline" ? "1px solid #d1d5db" : "none")};
  background-color: ${({ variant }) => (variant === "outline" ? "white" : "#111827")};
  color: ${({ variant }) => (variant === "outline" ? "#374151" : "white")};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "outline" ? "#f3f4f6" : "#1f2937"};
  }
`;


function OrderConfirmation(){
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Card>
        <IconWrapper>
          <AiFillCheckCircle size={80} />
        </IconWrapper>
        <Heading>Thank you for your order!</Heading>
        <div>
        <Text>Your order has been successfully placed.</Text>
        <Text>A confirmation has been sent to <strong>Your Email</strong>.</Text>
        </div>
        <ButtonGroup>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
          <Button variant="outline" onClick={() => navigate(`/user/orders`)}>
            View Orders
          </Button>
        </ButtonGroup>
      </Card>
    </PageWrapper>
  );
};

export default OrderConfirmation;
