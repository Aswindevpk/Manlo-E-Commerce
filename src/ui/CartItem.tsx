import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import CartItemRemove from "../features/Cart/CartItemRemove";
import CartItemCounter from "../features/Cart/CartItemCounter";

const Container = styled.div`
    border: 2px solid var(--color-brand-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem 2rem;
`;

const Img = styled.img`
    width: 90px;
    height: 120px;
`;

const ProductContainer = styled.div`
   display: flex;
   gap: 1rem;
`;

const ProductDetails = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 200px;
   gap: 1rem;
`;

const ProductPrice = styled.h5`
    /* font-family: var(--font-secondary); */
`;




function CartItem({Item}) {
    return (
        <Container>
            <ProductContainer>
                <Img src="/hero-img1.jpg" />
                <ProductDetails>
                    <h3>{Item.name}</h3>
                    <ProductPrice>₹ {Item.price}</ProductPrice>
                    <p>{Item.size} / {Item.color.name}</p>
                </ProductDetails>
            </ProductContainer>
            <CartItemCounter itemQty={Item.qty} cartItemId={Item.id}/>
            <CartItemRemove cartId={Item.id}/>
        </Container>
    )
}

export default CartItem