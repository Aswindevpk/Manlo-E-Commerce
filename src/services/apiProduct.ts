import supabase from "./supabase";

export async function getProduct() {
  const { data, error } = await supabase
    .from("product")
    .select("*,brand(name)")
    .eq("id", 1)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Booking not found!");
  }

  return data;
}
