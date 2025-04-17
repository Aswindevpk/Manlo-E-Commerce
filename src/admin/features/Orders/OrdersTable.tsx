import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Button from "../../../ui/Button";
import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetOrders from "./useGetOrders";

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

  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <Container>
      <SectionHeader>
        <Heading>Orders</Heading>
        <Button>Add New</Button>
      </SectionHeader>
      <Table columns="1fr 1fr 1fr">
        <Table.Header>
          <div>Order Number</div>
          <div>Status</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={orders}
          render={(order) => (
            <Table.Row key={order.id}>
              <div>{order.order_number}</div>
              <div>{order.shipping_status}</div>
              <div>
                <a>Edit</a>/
                <a>Unlist</a>
              </div>
            </Table.Row>
          )} />
      </Table>
    </Container>
  )
}

export default OrdersTable