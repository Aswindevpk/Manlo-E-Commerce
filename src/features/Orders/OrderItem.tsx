import styled from "styled-components";
import Button from "../../ui/Button";
import { Order } from "../../types";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";


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
          <Value>{formatCurrency(order.price)}</Value>
        </OrderInfo>
        <OrderInfo>
          <Label>ORDER PLACED</Label>
          <Value>{formatDate(order.order_date)}</Value>
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
          <Link to={`${order.id}`}>
          <Button>Order Details</Button>
          </Link>
        </ButtonContainer>
      </OrderContent>

      {/* Estimated Delivery */}
      <DeliveryDate>ESTIMATED DELIVERY: {order.estimated_delivery}</DeliveryDate>
    </OrderContainer>
  );
};

export default OrderItem;

const OrderContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-grey-200);
  background: var(--color-grey-50);
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-400);
  letter-spacing: 0.5px;
`;

const Value = styled.span`
  font-size: 1.4rem;
  font-family:var(--font-secondary);
  font-weight: 500;
  color: #111827;
`;

const OrderContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 2fr;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

const ProductInfo = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-brand-800);
  margin: 0;
`;

const ShippedTag = styled.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.25rem;
  width: fit-content;
`;

const ProductDetails = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-top: 4px;
`;

const QtyContainer = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;

const QtyLabel = styled.span`
  font-size: 1.4rem;
  color: #6b7280;
`;

const QtyValue = styled.span`
  font-weight: 600;
  margin-left: 4px;
  font-size: 1.4rem;
  color: #111827;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

const DeliveryDate = styled.div`
  background: var(--color-grey-50);
  font-size:1.2rem;
  color: var(--color-brand-900);
  font-weight: 600;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-grey-200);
`;

