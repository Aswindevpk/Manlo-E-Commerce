import { useQuery } from "@tanstack/react-query";
import { getColors } from "../../services/apiColors";

function useGetColors() {
  const {
    isLoading,
    data: colors
  } = useQuery({
    queryKey: ["colors"],
    queryFn: getColors,
    retry: false,
  });

  return { isLoading, colors};
}

export default useGetColors;
