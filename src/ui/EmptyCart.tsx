import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { CiShoppingCart } from "react-icons/ci";

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
`;


const Message = styled.h2`
  font-size: 2.4rem;
  color: var(--color-dark-gray);
`;

const SubMessage = styled.p`
  font-size: 1.4rem;
  color: var(--color-muted-blue);
  margin-bottom: 20px;
`;


const EmptyCart = () => {
    const navigate = useNavigate()
  return (
    <EmptyCartContainer>
      <CiShoppingCart size={60}/>
      <Message>Your cart is empty</Message>
      <SubMessage>Start adding items to your cart now!</SubMessage>
      <Button onClick={()=>navigate("/")}>Shop Now</Button>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
