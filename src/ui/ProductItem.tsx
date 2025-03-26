import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "./StarRating";


const Product = styled(Link)`
  min-width:270px;
`;

const ProductImg = styled.img`
  aspect-ratio: 3/4;
  width: 100%;
  height: auto; 
`;

const Name = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const Price = styled.p`
    
`;

function ProductItem() {
  return (
    <Product to="/product/sfs">
      <ProductImg src="/hero-img1.jpg" />
      <Name>Product name</Name>
      <StarRating size={20}/>
      <Price>$200</Price>
    </Product>
  )
}

export default ProductItem