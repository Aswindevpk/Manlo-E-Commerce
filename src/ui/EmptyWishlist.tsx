import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";

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


const EmptyWishlist = () => {
  const navigate = useNavigate()
  return (
    <EmptyCartContainer>
      <CiHeart size={60} />
      <Message>Your wishlist is empty</Message>
      <SubMessage>Start adding items to your wishlist!</SubMessage>
      <Button onClick={()=>navigate("/")}>Shop Now</Button>
    </EmptyCartContainer>
  );
};

export default EmptyWishlist;
