import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCategory as apiUpdateCategory } from "../../services/apiCategories";

function useUpdateCategory() {
  const queryClient = useQueryClient();

  const { mutate: updateCategory, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateCategory,
    onSuccess: () => {
      toast.success("Category updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("error while updating category");
    },
  });

  return { updateCategory, isUpdating };
}

export default useUpdateCategory;
