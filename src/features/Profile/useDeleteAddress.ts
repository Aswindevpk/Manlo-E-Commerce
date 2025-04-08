import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../services/supabase";

function useDeleteAddress() {
  const queryClient = useQueryClient();

  const { mutate: deleteAddress, isPending: isDeleting } = useMutation({
    mutationFn: async (addressId: string) => {
      const { error } = await supabase
        .from("addresses")
        .delete()
        .eq("id", addressId);

      if (error) throw new Error(error.message);
      return addressId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });

  return { deleteAddress, isDeleting };
}

export default useDeleteAddress;
