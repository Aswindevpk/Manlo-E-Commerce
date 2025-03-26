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



function CheckoutItem() {
    return (
        <div>
            <ProductContainer>
                <Img src="/hero-img1.jpg" />
                <ProductDetails>
                    <h3>Product name</h3>
                    <p>$400</p>
                    <p>quantity: 3</p>
                </ProductDetails>
            </ProductContainer>
        </div>
    )
}

export default CheckoutItem