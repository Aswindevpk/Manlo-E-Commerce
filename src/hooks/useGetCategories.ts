import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiCategory";

function useGetCategories() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryFn: getCategories,
    queryKey: ["categories"],
    retry: false,
  });
  return { isLoading, categories, error };
}

export default useGetCategories;
