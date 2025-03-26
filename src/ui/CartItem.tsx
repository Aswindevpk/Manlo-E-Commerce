import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
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

const ProductCounter = styled.div`
   display: flex;
   max-width: 100px;
   gap: 1rem;
`;


function CartItem() {
    const [quantity,setQuantity] = useState(1)

    function incQuantity(){
        setQuantity(prev=>prev + 1)
    }

    function decQuantity(){
        setQuantity(prev=>prev - 1)
    }

    return (
        <Container>
            <ProductContainer>
                <Img src="/hero-img1.jpg" />
                <ProductDetails>
                    <h3>Product name</h3>
                    <p>$400</p>
                    <p>Delivary 4-5 days</p>
                </ProductDetails>
            </ProductContainer>
            <ProductCounter>
                <Button size="small" onClick={()=>incQuantity()}>+</Button>
                <span>{quantity}</span>
                <Button size="small" onClick={()=>decQuantity()}>-</Button>
            </ProductCounter>
            <FaTrash size={20} />
        </Container>
    )
}

export default CartItem