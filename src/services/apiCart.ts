import supabase from "./supabase";

interface getCartProps {
  userId: string | undefined;
}

export async function getCart({ userId }: getCartProps) {
  const { data, error: cartItemsError } = await supabase
    .from("carts")
    .select(
      "id,quantity,product_unit_id,product_units(sizes(name),product_variants(name,products(price),colors(*),product_variant_images(image_url)))"
    )
    .eq("user_id", userId);

  if (cartItemsError || !data) {
    console.error(cartItemsError);
    throw new Error("Cart not found!");
  }

  // Map through the data to structure the cart items properly
  const cartItems = data.map((item) => ({
    id: item.id,
    qty: item.quantity,
    unit_id:item.product_unit_id,
    size: item.product_units?.sizes?.name,
    name: item.product_units?.product_variants?.name,
    color: item.product_units?.product_variants?.colors,
    price: item.product_units?.product_variants?.products?.price,
    image: item.product_units?.product_variants?.product_variant_images[0].image_url
  }));

  return cartItems;
}

interface AddtoCartProps {
  variationId: string | undefined;
  userId: string;
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
