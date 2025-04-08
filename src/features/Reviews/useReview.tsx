// src/features/reviews/useReview.ts
import { useQuery } from "@tanstack/react-query";
import supabase from "../../services/supabase";

function useReview({ variantId }: { variantId: string | null }) {
    const {
        isLoading,
        data: reviews,
        error,
    } = useQuery({
        queryKey: ["reviews", variantId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("reviews")
                .select("*, users(username)") // join users table if you want usernames
                .eq("product_variant_id", variantId)
                .order("created_at", { ascending: false });

            if (error) throw new Error(error.message);
            return data;
        },
        enabled: !!variantId,
        retry: false,
    });

    return { reviews, isLoading, error };
}

export default useReview;
