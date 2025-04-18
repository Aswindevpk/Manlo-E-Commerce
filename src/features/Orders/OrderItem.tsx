import styled from "styled-components";
import Button from "../../ui/Button";
import { Order } from "../../types";
/* 🔹 Styled Components */
const OrderContainer = styled.div`
  background: #fff;
  margin:2rem 0rem;

  border: 2px solid var(--color-brand-300);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 2px solid var(--color-brand-100);
  padding-bottom: 12px;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 12px;
  color: var(--color-muted-blue);
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--color-dark-gray);
`;


const OrderContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  align-items: center;
  padding: 16px;
  padding-top: 16px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 0 16px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: var(--color-dark-gray);
`;

const ShippedTag = styled.span`
  background: #d4edda;
  color: #155724;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 4px;
  display: inline-block;
`;

const ProductDetails = styled.p`
  font-size: 14px;
  color: var(--color-muted-blue);
  margin-top: 4px;
`;

const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const QtyLabel = styled.span`
  color: var(--color-muted-blue);
`;

const QtyValue = styled.span`
  font-weight: bold;
  margin-left: 4px;
  color: var(--color-dark-gray);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;



const DeliveryDate = styled.div`
  font-size: 14px;
  color: var(--color-dark-gray);
  font-weight: bold;
  border-top:2px solid var(--color-brand-100);
  padding: 8px 16px;
`;


const OrderItem = ({ order }:{order:Order}) => {
  return (
    <OrderContainer>
      <OrderHeader>
        <OrderInfo>
          <Label>ORDER #</Label>
          <Value>{order.order_number}</Value>
        </OrderInfo>
        <OrderInfo>
          <Label>TOTAL</Label>
          <Value>€{order.price}</Value>
        </OrderInfo>
        <OrderInfo>
          <Label>ORDER PLACED</Label>
          <Value>{order.order_date}</Value>
        </OrderInfo>
      </OrderHeader>

      {/* Order Content */}
      <OrderContent>
        <div style={{display:"flex"}}>
          <Image src={order.image} alt="Product" />
          <ProductInfo>
            <ProductTitle>{order.product_name}</ProductTitle>
            <ShippedTag>{order.shipping_status}</ShippedTag>
            <ProductDetails>{order.size} / {order.color}</ProductDetails>
          </ProductInfo>
        </div>
        <QtyContainer>
          <QtyLabel>Qty:</QtyLabel>
          <QtyValue>{order.qty}</QtyValue>
        </QtyContainer>
        <ButtonContainer>
          <Button>Order Details</Button>
        </ButtonContainer>
      </OrderContent>

      {/* Estimated Delivery */}
      <DeliveryDate>ESTIMATED DELIVERY: {order.estimated_delivery}</DeliveryDate>
    </OrderContainer>
  );
};

export default OrderItem;


