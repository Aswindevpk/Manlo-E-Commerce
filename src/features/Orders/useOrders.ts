import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import supabase from "../../services/supabase";

async function getOrders({ userId }: { userId: string |undefined }) {
  const { data, error } = await supabase
    .from("orders")
    .select("*,addresses(*),product:product_units(*,product_variants(*,products(*)))")
    .eq("user_id", userId); // parent_id IS NULL for main categories

  if (error) throw new Error(error.message);
  return data;
}

function useOrders() {
  const { user } = useUser();

  const userId = user?.id;

  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => getOrders({ userId }),
    enabled: !!userId,
    retry: false,
  });

  return { isLoading, orders, error };
}

export default useOrders;
