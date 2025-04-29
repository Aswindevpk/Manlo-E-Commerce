import styled from "styled-components";
import useDeleteWishlist from "../features/Wishlist/useDeleteWishlist";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import useGetAllWishlist from "../features/Wishlist/useGetAllWishlist";
import ProductItem from "../ui/ProductItem";
import { useUser } from "../features/Auth/useUser";
import EmptyState from "../ui/EmptyState";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Row from "../ui/Row";

const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    gap: 4rem;
`;

function Wishlist() {
  const { wishlist, isLoading } = useGetAllWishlist()
  const { removeFromWishlist, isRemoving } = useDeleteWishlist();
  const { user } = useUser()
  const navigate = useNavigate();

  if (isLoading || !wishlist) {
    return <Spinner />
  }

  if (wishlist.length === 0) {
    return <EmptyState
      icon={<CiHeart />}
      title="Your Wishlist is empty"
      message="Start adding items to your wishlist now!"
      buttonText="Shop Now"
      onButtonClick={() => navigate("/")}
    />
  }


  return (
    <Container>
      {wishlist?.map(product => (
        <Row type="vertical" key={product.id}>
          <ProductItem product={product} size="sm" />
          <Button
            onClick={() => removeFromWishlist({ unitId: product.unit_id, userId: user?.id })}
            disabled={isRemoving}
          >
            Remove
          </Button>
        </Row>
      )
      )}
    </Container>
  )
}

export default Wishlist