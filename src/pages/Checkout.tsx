import styled from "styled-components";
import StyledDivider from "../ui/StyledDivider";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import CheckoutItem from "../ui/CheckoutItem";
import AddressOptions from "../features/Cart/AddressOptions.tsx";
import useCart from "../features/Cart/useCart.ts";
import Spinner from "../ui/Spinner.tsx";
import AddressForm from "../features/Cart/AddressForm.tsx";
import Modal from "../ui/Modal.tsx";
import { useState } from "react";
import CheckoutButton from "../features/Orders/CheckOutButton.tsx";


const StyledCheckout = styled.main`
    display: grid;
    gap: 4rem;
    grid-template-columns: 2fr 1fr;
    grid-template-rows:auto 1fr;

    @media (max-width: 768px) {
        grid-template-columns:  1fr;
    }
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
    const { isLoading, cartItems } = useCart()
    const [addressId, setAddressId] = useState<null | string>(null);


    if (isLoading || !cartItems) {
        return <Spinner />
    }
    const subTotal = cartItems?.reduce((acc, item) => acc + (item.price * item.qty), 0)


    return (
        <>
            <StyledCheckout >
                <Wrapper>
                    <Heading as="h2">Shipping Details</Heading>
                    <AddressOptions onSelectAddress={setAddressId} />
                    <Modal>
                        <Modal.Open opens="cabin-form">
                            <Button type="submit">Add New Address</Button>
                        </Modal.Open>
                        <Modal.Window name="cabin-form">
                            <AddressForm addressToEdit={{ id: null }} />
                        </Modal.Window>
                    </Modal>
                </Wrapper>
                <Wrapper>
                    <Heading as="h2">Summary</Heading>
                    <Summary>
                        <ItemsWarpper>
                            {cartItems?.map(cartItem => (
                                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                            ))}
                        </ItemsWarpper>
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
                        <Row>
                            <p>TAXES</p>
                            <p>₹0</p>
                        </Row>
                        <StyledDivider />
                        <Row>
                            <h2>TOTAL</h2>
                            <p>₹ {subTotal}</p>
                        </Row>
                        {addressId && <CheckoutButton addressId={addressId} />}
                    </Summary>
                </Wrapper>
            </StyledCheckout>
        </>
    )
}

export default Checkout