import { useQuery } from "@tanstack/react-query";
import { getUnitSizes } from "../../services/apiUnits";

function useGetUnitSizes({ variantId }: { variantId: string | undefined }) {
  const { isLoading, data: unitSizes } = useQuery({
    queryKey: ["unitSizes"],
    queryFn: () => getUnitSizes({ variantId }),
    retry: false,
  });

  return { isLoading, unitSizes };
}

export default useGetUnitSizes;
