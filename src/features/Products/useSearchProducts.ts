import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../../services/apiProduct";

function useSearchProducts({ query }: { query: string }) {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchProducts(query),
    retry: false,
  });
  return { isLoading, products, error };
}

export default useSearchProducts;
