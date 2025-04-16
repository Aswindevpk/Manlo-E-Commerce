import { useQuery } from "@tanstack/react-query";
import { getProductVariantByColor } from "../../services/apiProduct";

function useGetProductVariantByColor({ productId, colorId }: { productId: string,colorId:string }) {
  const {
    isLoading,
    data: productVariant,
    error,
  } = useQuery({
    queryKey: ["productVariant", productId,colorId],
    queryFn:()=> getProductVariantByColor({productId,colorId}),
    enabled: !!productId,
    retry: false,
  });

  return { isLoading, productVariant, error };
}

export default useGetProductVariantByColor;
