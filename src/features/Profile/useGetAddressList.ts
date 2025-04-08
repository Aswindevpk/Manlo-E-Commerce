import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

function useGetAddressList() {
  const { user } = useUser();

  const userId = user?.id;

  const {
    isLoading,
    data: addressList,
    error,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      if (!userId) return null;
      const { data, error } = await supabase
        .from("addresses")
        .select("*")
        .eq("user_id", userId);

      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!userId,
  });

  return { addressList, isLoading, error };
}

export default useGetAddressList;
