import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../services/apiBrands.ts";

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

  return { isLoading, brands, error };
}

export default useGetBrands;
