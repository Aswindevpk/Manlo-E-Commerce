import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

function useGetUser() {
  const { user } = useUser();

  const userId = user?.id;

  const {
    isLoading,
    data: userDetail,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      if (!userId) return null;
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!userId,
    retry:false
  });

  return { userDetail, isLoading, error };
}

export default useGetUser;
