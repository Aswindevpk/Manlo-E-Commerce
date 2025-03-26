import styled from "styled-components";
import CartItem from "../ui/CartItem";
import StyledDivider from "../ui/StyledDivider";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const StyledCart = styled.main`
    display: flex;
    gap: 10rem;
    justify-content: space-between;
`;

const Row = styled.div`
    display: flex;
    padding: 0.5rem 0;
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
`;



const CartSummary = styled.div`
    width: 100%;
`;




function Cart() {
    return (
        <StyledCart>
            <Wrapper>
                <h2>Shopping cart</h2>
                <CartProducts>
                    <CartItem />
                    <StyledDivider />
                    <CartItem />
                    <StyledDivider />
                    <CartItem />
                </CartProducts>
            </Wrapper>
            <Wrapper>
                <h2>Summary</h2>
                <CartSummary>
                    <Row>
                        <p>ENTER COUPON CODE</p>
                    </Row>
                    <StyledDivider />
                    <Row>
                        <p>SUB TOTAL</p>
                        <p>$400</p>
                    </Row>
                    <Row>
                        <p>SHIPPING</p>
                        <p>FREE</p>
                    </Row>
                    <Row>
                        <p>TAXES</p>
                        <p>$0</p>
                    </Row>
                    <StyledDivider />
                    <Row>
                        <h2>TOTAL</h2>
                        <p>$400</p>
                    </Row>
                    <Link to="/checkout">
                        <Button style={{ width: "100%" }} size="medium">Proceed to Checkout</Button>
                    </Link>
                </CartSummary>
            </Wrapper>
        </StyledCart>
    )
}

export default Cart