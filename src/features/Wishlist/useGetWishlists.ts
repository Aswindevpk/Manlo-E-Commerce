import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

function useGetWishlists() {
  const { user } = useUser();
  const userId = user?.userId;

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
        .select("id,productVariation(id,sizeOption(name),productItem(id,name,product(price),productImage(image_url),color(name,hex_code)))")
        .eq("user_id", userId);

      if (error) throw new Error(error.message);

      const filteredData = data.map(dataItem=>({
        id:dataItem.productVariation.productItem.id,
        variationId: dataItem.productVariation.id,
        productName: dataItem.productVariation.productItem.name,
        size:dataItem.productVariation.sizeOption.name,
        color:dataItem.productVariation.productItem.color.name,
        price:dataItem.productVariation.productItem.product.price,
        images:dataItem.productVariation.productItem.productImage,
      }))
      
      return filteredData;
    },
    enabled: !!userId, // Only fetch if user is logged in
  });
  
  return { wishlist, isLoading, error };
}

export default useGetWishlists;
