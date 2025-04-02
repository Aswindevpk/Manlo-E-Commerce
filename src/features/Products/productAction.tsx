import Button from "../../ui/Button";
import styled from "styled-components";
import useAddCart from "../Cart/useAddCart";
import WishlistButton from "../Wishlist/WishlistButton";
import { useSearchParams } from "react-router-dom";

const Cta = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

function ProductAction() {
    const [searchParams] = useSearchParams()
    const { addCart, isAddingToCart } = useAddCart();

    let variationId = null
    if (searchParams) {
        variationId = searchParams.get("variation")
    }

    return (
        <Cta>
            <Button
                onClick={() => addCart()}
                disabled={isAddingToCart || !variationId}
                size="large">
                {variationId ? "Add to Cart" : "Select a Size"}
            </Button>
            <WishlistButton/>
        </Cta>
    )
}

export default ProductAction;