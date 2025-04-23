import supabase from "./supabase";

export async function getOrders({ userId }: { userId: string | undefined }) {
  const { data, error } = await supabase
    .from("order_view")
    .select("*")
    .eq("user_id", userId); // parent_id IS NULL for main categories

  if (error) throw new Error(error.message);
  return data;
}

type PlaceOrdersProps = {
  userId: string | undefined;
  addressId: string | undefined;
};

export async function PlaceOrders({ userId, addressId }: PlaceOrdersProps) {
  const { data: cartItems, error: cartError } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", userId);

  if (cartError) throw new Error(cartError.message);

  const orderIds = await Promise.all(
    cartItems.map(async (cart) => {
      const {data:orderId, error } = await supabase.rpc("place_order_single_cod", {
        p_user_id: userId,
        p_product_unit_id: cart.product_unit_id,
        p_address_id: addressId,
        p_quantity: cart.quantity,
      });

      if (error) throw new Error(error.message);

      return orderId;
    })
  );

  console.log(orderIds)

  return orderIds;
}
