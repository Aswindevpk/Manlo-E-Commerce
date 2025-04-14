import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";
import { useSearchParams } from "react-router-dom";

function useGetWishlist() {
  const [searchParams] = useSearchParams();
  const variationId = Number(searchParams.get("variation"));
  const { user } = useUser();
  const userId = user?.id;

  const {
    isLoading,
    data: wishlistItem,
    error,
  } = useQuery({
    queryKey: ["wishlist", userId, variationId],
    queryFn: async () => {
      if (!userId || !variationId) return null;
      const { data, error } = await supabase
        .from("wishlist")
        .select("*")
        .eq("user_id", userId)
        .eq("product_unit_id", variationId)
        .single();
        

      if (error && error.code !== "PGRST116") throw new Error(error.message); // Ignore "No data found" error
      return data;
    },
    enabled: !!userId && !!variationId,
  });

  return { wishlistItem, isLoading, error };
}

export default useGetWishlist;
