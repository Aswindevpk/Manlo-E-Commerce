import useAddWishlist from "./useAddWishlist";
import useDeleteWishlist from "./useDeleteWishlist";
import useGetWishlist from "./useGetWishlist";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";
import { useUser } from "../Auth/useUser";

const ButtonWishlist = styled.button`
    background-color:transparent;
    border: none;
`

function WishlistButton({unitId}:{unitId:string | null}) {
  const { wishlistItem } = useGetWishlist();
  const { addToWishlist, isAdding } = useAddWishlist();
  const { removeFromWishlist, isRemoving } = useDeleteWishlist();
  const { user } = useUser();

  const userId = user?.id;


  const handleToggleWishlist = () => {
    if (wishlistItem) {
      removeFromWishlist({unitId,userId});
    } else {
      addToWishlist({unitId,userId});
    }
  };

  return (
    <ButtonWishlist onClick={handleToggleWishlist} disabled={isAdding || isRemoving || !unitId}>
      {wishlistItem ? <FaHeart fontSize={30} /> : <CiHeart fontSize={30} />}
    </ButtonWishlist>
  );
}

export default WishlistButton;
