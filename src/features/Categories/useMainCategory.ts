import { useQuery } from "@tanstack/react-query";
import { getMainCategories } from "../../services/apiProduct";


function useMainCategory() {

  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["Maincategory"],
    queryFn: () => getMainCategories(),
    retry: false,
  });
  return { isLoading, categories, error };
}

export default useMainCategory;
