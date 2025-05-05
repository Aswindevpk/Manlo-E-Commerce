import styled from "styled-components";
import Button from "../ui/Button";
import { formatCurrency, formatDate } from "../utils/helpers";
import useGetOrder from "../features/Orders/useGetOrder";
import Spinner from "../ui/Spinner";
import { ShippingStatus } from "../enums/ShippingStatus";
import { useCancelOrder } from "../features/Orders/useCancelOrder";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import Tag from "../admin/ui/Tag";


const statuses = [
  ShippingStatus.Ordered,
  ShippingStatus.Processing,
  ShippingStatus.Shipped,
  ShippingStatus.Delivered
];

function Order() {
  const { order, isLoading } = useGetOrder()
  const { cancelOrder, isPending } = useCancelOrder()

  if (isLoading || !order) {
    return <Spinner />
  }

  const isCancelledOrder = order.shipping_status === ShippingStatus.Canceled
  const isReturnable = order.shipping_status === ShippingStatus.Delivered
  const currentStatusIndex = statuses.indexOf(order.shipping_status)


  return (
    <Container>
      <Header>
        <h2>Order #{order.order_number}</h2>
        <p>{formatDate(order.created_at)}</p>
        {isCancelledOrder &&  <Tag type="red">canceled</Tag>}
      </Header>

      <Timeline>
        {statuses.map((step, index) => (
          <Step key={step}>
            <Circle active={index <= currentStatusIndex} />
            <Label active={index <= currentStatusIndex}>{step}</Label>
            {index < statuses.length - 1 && (
              <Bar active={index < currentStatusIndex} />
            )}
          </Step>
        ))}
      </Timeline>

      <Section>
        <SectionTitle>Ordered Product</SectionTitle>
        <Product>
          <img src={order.product.image} />
          <div>
            <h4>{order.product.name}</h4>
            <p>Qty: {order.product.quantity}</p>
            <p>Price: {formatCurrency(order.product.price)}</p>
          </div>
        </Product>
      </Section>

      <Card>
        <CardSection>
          <SectionTitle>Ship To</SectionTitle>
          <p>{order.shipping_address.first_name} {order.shipping_address.last_name}</p>
          <p>{order.shipping_address.phone}</p>
          <p>{order.shipping_address.line1}</p>
          <p>{order.shipping_address?.line2}</p>
          <p>
            {order.shipping_address.city}, {order.shipping_address.state}
            - {order.shipping_address.pincode}
          </p>
        </CardSection>

        <CardSection right>
          <SectionTitle>Order Summary</SectionTitle>
          <SummaryRow>
            <span>Subtotal:</span>
            <span>{formatCurrency(order.price)}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Shipping:</span>
            <span>{formatCurrency(0)}</span>
          </SummaryRow>
          <SummaryRow bold>
            <span>Total:</span>
            <span>{formatCurrency(order.price)}</span>
          </SummaryRow>
          {/* <Button>Download Invoice</Button> */}
        </CardSection>
      </Card>
      <Section style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <SectionTitle>Return & Cancellation</SectionTitle>
          <p>Returns accepted within 10 days of delivery.</p>
        </div>
        <div>
          {!isCancelledOrder && !isReturnable && (
            <Modal>
              <Modal.Open opens="delete">
                <Button>
                  Cancel Order
                </Button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete
                  actionName="Cancel"
                  resourceName="order"
                  disabled={isPending}
                  onConfirm={() => {
                    if(order.id){
                      cancelOrder(order.id)
                    }
                  }} />
              </Modal.Window>
            </Modal>
          )}

          {isReturnable && (
            <Modal>
              <Modal.Open opens="delete">
                <Button>
                  Return Package
                </Button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete
                  actionName="Cancel"
                  resourceName="order"
                  disabled={isPending}
                  onConfirm={() => {
                    if(order.id){
                      cancelOrder(order.id)
                    }
                  }} />
              </Modal.Window>
            </Modal>
          )}
        </div>
      </Section>
    </Container>
  );
}

export default Order;

// -------------------- STYLES --------------------

const Container = styled.div`
  max-width: 900px;
  margin:0rem auto;
  padding: 2rem;
  background:var(--color-grey-0);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`;

const Header = styled.div`
  margin-bottom: 2rem;
  font-family: var(--font-secondary);

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
    color:var(--color-grey-400);
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--color-grey-100);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const CardSection = styled.div<{ right?: boolean }>`
  flex: 1;
  min-width: 250px;
  margin-bottom: 1rem;

  ${({ right }) => right && `
    text-align: right;
  `}
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const SummaryRow = styled.div<{ bold?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: ${({ bold }) => (bold ? "600" : "normal")};
`;


const Timeline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  position: relative;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
`;

const Circle = styled.div<{ active: boolean }>`
  width: 16px;
  height: 16px;
  background: ${({ active }) => (active ? "#2fe371" : "#d1d5db")};
  border-radius: 50%;
  z-index: 1;
`;

const Bar = styled.div<{ active: boolean }>`
  position: absolute;
  height: 4px;
  background: ${({ active }) => (active ? "#4ade80" : "#e5e7eb")};
  width: 100%;
  top: 6px;
  left: 50%;
  transform: translateX(0%);
  z-index: 0;
`;

const Label = styled.span<{ active: boolean }>`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ active }) => (active ? "#111" : "#aaa")};
`;

const Section = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  margin-bottom: 1.5rem;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    background: #f3f3f3;
  }

  h4 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    margin: 2px 0;
    font-size: 1.2rem;
    color: #444;
  }
`;
