import { useQuery } from "@tanstack/react-query";
import supabase from "../../services/supabase";
import { Product } from "../../types";

type ProductResult = {
  id: string;
  productname: string;
  price: string; // or number if you want to parse it
  product_id: string;
  brand: string;
  is_new: boolean;
  images: {
    image_url: string;
  }[];
};

const fetchProductsByCategory = async (categorySlug: string):Promise<Product[]> => {
  const { data, error } = await supabase
  .rpc('get_filtered_product_variants', { category_slug: categorySlug});
  
  if (error) throw new Error(error.message);

  const filteredData = data.map((item:ProductResult) => ({
    id: item.id,
    productName: item.productname,
    product_id: item.product_id,
    price: item.price,
    brand: item.brand,
    is_new: item.is_new,
    images: item.images,
  }));

  return filteredData;
};

export const useGetProductsByCategory = ({
  categorySlug,
}: {
  categorySlug: string ;
}) => {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products", categorySlug],
    queryFn: () => fetchProductsByCategory(categorySlug),
    enabled: !!categorySlug, // Only fetch if category is provided
    retry:false
  });
  return { isLoading, products };
};
