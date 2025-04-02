import { useQuery } from "@tanstack/react-query";
import { getProductItemSizes } from "../../services/apiProduct";


function useProductItemSizes(productItemId:number) {

  const {
    isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["productItemsizes",productItemId],
    queryFn: () => getProductItemSizes({productItemId}),
    enabled:!!productItemId,
    retry: false,
  });

  const availableSizes = new Set(data?.map(item => item.id));


  return { isLoading,availableSizes, error };
}

export default useProductItemSizes;
