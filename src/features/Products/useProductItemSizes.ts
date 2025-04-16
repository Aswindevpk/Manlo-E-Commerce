import { useQuery } from "@tanstack/react-query";
import { getProductVariantSizes } from "../../services/apiProduct";

function useProductVariantSizes(variantId: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["productItemsizes", variantId],
    queryFn: () => getProductVariantSizes({ variantId }),
    enabled: !!variantId,
    retry: false,
  });

  //making it set
  const availableSizes = new Set<string>(data?.map(item => item));


  return { isLoading, availableSizes, error };
}

export default useProductVariantSizes;
