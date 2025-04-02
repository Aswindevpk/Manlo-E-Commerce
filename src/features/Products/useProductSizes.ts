import { useQuery } from "@tanstack/react-query";
import { getProductSizes } from "../../services/apiProduct";

function useProductSizes(sizeCategoryId:number) {

  const {
    isLoading,
    data:sizes,
    error,
  } = useQuery({
    queryKey: ["sizes",sizeCategoryId],
    queryFn: () => getProductSizes({sizeCategoryId}),
    enabled:!!sizeCategoryId,
    retry: false,
  });


  return { isLoading,sizes, error };
}

export default useProductSizes;
