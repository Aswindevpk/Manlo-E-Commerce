import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProduct } from "../../services/apiProducts";

function useListProduct() {
  const queryClient = useQueryClient();

  const { mutate: ToggleProduct, isPending } = useMutation({
    mutationFn:updateProduct,
    onSuccess: (data) => {
      const message = data?.is_listed ? `Listed ${data?.name} !`:`Un-Listed ${data?.name} !`
      toast.success(message);
      queryClient.invalidateQueries({queryKey:["products"]}); 
    },

    onError: () => {
      toast.error("Failed");
    },
  });

  return { ToggleProduct, isPending };
}

export default useListProduct;
