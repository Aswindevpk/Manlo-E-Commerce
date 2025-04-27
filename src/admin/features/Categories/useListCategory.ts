import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { UpdateCategoryListing } from "../../services/apiCategories";

function useListCategory() {
  const queryClient = useQueryClient();

  const { mutate: ToggleCategory, isPending } = useMutation({
    mutationFn:UpdateCategoryListing,
    onSuccess: (data) => {
      const message = data?.is_listed ? `Listed ${data?.name} !`:`Un-Listed ${data?.name} !`
      toast.success(message);
      queryClient.invalidateQueries({queryKey:["categories"]}); 
      queryClient.invalidateQueries({queryKey:["category",data?.id]}); 
    },

    onError: () => {
      toast.error("Failed");
    },
  });

  return { ToggleCategory, isPending };
}

export default useListCategory;
