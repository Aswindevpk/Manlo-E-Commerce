import { useQuery } from "@tanstack/react-query";
import { getProductUnit } from "../../services/apiProduct";

function useProductUnit(variantId: string, sizeId?: string ) {
  const {
    isLoading,
    data: productUnit,
    error,
  } = useQuery({
    queryKey: ["productUnit", variantId, sizeId],
    queryFn: () => getProductUnit({ variantId, sizeId }),
    enabled: !!sizeId && !!variantId,
    retry: false,
  });

  return { isLoading, productUnit, error };
}

export default useProductUnit;
