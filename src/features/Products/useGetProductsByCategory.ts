import { useQuery } from "@tanstack/react-query";
import supabase from "../../services/supabase";

const fetchProductsByCategory = async (categorySlug: string) => {
  const { data, error } = await supabase
  .rpc('get_filtered_product_variants', { category_slug: categorySlug});
  
  if (error) throw new Error(error.message);

  return data;
};

export const useGetProductsByCategory = ({
  categorySlug,
}: {
  categorySlug: string;
}) => {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products", categorySlug],
    queryFn: () => fetchProductsByCategory(categorySlug),
    enabled: !!categorySlug, // Only fetch if category is provided
    retry:false
  });
  return { isLoading, products };
};
