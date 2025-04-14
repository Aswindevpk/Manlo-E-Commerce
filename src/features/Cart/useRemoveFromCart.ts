import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RemoveFromCart } from "../../services/apiCart";


function useRemoveFromCart() {
  const queryClient = useQueryClient();
  
  const { mutate: removeFromCart, isPending: isRemoving } = useMutation({
    mutationFn: RemoveFromCart,
    onSuccess: () => {
      toast.success("Item removed from cart");
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["cartCount"] }),
        queryClient.invalidateQueries({ queryKey: ["cart"] })
      ]);
    },
    onError: () => {
      toast.error("Failed to remove item from cart");
    },
  });

  return { removeFromCart, isRemoving };
}

export default useRemoveFromCart;
