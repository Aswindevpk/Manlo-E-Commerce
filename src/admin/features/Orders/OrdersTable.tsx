import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetOrders from "./useGetOrders";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.section`
  display: flex;
  justify-content: space-between;
`;


function OrdersTable() {
  const { isLoading, orders } = useGetOrders()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <SectionHeader>
        <Heading>Orders</Heading>
        <Button>Add New</Button>
      </SectionHeader>
      <Table columns="1fr 1fr 1fr 1fr 8rem 8rem">
        <Table.Header>
          <div>Order Number</div>
          <div>Product</div>
          <div>Payment</div>
          <div>shipping</div>
          <div>total</div>
          <div>action</div>
        </Table.Header>
        <Table.Body
          data={orders}
          render={(order) => (
            <Table.Row key={order.id}>
              <div>{order.order_number}</div>
              <div>{order.product.name}</div>
              <div>{order.payment_status}</div>
              <div>{order.shipping_status}</div>
              <div>{order.price}</div>
              <Link
                to={`/admin/order/${order.id}`}>view</Link>
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default OrdersTable