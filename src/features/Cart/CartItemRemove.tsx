import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components';
import useRemoveFromCart from './useRemoveFromCart';

const RemoveBtn = styled.button`
    background-color:transparent;
    border: none;
`;

function CartItemRemove({ cartId }: { cartId: number }) {
    const { isRemoving, removeFromCart } = useRemoveFromCart()
    
    return (
        <div>
            <RemoveBtn
                onClick={() => removeFromCart(cartId)}
                disabled={isRemoving}
            >
                <FaTrash size={20} />
            </RemoveBtn>
        </div>
    )
}

export default CartItemRemove