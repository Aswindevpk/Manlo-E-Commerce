import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { DeleteFromWishlist } from "../../services/apiWishlist";

function useDeleteWishlist() {
  const queryClient = useQueryClient();


  const { mutate: removeFromWishlist, isPending: isRemoving } = useMutation({
    mutationFn: DeleteFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allWishlist"] });
      toast.success("Removed from wishlist!");
    },
    onError: () => toast.error("Failed to remove from wishlist"),
  });

  return { removeFromWishlist, isRemoving };
}

export default useDeleteWishlist;
