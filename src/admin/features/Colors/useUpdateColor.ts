import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateColor as apiUpdateColor } from "../../services/apiColors";

function useUpdateColor() {
  const queryClient = useQueryClient();

  const { mutate: updateColor, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateColor,
    onSuccess: () => {
      toast.success("product updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
    onError: () => {
      toast.error("error while updating product");
    },
  });

  return { updateColor, isUpdating };
}

export default useUpdateColor;
