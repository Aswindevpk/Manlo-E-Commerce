import { useQuery } from "@tanstack/react-query";
import { getFilterCounts } from "../../services/apiFilter";
import { useParams, useSearchParams } from "react-router-dom";

function useGetFilterCounts() {
  const [searchParams] = useSearchParams();
  const { collectionSlug } = useParams();

  //SEARCH
  const searchQuery = searchParams.get("q") || "a";

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "is_new-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //FILTER
  const filterKeys = ["brand", "category", "color", "type"];
  const filters = filterKeys.map((key) => {
    const values = searchParams.getAll(key);
    if (values.length === 0) return { field: key, values: null };
    return { field: key, values };
  });

  const {
    isLoading,
    data: filterCounts,
    error,
  } = useQuery({
    queryKey: ["filter", searchQuery, filters, collectionSlug, sortBy],
    queryFn: () =>
      getFilterCounts({ searchQuery, filters, collectionSlug, sortBy }),
    retry: false,
  });
  return { isLoading, filterCounts, error };
}

export default useGetFilterCounts;
