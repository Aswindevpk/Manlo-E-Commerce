import { useQuery } from "@tanstack/react-query";
import { getVariant } from "../../services/apiVariants";

function useGetVariant({ variantId }: { variantId: string | undefined }) {
  const {
    isLoading,
    data: variant,
    error,
  } = useQuery({
    queryKey: ["variant", variantId],
    queryFn:()=> getVariant({variantId}),
    retry: false,
  });

  return { isLoading, variant, error };
}

export default useGetVariant;
