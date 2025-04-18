import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateVariant as apiUpdateVariant } from "../../services/apiVariants";

function useUpdateVariant(editId: string | undefined) {
  const queryClient = useQueryClient();

  const { mutate: updateVariant, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateVariant,
    onSuccess: () => {
      toast.success("variant updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["variants"] });
      queryClient.invalidateQueries({ queryKey: ["variant", editId] });
    },
    onError: () => {
      toast.error("error while updating variant");
    },
  });

  return { updateVariant, isUpdating };
}

export default useUpdateVariant;
