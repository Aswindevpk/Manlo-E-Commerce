import { useQuery } from "@tanstack/react-query";
import supabase from "../../../services/supabase";

async function getSubCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
    *,
    parent:parent_id ( name )
  `
    )
    .not("parent_id", "is", null); // parent_id IS NOT NULL for subcategories

  if (error) throw new Error(error.message);
  return data;
}

function useSubCategories() {
  const {
    isLoading,
    data: subCategories,
    error,
  } = useQuery({
    queryKey: ["sub-categories"],
    queryFn: getSubCategories,
    retry: false,
  });

  return { isLoading, subCategories, error };
}

export default useSubCategories;
