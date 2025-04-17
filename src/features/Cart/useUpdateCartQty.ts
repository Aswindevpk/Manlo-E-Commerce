import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdateCartQty } from "../../services/apiCart";

function useUpdateCartQty() {
  const queryClient = useQueryClient();

  const { mutate: updateCartQuantity, isPending } = useMutation({
    mutationFn: UpdateCartQty,
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["cartCount"] }),
        queryClient.invalidateQueries({ queryKey: ["cart"] })
      ]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateCartQuantity, isPending };
}

export default useUpdateCartQty;
