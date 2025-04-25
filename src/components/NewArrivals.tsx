import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Heading from "../ui/Heading";
import styled from "styled-components";
import ProductItem from "../ui/ProductItem";
import useGetProducts from "../hooks/useGetProducts";

function NewArrivals() {
  const { products } = useGetProducts({ isNew: true });
  const controls = useAnimation();

  useEffect(() => {
    if (!products || products.length === 0) return;

    const loopScroll = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 120,
            ease: "linear",
          },
        });
        await controls.set({ x: "0%" });
      }
    };

    loopScroll();
  }, [products, controls]);



  return (
    <>
      <Heading as="h2" center>
        NEW ARRIVALS
      </Heading>
      <ProductWrapper>
        <ScrollContainer>
          <MotionList animate={controls}>
            {products?.map((prod) => (
              <ProductItem size="sm" key={prod.product_id} product={prod} />
            ))}
            {/* Duplicate for seamless looping */}
            {products?.map((prod) => (
              <ProductItem size="sm" key={`dup-${prod.product_id}`} product={prod} />
            ))}
          </MotionList>
        </ScrollContainer>
      </ProductWrapper>
    </>
  );
}

export default NewArrivals;
const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollContainer = styled.div`
  width: 90vw;
  overflow: hidden;
`;

const MotionList = styled(motion.div)` 
  display: flex;
  gap: 4rem;
  white-space: nowrap;
  width: max-content;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
`;
