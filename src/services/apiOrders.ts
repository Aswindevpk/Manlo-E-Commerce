import supabase from "./supabase";

export async function getOrders({ userId }: { userId: string | undefined }) {
  const { data, error } = await supabase
    .from("order_view")
    .select("*")
    .eq("user_id", userId); // parent_id IS NULL for main categories


  if (error) throw new Error(error.message);
  return data;
}
