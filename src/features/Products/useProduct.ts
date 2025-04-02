import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/apiProduct";

function useProduct() {
  const { productId } = useParams();

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct({ productId}),
    enabled: !!productId,
    retry: false,
  });

  return { isLoading, product, error };
}

export default useProduct;
