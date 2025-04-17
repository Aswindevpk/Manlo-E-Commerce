import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../Auth/useUser";
import { useSearchParams } from "react-router-dom";
import { AddtoCart } from "../../services/apiCart";

function useAddCart() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const variationId = searchParams.get("unit");
  const { user } = useUser();
  const userId = user?.id;

  const { mutate: addCart, isPending: isAddingToCart } = useMutation({
    mutationFn: () => AddtoCart({ variationId, userId }),
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["cartCount"] }),
        queryClient.invalidateQueries({ queryKey: ["cart"] })
      ]);
      toast.success("Added to Cart!");
    },
    onError: (error) => toast.error(error.message),
  });

  return { addCart, isAddingToCart };
}

export default useAddCart;
