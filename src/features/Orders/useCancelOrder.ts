import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder as cancelOrderApi } from "../../services/apiOrders";
import toast from "react-hot-toast";

export const useCancelOrder = () => {
    const queryClient = useQueryClient();

  const {
    mutate: cancelOrder,
    isPending,
    error,
  } = useMutation({
    mutationFn: cancelOrderApi,
    onSuccess: (orderId) => {
      toast.success("Order Canceled Successfully!");
        queryClient.invalidateQueries({ queryKey: ['order',orderId] }); // This will refetch the orders list
    },
    onError: (error: Error) => {
        toast.error(error.message)
      console.error("Order cancellation failed:", error.message);
    },
  });

  return { cancelOrder, error, isPending };
};
