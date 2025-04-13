import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

function useGetWishlists() {
  const { user } = useUser();
  const userId = user?.id;

  const {
    isLoading,
    data: wishlist,
    error,
  } = useQuery({
    queryKey: ["wishlists", userId],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from("cart_product_view").select("*");

      if (error) throw new Error(error.message);

      const filteredData = data.map(item => ({
        id: item.id,
        productUnitId: item.product_unit_id,
        productName: item.product_name,
        size: item.size,
        color: item.color,
        price: item.price,
        images: item.images,
      }));
      
      return filteredData;
    },
    enabled: !!userId, // Only fetch if user is logged in
  });

  return { wishlist, isLoading, error };
}

export default useGetWishlists;
