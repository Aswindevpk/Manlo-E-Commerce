import supabase from "../../services/supabase";

export async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error(error.message);
  return data;
}
