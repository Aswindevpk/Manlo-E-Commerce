import styled from "styled-components";

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



function CheckoutItem({cartItem}) {
    return (
        <div>
            <ProductContainer>
                <Img src={cartItem.image} />
                <ProductDetails>
                    <h3>{cartItem.name}</h3>
                    <p>₹ {cartItem.price}</p>
                    <p>quantity: {cartItem.qty}</p>
                </ProductDetails>
            </ProductContainer>
        </div>
    )
}

export default CheckoutItem