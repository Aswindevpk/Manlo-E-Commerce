import { useQuery } from "@tanstack/react-query";
import { getProductVariation } from "../../services/apiProduct";


function useProductVariation(productItemId:number,sizeId?:number) {
    

    const {
        isLoading,
        data: productVariation,
        error,
    } = useQuery({
        queryKey: ["productVariation",productItemId,sizeId],
        queryFn: () => getProductVariation({ productItemId, sizeId }),
        enabled: !!sizeId  && !!productItemId,
        retry: false,
    });


    return { isLoading, productVariation, error };
}

export default useProductVariation