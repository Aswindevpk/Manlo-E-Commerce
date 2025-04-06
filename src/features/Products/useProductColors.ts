import { useQuery } from "@tanstack/react-query";
import { getProductColors } from "../../services/apiProduct";
import useProductItem from "./useProductItem";

function useProductColors() {
  const {productItem} = useProductItem()
  const productId = productItem?.product_id

  const {
    isLoading,
    data: colors,
    error,
  } = useQuery({
    queryKey: ["color",productId],
    queryFn: () => getProductColors({productId}),
    enabled:!!productId,
    retry: false,
  });



  return { isLoading, colors, error };
}

export default useProductColors;
