import { useQuery } from "@tanstack/react-query";
import { getVariants } from "../../services/apiVariants";


function useGetVariants({productId}:{productId:string | undefined}) {
  const {
    isLoading,
    data: variants
  } = useQuery({
    queryKey: ["variants",productId],
    queryFn: ()=>getVariants({productId}),
    retry: false,
  });

  return { isLoading, variants };
}

export default useGetVariants;
