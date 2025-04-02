import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product as ProductType } from "../types";
import { CiHeart } from "react-icons/ci";
import AnimatedProductImages from "./AnimatedProductImages";


const Product = styled(Link) <{ size: "sm" | "md" }>`
  width: ${(props) => (props.size === "sm" ? "270px" : "370px")};
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.8rem;
`;

const WishlistToggle = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const NewTag = styled.div`
  position: absolute;
  color: white;
  background-color:var(--color-brand-600);
  font-weight:500;
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
`;

const ProductInfo = styled.div`
  min-width:270px;
  display: flex;
  flex-direction: column;
`;


const BrandName = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  letter-spacing: 1px;
  text-transform:uppercase;
  font-weight:300;
`;

const ProductName = styled.p`
  font-size: 1.6rem;
  text-transform:capitalize;
  color: var(--color-brand-800);
  font-weight: 400;
  font-family:var(--font-secondary);
`;

const Price = styled.p`
  font-family:var(--font-secondary);
  font-size: 1.8rem;
  color: var(--color-brand-800);
`;


interface ProductItemProps {
  product: ProductType
  size?: "sm" | "md"
}


function ProductItem({ product, size = "md" }: ProductItemProps) {
  return (
    <Product to={`/product/${product.id}`} size={size}>
      <AnimatedProductImages images={product.images} />
      <ProductInfo>
        <BrandName>{product.brand}</BrandName>
        <ProductName>{product.productName}</ProductName>
        {/* <ColorSwatch /> */}
        <Price>RS. {product.price}.00</Price>
      </ProductInfo>
      <WishlistToggle>
        <CiHeart size={30} color="white" />
      </WishlistToggle>
      <NewTag>new</NewTag>
    </Product>
  )
}

export default ProductItem