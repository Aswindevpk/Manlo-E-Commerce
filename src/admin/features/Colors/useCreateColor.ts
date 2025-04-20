import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createColor as apiCreateColor } from "../../services/apiColors.ts";


function useCreateColor() {
  const queryClient = useQueryClient();

  const { mutate: createColor, isPending:isCreating } = useMutation({
    mutationFn:apiCreateColor,
    onSuccess: () => {
      toast.success("color created successfully!");
      queryClient.invalidateQueries({queryKey:["colors"]}); // Refresh cart data
    },
    onError: () => {
      toast.error("error while creating new color");
    },
  });

  return { createColor, isCreating };
}

export default useCreateColor;
