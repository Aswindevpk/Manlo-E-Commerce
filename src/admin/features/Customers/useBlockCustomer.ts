import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../services/supabase";
import toast from "react-hot-toast";

function useBlockCustomer() {
  const queryClient = useQueryClient();

  const { mutate: ToggleCustomer, isPending: isRemoving } = useMutation({
    mutationFn: async ({
      customerId,
      data,
    }: {
      customerId: string;
      data: { is_blocked: boolean };
    }) => {
      const { error } = await supabase
        .from("users")
        .update(data)
        .eq("id", customerId); // Remove item by ID

      if (error) throw new Error(error.message);
    },

    onSuccess: () => {
      toast.success("success");
      queryClient.invalidateQueries({queryKey:["customers"]}); // Refresh cart data
    },

    onError: () => {
      toast.error("Failed");
    },
  });

  return { ToggleCustomer, isRemoving };
}

export default useBlockCustomer;
