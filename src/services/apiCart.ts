import supabase from "./supabase";

interface getCartProps {
  userId: string;
}

export async function getCart({ userId }: getCartProps) {
  const { data, error: cartItemsError } = await supabase
    .from("shoppingCartItem")
    .select(
      "id,qty,productVariation(id,sizeOption(id,name),productItem(id,name,color(id,name,hex_code),product(id,price)))"
    )
    .eq("user_id", userId);

  if (cartItemsError || !data) {
    console.error(cartItemsError);
    throw new Error("Cart not found!");
  }

  // Map through the data to structure the cart items properly
  const cartItems = data.map((item) => ({
    id: item.id,
    qty: item.qty,
    size: item.productVariation?.sizeOption?.name,
    name: item.productVariation?.productItem?.name,
    color: item.productVariation?.productItem?.color,
    price: item.productVariation?.productItem?.product?.price,
  }));


  return cartItems;
}

interface AddtoCartProps {
  variationId: number;
  userId: string;
}

export async function AddtoCart({ variationId, userId }: AddtoCartProps) {
  // Check if the item already exists
  const { data: existingItem } = await supabase
    .from("shoppingCartItem")
    .select("*")
    .eq("user_id", userId)
    .eq("product_variation_id", variationId)
    .single();

  if (existingItem) {
    // If exists, update the quantity
    const { data, error } = await supabase
      .from("shoppingCartItem")
      .update({ qty: existingItem.qty + 1 })
      .eq("id", existingItem.id);

    if (error) throw error;
    return data;
  } else {
    // Otherwise, insert a new row
    const { data, error } = await supabase
      .from("shoppingCartItem")
      .insert([{ user_id: userId, product_variation_id: variationId, qty: 1 }]);

    if (error) throw error;
    return data;
  }
}
