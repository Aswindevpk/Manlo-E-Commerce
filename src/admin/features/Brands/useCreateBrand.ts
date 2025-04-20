import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBrand as apiCreateBrand } from "../../services/apiBrands.ts";

function useCreateBrand() {
  const queryClient = useQueryClient();

  const { mutate: createBrand, isPending: isCreating } = useMutation({
    mutationFn: apiCreateBrand,
    onSuccess: () => {
      toast.success("brand created successfully!");
      queryClient.invalidateQueries({ queryKey: ["brands"] }); // Refresh cart data
    },
    onError: () => {
      toast.error("error while creating new color");
    },
  });

  return { createBrand, isCreating };
}

export default useCreateBrand;
