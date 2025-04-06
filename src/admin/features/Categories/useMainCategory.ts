import { useQuery } from "@tanstack/react-query";
import supabase from "../../../services/supabase";


async function getMainCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .is("parent_id", null); // parent_id IS NULL for main categories

  if (error) throw new Error(error.message);
  return data;
}

function useMainCategories() {
  const {
    isLoading,
    data: mainCategories,
    error,
  } = useQuery({
    queryKey: ["main-categories"],
    queryFn: getMainCategories,
    retry: false,
  });

  return { isLoading, mainCategories, error };
}

export default useMainCategories;
