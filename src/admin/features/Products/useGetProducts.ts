import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts.ts";

function useGetProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: false,
  });

  return { isLoading, products, error };
}

export default useGetProducts;
