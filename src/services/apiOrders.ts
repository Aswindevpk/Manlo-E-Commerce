import { ShippingStatus } from "../enums/ShippingStatus";
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


export async function PlaceOrders({ userId, addressId }: PlaceOrdersProps) {
  const { data: cartItems, error: cartError } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", userId);

  if (cartError) throw new Error(`Failed to fetch cart: ${cartError.message}`);
  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty. Cannot place orders.");
  }

  const orderIds = await Promise.all(
    cartItems.map(async (cart) => {
      const { data: orderId, error } = await supabase.rpc(
        "place_order_single_cod",
        {
          p_user_id: userId,
          p_product_unit_id: cart.product_unit_id,
          p_address_id: addressId,
          p_quantity: cart.quantity,
        }
      );

      if (error) throw new Error(error.message);

      return orderId;
    })
  );

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


export async function cancelOrder(orderId: string){

  //checking is eligible for cancel
  const { data, error } = await supabase
    .from('orders')
    .select('shipping_status')
    .eq('id', orderId)
    .single();

  if (error || !data) throw new Error('Order not found');

  if (data.shipping_status === ShippingStatus.Shipped  || data.shipping_status === ShippingStatus.Delivered) {
    throw new Error('Cannot cancel, order already shipped or delivered.');
  }


  //cancelling if eligible
  const { error: updateError } = await supabase
    .from('orders')
    .update({ shipping_status:ShippingStatus.Canceled})
    .eq('id', orderId);

  if (updateError) throw new Error('Error cancelling the order');

  return orderId;
};
