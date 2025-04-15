import supabase from "./supabase";

export async function AddToWishlist({
  variationId,
  userId,
}: {
  variationId: string | null;
  userId: string | undefined;
}) {
  if (!userId) throw new Error("User not logged in");
  if (!variationId) throw new Error("no product found");

  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ user_id: userId, product_unit_id: variationId }]);

  if (error) throw new Error(error.message);
  return data;
}

export async function DeleteFromWishlist({
  unitId,
  userId,
}: {
  unitId: string | null;
  userId: string | undefined;
}) {
  if (!userId) throw new Error("User not logged in");

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("user_id", userId)
    .eq("product_unit_id", unitId);

  if (error) throw new Error(error.message);
}

export async function GetAllWishlist({
  userId,
}: {
  userId: string | undefined;
}) {
  if (!userId) return [];
  const { data, error } = await supabase
    .from("wishlist_item_view")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
}

export async function GetWishlist({
  userId,
  variationId,
}: {
  userId: string | undefined;
  variationId: string | null;
}) {
  if (!userId || !variationId) return null;
  const { data, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("user_id", userId)
    .eq("product_unit_id", variationId)
    .single();

  if (error && error.code !== "PGRST116") throw new Error(error.message); // Ignore "No data found" error
  return data;
}
