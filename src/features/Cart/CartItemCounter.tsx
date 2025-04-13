import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import useUpdateCartQty from "./useUpdateCartQty";


const ProductCounter = styled.div`
   display: flex;
   max-width: 100px;
   gap: 1rem;
`;

function CartItemCounter({ cartItemId, itemQty }: { cartItemId: string; itemQty: number }) {
    const [quantity, setQuantity] = useState(itemQty)
    const { updateCartQuantity, isPending } = useUpdateCartQty();

    function incQuantity() {
        const newQty = quantity + 1;
        setQuantity(newQty);
        updateCartQuantity({ cartItemId, newQty });
    }

    function decQuantity() {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);
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
            <span>{quantity}</span>
            <Button
                size="small"
                onClick={() => decQuantity()}
                disabled={isPending}
            >-</Button>
        </ProductCounter>
    )
}

export default CartItemCounter