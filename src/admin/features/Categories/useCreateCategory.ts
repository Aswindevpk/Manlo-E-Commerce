import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategory as apiCreateCategory } from "../../services/apiCategories";


function useCreateCategory() {
  const queryClient = useQueryClient();

  const { mutate: createCategory, isPending:isCreating } = useMutation({
    mutationFn:apiCreateCategory,
    onSuccess: () => {
      toast.success("category created successfully!");
      queryClient.invalidateQueries({queryKey:["categories"]}); // Refresh cart data
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createCategory, isCreating };
}

export default useCreateCategory;
