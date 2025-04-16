import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

function useProductDetail() {
    const { productSlug } = useParams();

    const {
        isLoading,
        data: productData,
        error,
    } = useQuery({
        queryKey: ["product",productSlug],
        queryFn: () => getProductDetail({productSlug}),
        enabled: !!productSlug,
        retry: false,
    });


    return { isLoading, productData, error };
}

export default useProductDetail