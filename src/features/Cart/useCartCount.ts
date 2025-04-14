import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import { fetchCartCount } from "../../services/apiCart";


export function useCartCount() {
  const { user } = useUser();
  const userId = user?.id;

  const { data: cartCount = 0, isLoading } = useQuery({
    queryKey: ["cartCount"],
    queryFn: () => fetchCartCount(userId),
    enabled: !!userId, // Only fetch if user is logged in
  });

  return { cartCount, isLoading };
}
