import { CartItem } from "../types";
import supabase from "./supabase";

export async function fetchCartCount(userId: string | undefined) {
  if (!userId) return 0; // Return 0 if user is not logged in

  const { data, error } = await supabase
    .from("carts")
    .select("quantity") // Count the items in cart
    .eq("user_id", userId); // Filter by user ID

  if (error) {
    console.error("Error fetching cart count:", error);
    return 0;
  }

  const totalQty = data.reduce((sum, item) => sum + item.quantity, 0);

  return totalQty; // Return the count of cart items
}

export async function getCart({
  userId,
}: {
  userId: string | undefined;
}): Promise<CartItem[]> {
  if(!userId) return []
  const { data, error: cartItemsError } = await supabase
    .from("cart_item_view")
    .select("*")
    .eq("user_id", userId);

  if (cartItemsError || !data) {
    console.error(cartItemsError);
    throw new Error("Cart not found!");
  }

  return data;
}

export async function AddtoCart({
  variationId,
  userId,
}: {
  variationId: string | null;
  userId: string | undefined;
}) {

  if(!variationId || !userId) throw new Error("product and user details not provided")
  // Check if the item already exists
  const { data: existingItem } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", userId)
    .eq("product_unit_id", variationId)
    .maybeSingle();

  if (existingItem) {
    // If exists, update the quantity
    const { data, error } = await supabase
      .from("carts")
      .update({ quantity: existingItem.quantity + 1 })
      .eq("id", existingItem.id);

    if (error) throw error;
    return data;
  } else {
    // Otherwise, insert a new row
    const { data, error } = await supabase
      .from("carts")
      .insert([{ user_id: userId, product_unit_id: variationId, quantity: 1 }]);

    if (error) throw error;
    return data;
  }
}

export async function RemoveFromCart(cartItemId: string) {
  const { error } = await supabase.from("carts").delete().eq("id", cartItemId); // Remove item by ID
  if (error) throw new Error("Could not remove item from cart");
}

export async function UpdateCartQty({
  cartItemId,
  newQty,
}: {
  cartItemId: string;
  newQty: number;
}) {
  if (newQty < 1) throw new Error("Quantity must be at least 1");

  const { error } = await supabase
    .from("carts")
    .update({ quantity: newQty })
    .eq("id", cartItemId);

  if (error) throw new Error("Could not update quantity");
}
