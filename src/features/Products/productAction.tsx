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

    let unitId = null
    if (searchParams) {
        unitId = searchParams.get("unit")
    }

    return (
        <Cta>
            <Button
                onClick={() => addCart()}
                disabled={isAddingToCart || !unitId}
                size="large">
                {unitId ? "Add to Cart" : "Select a Size"}
            </Button>
            <WishlistButton unitId={unitId}/>
        </Cta>
    )
}

export default ProductAction;