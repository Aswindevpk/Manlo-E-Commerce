import { CiShoppingCart } from "react-icons/ci"
import OrderItem from "../features/Orders/OrderItem"
import useOrders from "../features/Orders/useOrders"
import EmptyState from "../ui/EmptyState"
import Spinner from "../ui/Spinner"

function Orders() {
  const { isLoading, orders } = useOrders()

  if(isLoading || !orders){
    return <Spinner/>
  }

  if (orders.length === 0) {
    return <EmptyState
        icon={<CiShoppingCart />}
        title="No Orders Yet !"
        message="Start adding items to your cart and order!"
    />
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