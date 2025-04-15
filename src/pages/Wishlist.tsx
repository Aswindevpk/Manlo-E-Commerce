import styled from "styled-components";
import useDeleteWishlist from "../features/Wishlist/useDeleteWishlist";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import useGetAllWishlist from "../features/Wishlist/useGetAllWishlist";
import ProductItem from "../ui/ProductItem";
import { useUser } from "../features/Auth/useUser";

const Container = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-auto-rows:1fr;
    gap: 4rem;
`;

function Wishlist() {
  const { wishlist, isLoading } = useGetAllWishlist()
  const { removeFromWishlist, isRemoving } = useDeleteWishlist();
  const { user } = useUser()

  if (isLoading || !wishlist) {
    return <Spinner />
  }
  return (
    <Container>
      {wishlist?.map(product => (
        <div key={product.id}>
          <ProductItem product={product} size="sm" />
          <Button
            onClick={() => removeFromWishlist({ unitId: product.unit_id, userId: user?.id })}
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