import { useQuery } from "@tanstack/react-query";
import { getProductColors } from "../../services/apiProduct";

function useProductColors({ productId }: { productId: string }) {
  const {
    isLoading,
    data: colors,
    error,
  } = useQuery({
    queryKey: ["color", productId],
    queryFn: () => getProductColors({ productId }),
    enabled: !!productId,
    retry: false,
  });

  return { isLoading, colors, error };
}

export default useProductColors;
