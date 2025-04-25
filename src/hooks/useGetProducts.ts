import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProduct";

function useGetProducts({ isNew, brand }: { isNew?: boolean; brand?: string }) {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", brand],
    queryFn: () => getProducts({ isNew, brand }),
    retry: false,
  });
  return { isLoading, products, error };
}

export default useGetProducts;
