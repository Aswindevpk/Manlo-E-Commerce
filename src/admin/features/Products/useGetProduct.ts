import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts.ts";

function useGetProduct({ productId }: { productId: string | undefined }) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn:()=> getProduct({productId}),
    retry: false,
  });

  return { isLoading, product, error };
}

export default useGetProduct;
