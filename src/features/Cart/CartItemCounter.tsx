import styled from "styled-components";
import Button from "../../ui/Button";
import useUpdateCartQty from "./useUpdateCartQty";


const ProductCounter = styled.div`
   display: flex;
   max-width: 100px;
   gap: 1rem;
`;

function CartItemCounter({ cartItemId, itemQty }: { cartItemId: string; itemQty: number }) {
    const { updateCartQuantity, isPending } = useUpdateCartQty();

    function incQuantity() {
        const newQty = itemQty + 1;
        updateCartQuantity({ cartItemId, newQty });
    }

    function decQuantity() {
        if (itemQty > 1) {
            const newQty = itemQty - 1;
            updateCartQuantity({ cartItemId, newQty });
        }
    }

    return (
        <ProductCounter>
            <Button
                size="small"
                onClick={() => incQuantity()}
                disabled={isPending}
            >+</Button>
            <span>{itemQty}</span>
            <Button
                size="small"
                onClick={() => decQuantity()}
                disabled={isPending}
            >-</Button>
        </ProductCounter>
    )
}

export default CartItemCounter