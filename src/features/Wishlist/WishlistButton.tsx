import { useSearchParams } from "react-router-dom";
import useAddWishlist from "./useAddWishlist";
import useDeleteWishlist from "./useDeleteWishlist";
import useGetWishlist from "./useGetWishlist";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";

const ButtonWishlist = styled.button`
    background-color:transparent;
    border: none;
`

function WishlistButton() {
  const [searchParams] = useSearchParams()
  
  const { wishlistItem } = useGetWishlist();
  const { addToWishlist, isAdding } = useAddWishlist();
  const { removeFromWishlist, isRemoving } = useDeleteWishlist();

  let variationId = null
  if (searchParams) {
      variationId = Number(searchParams.get("variation"))
  }

  const handleToggleWishlist = () => {
    if (wishlistItem) {
      removeFromWishlist(variationId);
    } else {
      addToWishlist(variationId);
    }
  };

  return (
    <ButtonWishlist onClick={handleToggleWishlist} disabled={isAdding || isRemoving || !variationId}>
      {wishlistItem ? <FaHeart fontSize={30} /> : <CiHeart fontSize={30} />}
    </ButtonWishlist>
  );
}

export default WishlistButton;
