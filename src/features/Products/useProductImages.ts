import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductImages } from "../../services/apiProduct";

function useProductImages() {
    const { productItemId } = useParams();

    const {
        isLoading,
        data: productImages,
        error,
    } = useQuery({
        queryKey: ["productImages",productItemId],
        queryFn: () => getProductImages({ productItemId}),
        enabled: !!productItemId,
        retry: false,
    });


    return { isLoading, productImages, error };
}

export default useProductImages