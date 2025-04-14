import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AddToWishlist } from "../../services/apiWishlist";


function useAddWishlist() {
  const queryClient = useQueryClient();
  const { mutate: addToWishlist, isPending: isAdding } = useMutation({
    mutationFn: AddToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Added to wishlist!");
    },
    onError: () => toast.error("Failed to add to wishlist"),
  });

  return { addToWishlist, isAdding };
}

export default useAddWishlist;
