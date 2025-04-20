import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apiCategories.ts";

function useGetCategory({ categoryId }: { categoryId: string | undefined }) {
  const {
    isLoading,
    data: category,
    error,
  } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => getCategory({ categoryId }),
    retry: false,
  });

  return { isLoading, category, error };
}

export default useGetCategory;
