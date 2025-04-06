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
      const { data, error } = await supabase
        .from("wishlist")
        .select("id,product_units(id,sizes(name),product_variants(id,name,products(price),product_variant_images(image_url),colors(name,hex_code)))")
        .eq("user_id", userId);

      if (error) throw new Error(error.message);

      const filteredData = data.map(dataItem=>({
        id:dataItem.product_units.product_variants.id,
        productUnitId: dataItem.product_units.id,
        productName: dataItem.product_units.product_variants.name,
        size:dataItem.product_units.sizes.name,
        color:dataItem.product_units.product_variants.colors.name,
        price:dataItem.product_units.product_variants.products.price,
        images:dataItem.product_units.product_variants.product_variant_images,
      }))
      
      return filteredData;
    },
    enabled: !!userId, // Only fetch if user is logged in
  });

  return { wishlist, isLoading, error };
}

export default useGetWishlists;
