import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { useUser } from "../Auth/useUser";
import { usePlaceOrders } from "./useCreateOrder";
import Spinner from "../../ui/Spinner";
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
  const { mutate: placeOrders, isPending } = usePlaceOrders();

  const handleCheckout = async () => {
    //temp 
    console.log(cartItems)
    if(!addressId){
        toast.error("select an address")
    }
    placeOrders(user?.id, {
      onSuccess: (data) => {
        if (data.success) {
          toast.success("hi")
          // Redirect to success page or show success message
        } else {
          // Handle partial success cases
        }
      },
      onSettled: () => {
        toast.success("placed")
      }
    });
  };

  if(isPending){
    return <Spinner/>
  }

  return (
    <Button size="medium" style={{ width: "100%" }} onClick={handleCheckout} >
      Place Order and Pay
    </Button>
  );
};

export default CheckoutButton;
