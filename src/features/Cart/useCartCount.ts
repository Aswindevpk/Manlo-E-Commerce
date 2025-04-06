import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

async function fetchCartCount(userId: string) {
  if (!userId) return 0; // Return 0 if user is not logged in

  const { data, error } = await supabase
    .from("carts")
    .select("quantity") // Count the items in cart
    .eq("user_id", userId); // Filter by user ID

  if (error) {
    console.error("Error fetching cart count:", error);
    return 0;
  }

  const totalQty = data.reduce((sum,item)=>sum + item.quantity,0)

  return totalQty; // Return the count of cart items
}

export function useCartCount() {
  const { user } = useUser();
  const userId = user?.id;

  const { data: cartCount = 0, isLoading } = useQuery({
    queryKey: ["cartCount", userId],
    queryFn: () => fetchCartCount(userId),
    enabled: !!userId, // Only fetch if user is logged in
  });

  return { cartCount, isLoading };
}
