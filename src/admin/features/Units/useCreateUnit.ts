import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUnit as apiCreateVariant } from "../../services/apiUnits";

function useCreateUnit() {
  const queryClient = useQueryClient();

  const { mutate: createUnit, isPending:isCreating } = useMutation({
    mutationFn:apiCreateVariant,
    onSuccess: () => {
      toast.success("unit created successfully!");
      queryClient.invalidateQueries({queryKey:["units"]}); // Refresh cart data
    },
    onError: () => {
      toast.error("error while creating new unit");
    },
  });

  return { createUnit, isCreating };
}

export default useCreateUnit;
