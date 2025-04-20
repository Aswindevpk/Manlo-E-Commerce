import { useQuery } from "@tanstack/react-query";
import { getUnit } from "../../services/apiUnits";

function useGetUnit({ unitId }: { unitId: string | undefined }) {
  const {
    isLoading,
    data: unit,
    error,
  } = useQuery({
    queryKey: ["unit", unitId],
    queryFn:()=> getUnit({unitId}),
    retry: false,
  });

  return { isLoading, unit, error };
}

export default useGetUnit;
