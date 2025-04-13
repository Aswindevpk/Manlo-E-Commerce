import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../services/supabase";

interface FormValues {
  username: string;
  email: string;
}

function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: async ({
      userId,
      updatedData,
    }: {
      userId: string;
      updatedData: FormValues;
    }) => {
      const { data, error } = await supabase
        .from("users")
        .update(updatedData)
        .eq("id", userId)
        .select();

      if (error) throw new Error(error.message);
      return data;
    },

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["user", variables.userId] });
    },
  });

  return { updateUser, isUpdating, error };
}

export default useUpdateUser;
