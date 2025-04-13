import supabase from "./supabase";

interface getCartProps {
  userId: string | undefined;
}

export async function getCart({ userId }: getCartProps) {
  const { data, error: cartItemsError } = await supabase
    .from("cart_item_view")
    .select("*")
    .eq("user_id", userId);

  if (cartItemsError || !data) {
    console.error(cartItemsError);
    throw new Error("Cart not found!");
  }

  console.log(data)

  // Map through the data to structure the cart items properly
  const cartItems = data.map((item) => ({
    id: item.id,
    qty: item.quantity,
    unit_id: item.product_unit_id,
    size: item.size_name,
    name: item.variant_name,
    color: item.brand_name, // Assuming you want the brand name for color
    price: item.price,
    image: item.product_image_url,
  }));

  return cartItems;
}


interface AddtoCartProps {
  variationId: string | null;
  userId: string | undefined;
}

export async function AddtoCart({ variationId, userId }: AddtoCartProps) {
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
