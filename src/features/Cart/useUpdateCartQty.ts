import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import supabase from "../../services/supabase";


function useUpdateCartQty() {
  const queryClient = useQueryClient();

  const { mutate: updateCartQuantity, isPending } = useMutation({
    mutationFn: async ({ cartItemId, newQty }: { cartItemId: number; newQty: number }) => {
      if (newQty < 1) throw new Error("Quantity must be at least 1");

      const { error } = await supabase
        .from("carts")
        .update({ quantity: newQty })
        .eq("id", cartItemId);

      if (error) throw new Error("Could not update quantity");
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]); // Refresh cart data
    },

    onError: () => {
      toast.error("Failed to update quantity");
    },
  });

  return { updateCartQuantity, isPending };
}

export default useUpdateCartQty;
