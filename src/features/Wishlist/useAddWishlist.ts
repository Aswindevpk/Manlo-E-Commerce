import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

function useAddWishlist() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user?.id;

  const { mutate: addToWishlist, isPending: isAdding } = useMutation({
    mutationFn: async (variationId: number) => {
      if (!userId) throw new Error("User not logged in");

      const { data, error } = await supabase
        .from("wishlist")
        .insert([{ user_id: userId, product_unit_id: variationId }]);

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["wishlist", userId]);
      toast.success("Added to wishlist!");
    },
    onError: () => toast.error("Failed to add to wishlist"),
  });

  return { addToWishlist, isAdding };
}

export default useAddWishlist;
