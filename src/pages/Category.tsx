
import Categories from "../ui/Categories"
import Heading from "../ui/Heading"
import ProductList from "../features/Products/ProductList";


function Category() {
  return (
    <div>
      <Heading as="h1" style={{textAlign:"center"}}>Category Name</Heading>
      <Categories/>
      <ProductList/>
    </div>
  )
}

export default Category