import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrders";
import { useParams } from "react-router-dom";

function useGetOrder() {
  const { orderId } = useParams();

  const {
    isLoading,
    data: order,
    error,
  } = useQuery({
    queryKey: ["order",orderId],
    queryFn: () => getOrder({ orderId }),
    enabled: !!orderId,
    retry: false,
  });

  return { isLoading, order, error };
}

export default useGetOrder;
