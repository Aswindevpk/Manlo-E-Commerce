import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createVariant as apiCreateVariant } from "../../services/apiVariants";

function useCreateVariant() {
  const queryClient = useQueryClient();

  const { mutate: createVariant, isPending:isCreating } = useMutation({
    mutationFn:apiCreateVariant,
    onSuccess: () => {
      toast.success("variant created successfully!");
      queryClient.invalidateQueries({queryKey:["variants"]}); // Refresh cart data
    },
    onError: () => {
      toast.error("error while creating new variant");
    },
  });

  return { createVariant, isCreating };
}

export default useCreateVariant;
