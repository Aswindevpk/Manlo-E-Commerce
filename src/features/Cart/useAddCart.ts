import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../Auth/useUser";
import { useSearchParams } from "react-router-dom";
import { AddtoCart } from "../../services/apiCart";

function useAddCart() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const variationId = Number(searchParams.get("variation"));
  const { user } = useUser();
  const userId = user?.userId;

  const { mutate: addCart, isPending: isAddingToCart } = useMutation({
    mutationFn: () => AddtoCart({ variationId, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", userId]);
      toast.success("Added to Cart!");
    },
    onError: () => toast.error("There was an error while adding to cart in."),
  });

  return { addCart, isAddingToCart };
}

export default useAddCart;
