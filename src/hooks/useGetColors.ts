import { useQuery } from "@tanstack/react-query";
import { getColors } from "../services/apiColor";

function useGetColors() {
  const {
    isLoading,
    data: colors,
    error,
  } = useQuery({
    queryKey: ["colors"],
    queryFn: getColors,
    retry: false,
  });

  return { colors, isLoading, error };
}

export default useGetColors;
