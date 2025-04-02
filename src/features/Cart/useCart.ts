import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import { getCart } from "../../services/apiCart";

function useCart() {
  const { user, isAuthenticated } = useUser();

  const { isLoading, data:cartItems, error } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart({ userId: user?.userId }),
    enabled: isAuthenticated,
    retry: false,
  });


  return { isLoading, cartItems, error };
}

export default useCart;
