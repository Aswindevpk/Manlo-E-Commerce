import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateOrder as apiUpdateOrder } from "../../services/apiOrders";

function useUpdateOrder() {
  const queryClient = useQueryClient();

  const { mutate: updateOrder, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateOrder,
    onSuccess: (data) => {
        console.log(data)
      toast.success("order updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["orders",data.id] });
    },
    onError: () => {
      toast.error("error while updating order");
    },
  });

  return { updateOrder, isUpdating };
}

export default useUpdateOrder;
