import { useQuery } from "@tanstack/react-query";
import { getSizes } from "../services/apiSize";

function useGetSizes() {
  const {
    isLoading,
    data: sizes,
    error,
  } = useQuery({
    queryKey: ["sizes"],
    queryFn: getSizes,
    retry: false,
  });

  return { sizes, isLoading, error };
}

export default useGetSizes;
