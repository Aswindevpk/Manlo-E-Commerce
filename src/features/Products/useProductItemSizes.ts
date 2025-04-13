import { useQuery } from "@tanstack/react-query";
import { getProductItemSizes } from "../../services/apiProduct";

function useProductItemSizes(productItemId: number) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["productItemsizes", productItemId],
    queryFn: () => getProductItemSizes({ productItemId }),
    enabled: !!productItemId,
    retry: false,
  });

  //making it set
  const availableSizes = new Set<string>(data?.map(item => item));


  return { isLoading, availableSizes, error };
}

export default useProductItemSizes;
