import styled from "styled-components";
import ProductItem from "../ui/ProductItem";
import MainCategory from "../features/Categories/MainCategory";



const ProductWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90vw;
  padding: 4rem 0;
  gap: 4rem;
  overflow: hidden;
  overflow-x: auto; /* Enables horizontal scrolling */
  white-space: nowrap; /* Prevents items from wrapping */
  scrollbar-width: thin; /* Firefox scrollbar */
  scrollbar-color: #888 #f1f1f1;

  scroll-snap-type: x mandatory;
    scroll-snap-align: start;

  &::-webkit-scrollbar {
    height: 4px; /* Adjust scrollbar height */
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;


function Shop() {
  return (
    <div>
      <MainCategory />
      <h2 style={{ textAlign: "center" }}>New Arrivals</h2>
      <ProductWrapper>
        <ProductList>
          {/* <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem /> */}
        </ProductList>
      </ProductWrapper>
    </div>
  )
}

export default Shop