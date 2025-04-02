import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import supabase from "../../services/supabase";


function useRemoveFromCart() {
  const queryClient = useQueryClient();

  const { mutate: removeFromCart, isPending: isRemoving } = useMutation({
    mutationFn: async (cartItemId: number) => {
      const { error } = await supabase
        .from("shoppingCartItem")
        .delete()
        .eq("id", cartItemId); // Remove item by ID

      if (error) throw new Error("Could not remove item from cart");
    },

    onSuccess: () => {
      toast.success("Item removed from cart");
      queryClient.invalidateQueries(["cart"]); // Refresh cart data
    },

    onError: () => {
      toast.error("Failed to remove item from cart");
    },
  });

  return { removeFromCart, isRemoving };
}

export default useRemoveFromCart;
