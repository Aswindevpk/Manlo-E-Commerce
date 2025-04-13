// import styled from "styled-components";
// import CartItem from "../ui/CartItem";

// import useCart from "../features/Cart/useCart";
// import CartSummary from "../features/Cart/CartSummary";
import EmptyCart from "../ui/EmptyCart";
// import Spinner from "../ui/Spinner";

// const StyledCart = styled.main`
//     display: flex;
//     gap: 10rem;
//     justify-content: space-between;
// `;


// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     width: 100%;
// `;

// const CartProducts = styled.div`
//     width: 100%;
// `;


function Cart() {
    // const { isLoading, cartItems } = useCart()
    // if (isLoading || !cartItems) {
    //     return <Spinner/>
    // }
    // if(cartItems.length ===0){
    //     return <EmptyCart/>
    // }

    return <EmptyCart/>

    // return (
    //     <StyledCart>
    //         <Wrapper>
    //             <h2>Shopping cart</h2>
    //             <CartProducts>
    //                 {cartItems.map(Item => (
    //                     <CartItem key={Item.id} Item={Item}/>
    //                 ))}
    //             </CartProducts>
    //         </Wrapper>
    //         <Wrapper>
    //             <h2>Summary</h2>
    //             <CartSummary cartItems={cartItems}/>
    //         </Wrapper>
    //     </StyledCart>
    // )
}

export default Cart


