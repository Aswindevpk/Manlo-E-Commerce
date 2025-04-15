import { useQuery } from "@tanstack/react-query";
import { useUser } from "../Auth/useUser";
import { GetAllWishlist } from "../../services/apiWishlist";



function useGetAllWishlist() {
  const { user } = useUser();
  const userId = user?.id;

  const {
    isLoading,
    data: wishlist,
    error,
  } = useQuery({
    queryKey: ["allWishlist"],
    queryFn: ()=> GetAllWishlist({userId}),
    enabled: !!userId, // Only fetch if user is logged in
  });

  return { wishlist, isLoading, error };
}

export default useGetAllWishlist;
