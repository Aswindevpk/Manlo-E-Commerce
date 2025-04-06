import styled from "styled-components";
import useGetWishlists from "../features/Wishlist/useGetWishlists";
import useDeleteWishlist from "../features/Wishlist/useDeleteWishlist";
import ProductItem from "../ui/ProductItem";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

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
    return <Spinner/>
  }
  return (
    <Container>
      {wishlist?.map(product => (
        <div key={product.id}>
          <ProductItem product={product} size="sm" />
          <Button
            onClick={() => removeFromWishlist(product.productUnitId)}
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