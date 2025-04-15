import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import { useSearchParams } from "react-router-dom";
import { GetWishlist } from "../../services/apiWishlist";

function useGetWishlist() {
  const [searchParams] = useSearchParams();
  const variationId = searchParams.get("variation");
  const { user } = useUser();
  const userId = user?.id;

  const {
    isLoading,
    data: wishlistItem,
    error,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => GetWishlist({userId,variationId}),
    enabled: !!userId && !!variationId,
  });

  return { wishlistItem, isLoading, error };
}

export default useGetWishlist;
