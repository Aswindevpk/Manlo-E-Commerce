import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

function useSubCategory() {
  const { collectionSlug } = useParams<{ collectionSlug?: string }>();

  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["category", collectionSlug],
    queryFn: () => getSubCategories({ categorySlug: collectionSlug }),
    enabled: !!collectionSlug, // Prevent fetching if slug is undefined
    retry: false,
  });
  return { isLoading, categories, error };
}

export default useSubCategory;
