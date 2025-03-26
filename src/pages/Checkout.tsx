import styled from "styled-components";
import StyledDivider from "../ui/StyledDivider";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import Heading from "../ui/Heading";
import CheckoutItem from "../ui/CheckoutItem";
import AddressForm from "../features/Cart/AddressForm";
import DeliveryOptions from "../features/Cart/DeliveryOptions";

const StyledCheckout = styled.main`
    display: grid;
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
    grid-template-rows:auto 1fr;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
`;


const Summary = styled.div`
    padding: 2.4rem 0;

`;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ItemsWarpper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    padding-bottom: 2rem;
`;


function Checkout() {
    return (
        <>
            <StyledCheckout >
                <Wrapper>
                    <Heading as="h2">Shipping Details</Heading>
                    <AddressForm />
                    <DeliveryOptions/>
                </Wrapper>
                <Wrapper>
                    <Heading as="h2">Summary</Heading>
                    <Summary>
                        <ItemsWarpper>
                            <CheckoutItem />
                            <CheckoutItem />
                        </ItemsWarpper>
                        <Row>
                            <p>ENTER COUPON CODE</p>
                        </Row>
                        <StyledDivider />
                        <Row>
                            <p>SUB TOTAL</p>
                            <p>SUB TOTAL</p>
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
                            <p>$635</p>
                        </Row>
                        <Button style={{ width: "100%" }} size="medium">Confirm and Pay</Button>
                    </Summary>
                </Wrapper>
            </StyledCheckout>
        </>
    )
}

export default Checkout