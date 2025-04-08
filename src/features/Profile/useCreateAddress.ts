import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Address } from "../../types";
import supabase from "../../services/supabase";
import { useUser } from "../Auth/useUser";

export function useCreateAddress() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: createAddress, isPending: isCreating } = useMutation({
    mutationFn: async ({ newAddress }: { newAddress: Address }) => {
      const newdata = { ...newAddress, user_id: user?.id };
      const { data, error } = await supabase
        .from("addresses")
        .insert([newdata])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });

  return { createAddress, isCreating };
}
