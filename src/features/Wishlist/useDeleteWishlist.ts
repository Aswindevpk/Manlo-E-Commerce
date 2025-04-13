import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

function useDeleteWishlist() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user?.id;

  const { mutate: removeFromWishlist, isPending: isRemoving } = useMutation({
    mutationFn: async (productUnitId: string | null) => {
      if (!userId) throw new Error("User not logged in");

      const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", userId)
        .eq("product_unit_id", productUnitId);

      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", userId] });
      toast.success("Removed from wishlist!");
    },
    onError: () => toast.error("Failed to remove from wishlist"),
  });

  return { removeFromWishlist, isRemoving };
}

export default useDeleteWishlist;
