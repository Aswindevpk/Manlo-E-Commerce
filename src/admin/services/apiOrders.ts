import supabase from "../../services/supabase";

export async function getOrders() {
  const { data, error } = await supabase.from("order_view").select("*");

  if (error) throw new Error(error.message);
  return data;
}

type orderUpdate = {
  shipping_status: "ordered" | "processing" | "shipped" | "delivered";
};

export async function updateOrder({
  id,
  updateData,
}: {
  id: string | undefined;
  updateData:orderUpdate;
}) {
  if(!id) throw new Error("id not found")
  const { data, error } = await supabase
    .from("orders")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
