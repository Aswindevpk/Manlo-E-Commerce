import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { useUser } from "../Auth/useUser";
import { usePlaceOrders } from "./useCreateOrder";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";


type Props = {
  addressId: string
}

const CheckoutButton = ({ addressId }: Props) => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { mutate: placeOrders, isPending } = usePlaceOrders();

  const handleCheckout = async () => {
    if (!addressId) {
      toast.error("select an address")
    }
    placeOrders({ userId: user?.id, addressId: addressId },{
      onSuccess:(data)=>{
        console.log(data)
        navigate("/order-confirm")
      }
    });
  };

  if (isPending) {
    return <Spinner />
  }

  return (
    <Button size="medium" style={{ width: "100%" }} onClick={handleCheckout} >
      Place Order and Pay
    </Button>
  );
};

export default CheckoutButton;
