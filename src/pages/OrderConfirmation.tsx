import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 2xl;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const IconWrapper = styled.div`
  color: green;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-dark-gray);
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--color-muted-blue);
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const OrderDetails = styled.div`
  background-color: var(--color-light-gray);
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 0.9rem;
`;

const Button = styled(Link)`
  background-color: var(--color-dark-gray);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d323a;
  }
`;

const OrderConfirmation = () => {
    const userName = "test"
    const orderId = null
  return (
    <Container>
      <Card>
        <IconWrapper>
          {/* <CheckCircle size={64} /> */}
        </IconWrapper>
        <Title>Thank you, {userName || "Customer"}!</Title>
        <Subtitle>Your order has been placed successfully.</Subtitle>
        <OrderDetails>
          <strong>Order ID:</strong> {orderId || "MENLO-000123"}<br />
          <strong>Status:</strong> Confirmed<br />
          <strong>Payment:</strong> Successful
        </OrderDetails>
        <Button to="/shop">Continue Shopping</Button>
      </Card>
    </Container>
  );
};

export default OrderConfirmation;
