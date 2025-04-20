import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBrand as apiUpdateBrand } from "../../services/apiBrands";

function useUpdateBrand() {
  const queryClient = useQueryClient();

  const { mutate: updateBrand, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateBrand,
    onSuccess: () => {
      toast.success("product updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["brands"] });
    },
    onError: () => {
      toast.error("error while updating product");
    },
  });

  return { updateBrand, isUpdating };
}

export default useUpdateBrand;
