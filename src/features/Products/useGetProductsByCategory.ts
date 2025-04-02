import { useQuery } from "@tanstack/react-query";
import supabase from "../../services/supabase";

const fetchProductsByCategory = async (categoryId: number) => {
  const { data, error } = await supabase
    .from("product")
    .select("*,productItem(*)")
    .eq("category_id", categoryId);

  if (error) throw new Error(error.message);
  return data;
};

export const useGetProductsByCategory = (categoryId: number) => {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => fetchProductsByCategory(categoryId),
    enabled: !!categoryId, // Only fetch if category is provided
  });
  return { isLoading, products };
};
