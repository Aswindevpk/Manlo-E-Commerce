import styled from "styled-components";
import CartItem from "../ui/CartItem";
import useCart from "../features/Cart/useCart";
import CartSummary from "../features/Cart/CartSummary";
import Spinner from "../ui/Spinner";
import EmptyState from "../ui/EmptyState";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const StyledCart = styled.main`
    display: flex;
    gap: 10rem;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;

const CartProducts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;


function Cart() {
    const { isLoading, cartItems } = useCart()
    const navigate = useNavigate();

    if (isLoading || !cartItems) {
        return <Spinner />
    }

    if (cartItems.length === 0) {
        return <EmptyState
            icon={<CiShoppingCart />}
            title="Your cart is empty"
            message="Start adding items to your cart now!"
            buttonText="Shop Now"
            onButtonClick={() => navigate("/")}
        />
    }

    return (
        <StyledCart>
            <Wrapper>
                <h2>Shopping cart</h2>
                <CartProducts>
                    {cartItems.map(Item => (
                        <CartItem key={Item.id} Item={Item} />
                    ))}
                </CartProducts>
            </Wrapper>
            <Wrapper>
                <h2>Summary</h2>
                <CartSummary cartItems={cartItems} />
            </Wrapper>
        </StyledCart>
    )
}

export default Cart


