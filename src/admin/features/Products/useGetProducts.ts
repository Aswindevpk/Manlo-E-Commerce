import { useQuery } from "@tanstack/react-query";
import supabase from "../../../services/supabase";

async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error(error.message);
  return data;
}

function useGetProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: false,
  });

  return { isLoading, products, error };
}

export default useGetProducts;
