import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUnit as apiUpdateUnit } from "../../services/apiUnits";

function useUpdateUnit(editId: string | undefined) {
  const queryClient = useQueryClient();

  const { mutate: updateUnit, isPending: isUpdating } = useMutation({
    mutationFn: apiUpdateUnit,
    onSuccess: () => {
      toast.success("unit updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["units"] });
      queryClient.invalidateQueries({ queryKey: ["unit", editId] });
    },
    onError: () => {
      toast.error("error while updating unit");
    },
  });

  return { updateUnit, isUpdating };
}

export default useUpdateUnit;
