import { Category } from "../types";
import supabase from "./supabase";

export async function getSubCategories({
  categorySlug,
}: {
  categorySlug: string | undefined;
}): Promise<Category[]> {
  if (!categorySlug) {
    throw new Error("Category slug is required!");
  }

  // Step 1: Get Parent Category ID
  const { data: mainCategory, error: error1 } = await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single(); // Fetch only one result

  if (error1 || !mainCategory) {
    console.error(error1);
    throw new Error("Main Category not found!");
  }

  // Step 2: Use Parent ID to Fetch Subcategories
  const { data, error } = await supabase
    .from("categories")
    .select("*,parent:parent_id(id,slug,name)")
    .eq("parent_id", mainCategory.id);

  if (error || !data) {
    console.error(error);
    throw new Error("Subcategories not found!");
  }

  return data;
}

export async function getMainCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .is("parent_id", null);

  if (error || !data) {
    console.error(error);
    throw new Error("Main categories not found!");
  }

  return data;
}
