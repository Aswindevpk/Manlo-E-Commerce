import OrderItem from "../features/Orders/OrderItem"
import useOrders from "../features/Orders/useOrders";
const sampleOrder = {
  orderDate: "Oct 27, 2019",
  total: "120.00",
  shipTo: "Acme Corp, Saarlouis, Germany",
  orderNumber: "1",
  image: "/hero-img1.jpg",
  productName: "Nike T-shirt blue",
  shipDate: "12.11.19",
  description: "color(Blue),size(S)",
  qty: 1,
  deliveryDate: "Nov 15, 2019",
};

function Order() {
  const { isLoading, orders } = useOrders()

  return (
    <div>
      <h1>Orders</h1>
      <div>
        {orders?.map(order=>(
        <OrderItem order={order} />
        ))}
      </div>
    </div>
  )
}

export default Order