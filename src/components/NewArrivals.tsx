import Heading from "../ui/Heading";
import ProductList from "../features/Products/ProductList";


function NewArrivals() {
  return (
    <>
      <Heading as="h3" center>
        NEW ARRIVALS
      </Heading>
      <ProductList/>
    </>
  );
}

export default NewArrivals;
