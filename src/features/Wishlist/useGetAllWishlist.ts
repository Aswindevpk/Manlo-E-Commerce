import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";
import { wishlistItem } from "../../types";



function useGetAllWishlist() {
  const { user } = useUser();
  const userId = user?.id;



  const {
    isLoading,
    data: wishlist,
    error,
  } = useQuery({
    queryKey: ["allWishlist"],
    queryFn: async ():Promise<wishlistItem[]> => {
      if (!userId) return [];
      const { data, error } = await supabase.
      from("wishlist_item_view")
      .select("*")
      .eq("user_id",userId)

      if (error) throw new Error(error.message);
      
      return data;
    },
    enabled: !!userId, // Only fetch if user is logged in
  });

  return { wishlist, isLoading, error };
}

export default useGetAllWishlist;
