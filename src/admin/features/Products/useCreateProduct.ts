import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProduct as apiCreateProduct } from "../../services/apiProducts.ts";

function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending:isCreating } = useMutation({
    mutationFn:apiCreateProduct,
    onSuccess: () => {
      toast.success("product created successfully!");
      queryClient.invalidateQueries({queryKey:["products"]}); // Refresh cart data
    },
    onError: () => {
      toast.error("error while creating new product");
    },
  });

  return { createProduct, isCreating };
}

export default useCreateProduct;
