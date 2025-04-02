import styled from "styled-components";
import useGetWishlists from "../features/Wishlist/useGetWishlists";
import WishlistItem from "../features/Wishlist/WishlistItem"
import useDeleteWishlist from "../features/Wishlist/useDeleteWishlist";
import ProductItem from "../ui/ProductItem";
import Button from "../ui/Button";

const Container = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-auto-rows:1fr;
    gap: 4rem;
`;

function Wishlist() {
  const { wishlist, isLoading } = useGetWishlists()
  const { removeFromWishlist, isRemoving } = useDeleteWishlist();

  if (isLoading) {
    return <h1>loading</h1>
  }
  return (
    <Container>
      {wishlist?.map(product => (
        <div key={product.variationId}>
          <ProductItem product={product} size="sm" />
          <Button
            onClick={() => removeFromWishlist(product.variationId)}
            disabled={isRemoving}
          >
            Remove
          </Button>
        </div>
      )
      )}
    </Container>
  )
}

export default Wishlist