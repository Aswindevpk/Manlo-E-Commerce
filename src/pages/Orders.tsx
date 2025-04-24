import OrderItem from "../features/Orders/OrderItem"
import useOrders from "../features/Orders/useOrders"
import Spinner from "../ui/Spinner"

function Orders() {
  const { isLoading, orders } = useOrders()

  if(isLoading){
    return <Spinner/>
  }

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

export default Orders