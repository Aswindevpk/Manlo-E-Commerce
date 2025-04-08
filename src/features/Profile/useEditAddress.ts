import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Address } from "../../types";
import supabase from "../../services/supabase";

export function useEditAddress() {
  const queryClient = useQueryClient();

  const { mutate: editAddress, isPending: isEditing } = useMutation({
    mutationFn: async ({
      id,
      newAddressData,
    }: {
      id: string;
      newAddressData: Partial<Address>;
    }) => {
      const { data, error } = await supabase
        .from("addresses")
        .update(newAddressData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });

  return { editAddress, isEditing };
}
