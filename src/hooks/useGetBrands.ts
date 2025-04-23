import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../services/apiBrand";

function useGetBrands() {
  const {
    isLoading,
    data: brands,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
    retry: false,
  });

  return { brands, isLoading, error };
}

export default useGetBrands;
