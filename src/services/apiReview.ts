import { Review } from "../types";
import supabase from "./supabase";

export async function getReviews({productSlug}:{productSlug:string | undefined}): Promise<Review[]> {
  if(!productSlug) throw new Error("ProductSlug not found")
    
  const { data, error } = await supabase
    .from("reviews_view")
    .select("*")
    .eq("product_slug", productSlug);

  if (error) throw new Error(error.message);

  return data;
}
