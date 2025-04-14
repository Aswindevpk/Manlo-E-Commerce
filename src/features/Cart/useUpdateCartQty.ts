import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdateCartQty } from "../../services/apiCart";

function useUpdateCartQty() {
  const queryClient = useQueryClient();

  const { mutate: updateCartQuantity, isPending } = useMutation({
    mutationFn: UpdateCartQty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartCount"] }); // Refresh cart data
    },

    onError: () => {
      toast.error("Failed to update quantity");
    },
  });

  return { updateCartQuantity, isPending };
}

export default useUpdateCartQty;
