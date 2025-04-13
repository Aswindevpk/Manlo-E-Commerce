import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { useUser } from "../Auth/useUser";
// import { useCreateOrder } from "./useCreateOrder";


type Props = {
  cartItems:{
    id:string
    unit_id:string;
    qty:number;
    price:number;
  }[]
  addressId:string
}

const CheckoutButton = ({ cartItems, addressId }:Props) => {
  // const { createOrder, loading } = useCreateOrder();
  const {user} = useUser()

  const handleCheckout = async () => {
    if(!addressId){
        toast.error("select an address")
    }

    const orders = cartItems.map((item) => ({
      user_id: user?.id,
      product_unit_id: item.unit_id,
      quantity: item.qty,
      price:item.price,
      address_id: addressId,
      payment_status: 'paid', // or dynamically set based on payment result
    }));
    console.log(orders)

    // await createOrder(orders);
  };

  return (
    <Button size="medium" style={{ width: "100%" }} onClick={handleCheckout} >
      Place Order and Pay
    </Button>
  );
};

export default CheckoutButton;
