import OrderItem from "../features/Orders/OrderItem"
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
  return (
    <div>
      <h1>Orders</h1>
      <div>
        <OrderItem order={sampleOrder}/>
        <OrderItem order={sampleOrder}/>
        <OrderItem order={sampleOrder}/>
      </div>
    </div>
  )
}

export default Order