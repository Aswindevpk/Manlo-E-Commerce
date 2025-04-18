import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories.ts";

function useGetCategories() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    retry: false,
  });

  return { isLoading, categories, error };
}

export default useGetCategories;
