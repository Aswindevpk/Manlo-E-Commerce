import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCustomer } from "../../services/apiCustomers";

function useBlockCustomer() {
  const queryClient = useQueryClient();

  const { mutate: ToggleCustomer, isPending } = useMutation({
    mutationFn:updateCustomer,
    onSuccess: (data) => {
      const message = data?.is_blocked ? `Blocked ${data?.email} !`:`Un-Blocked ${data?.email} !`
      toast.success(message);
      queryClient.invalidateQueries({queryKey:["customers"]}); // Refresh cart data
    },

    onError: () => {
      toast.error("Failed");
    },
  });

  return { ToggleCustomer, isPending };
}

export default useBlockCustomer;
