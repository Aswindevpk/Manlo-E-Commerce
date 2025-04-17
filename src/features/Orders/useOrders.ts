import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import { getOrders } from "../../services/apiOrders";


function useOrders() {
  const { user } = useUser();

  const userId = user?.id;

  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders({ userId }),
    enabled: !!userId,
    retry: false,
  });

  return { isLoading, orders, error };
}

export default useOrders;
