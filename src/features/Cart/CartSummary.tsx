import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import StyledDivider from "../../ui/StyledDivider";

const Container = styled.div`
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    padding: 0.5rem 0;
    justify-content: space-between;
`;


function CartSummary({ cartItems }) {

    const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)

    return (
        <Container>
            <Row>
                <p>ENTER COUPON CODE</p>
            </Row>
            <StyledDivider />
            <Row>
                <p>SUB TOTAL</p>
                <p>₹ {subTotal}</p>
            </Row>
            <Row>
                <p>SHIPPING</p>
                <p>FREE</p>
            </Row>
            <StyledDivider />
            <Row>
                <h2>TOTAL</h2>
                <p>₹ {subTotal}</p>
            </Row>
            <Link to="/checkout">
                <Button style={{ width: "100%" }} size="medium">Proceed to Checkout</Button>
            </Link>
        </Container>
    )
}

export default CartSummary