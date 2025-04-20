import { useQuery } from "@tanstack/react-query";
import { getUnits } from "../../services/apiUnits";

function useGetUnits({ variantId }: { variantId: string | undefined }) {
  const { isLoading, data: units } = useQuery({
    queryKey: ["units",variantId],
    queryFn: () => getUnits({ variantId }),
    retry: false,
  });

  return { isLoading, units};
}

export default useGetUnits;
