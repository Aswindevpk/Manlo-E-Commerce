import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProduct as apiUpdateProduct } from "../../services/apiProducts.ts";

function useUpdateProduct(editId: string | undefined) {
  const queryClient = useQueryClient();

  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateProduct,
    onSuccess: () => {
      toast.success("product updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", editId] });
    },
    onError: () => {
      toast.error("error while updating product");
    },
  });

  return { updateProduct, isUpdating };
}

export default useUpdateProduct;
