import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/apiReview";

function useGetReviews() {
    const { productSlug } = useParams();

    const {
        isLoading,
        data: reviews,
        error,
    } = useQuery({
        queryKey: ["reviews", productSlug],
        queryFn:()=> getReviews({productSlug}),
        enabled: !!productSlug,
        retry: false,
    });

    return { reviews, isLoading, error };
}

export default useGetReviews;
