import { CiShoppingCart } from "react-icons/ci"
import styled from "styled-components";
import { useCartCount } from "../features/Cart/useCartCount";
import SpinnerMini from "./SpinnerMini";

const CartIconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--color-brand-800);
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;


function CartIcon() {
  const { cartCount, isLoading } = useCartCount()

  if (isLoading ) {
    return <SpinnerMini />
  }

  return (
    <CartIconWrapper>
      <CiShoppingCart size={30} />
      {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
    </CartIconWrapper>
  )
}

export default CartIcon