import { Order } from "../types";
import supabase from "./supabase";

export async function getOrders({
  userId,
}: {
  userId: string | undefined;
}): Promise<Order[]> {
  const { data, error } = await supabase
    .from("order_view")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

type PlaceOrdersProps = {
  userId: string | undefined;
  addressId: string | undefined;
};

interface CartItem {
  product_unit_id: string;
  quantity: number;
}

export async function PlaceOrders({ userId, addressId }: PlaceOrdersProps) {
  // Step 1: Fetch cart items for the user
  const { data: cartItems, error: cartError } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", userId);

  if (cartError) throw new Error(`Failed to fetch cart: ${cartError.message}`);
  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty. Cannot place orders.");
  }

  // Step 2: Place orders per item in the cart
  const orderIds: string[] = [];

  for (const cart of cartItems as CartItem[]) {
    const { data, error } = await supabase.rpc("place_order_single_cod", {
      p_user_id: userId,
      p_product_unit_id: cart.product_unit_id,
      p_address_id: addressId,
      p_quantity: cart.quantity,
    });

    if (error) {
      console.error(
        `Failed to place order for unit ${cart.product_unit_id}:`,
        error.message
      );
      throw new Error(`Order failed for product unit ${cart.product_unit_id}`);
    }

    if (data) {
      orderIds.push(data);
    }
  }

  console.log("Placed Orders:", orderIds);
  return orderIds;
}

export async function getOrder({
  orderId,
}: {
  orderId: string | undefined;
}): Promise<Order> {
  if (!orderId) throw new Error("id not found");
  const { data, error } = await supabase
    .from("order_view")
    .select("*")
    .eq("id", orderId)
    .single();

  console.log(data);

  if (error) throw new Error(error.message);
  return data;
}
