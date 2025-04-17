import { useQuery } from "@tanstack/react-query";
import supabase from "../../../services/supabase";

async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error(error.message);
  return data;
}

function useGetOrders() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    retry: false,
  });

  return { isLoading, orders, error };
}

export default useGetOrders;
