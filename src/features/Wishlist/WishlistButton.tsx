import { useSearchParams } from "react-router-dom";
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

function WishlistButton() {
  const [searchParams] = useSearchParams()
  const { wishlistItem } = useGetWishlist();
  const { addToWishlist, isAdding } = useAddWishlist();
  const { removeFromWishlist, isRemoving } = useDeleteWishlist();

  const { user } = useUser();
  const userId = user?.id;

  let variationId = null
  if (searchParams) {
      variationId = searchParams.get("variation")
  }

  const handleToggleWishlist = () => {
    if (wishlistItem) {
      removeFromWishlist({unitId:variationId,userId});
    } else {
      addToWishlist({variationId,userId});
    }
  };

  return (
    <ButtonWishlist onClick={handleToggleWishlist} disabled={isAdding || isRemoving || !variationId}>
      {wishlistItem ? <FaHeart fontSize={30} /> : <CiHeart fontSize={30} />}
    </ButtonWishlist>
  );
}

export default WishlistButton;
