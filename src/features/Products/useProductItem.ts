import { useQuery } from "@tanstack/react-query";
import { getProductItem } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

function useProductItem() {
    const { productItemId } = useParams();

    const {
        isLoading,
        data: productItem,
        error,
    } = useQuery({
        queryKey: ["productItem",productItemId],
        queryFn: () => getProductItem({ productItemId }),
        enabled: !!productItemId,
        retry: false,
    });


    return { isLoading, productItem, error };
}

export default useProductItem