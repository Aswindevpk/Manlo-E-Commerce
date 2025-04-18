import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetProducts from "./useGetProducts";
import { Link } from "react-router-dom";


function ProductsTable() {
  const { isLoading, products } = useGetProducts()

  if(isLoading){
    return <Spinner/>
  }
  
  return (
      <Table columns="1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <span>Product Title</span>
          <span>Category</span>
          <span>Brand</span>
          <span>Price</span>
          <span>Action</span>
        </Table.Header>
        <Table.Body
          data={products}
          render={(product) => (
            <Table.Row key={product.id}>
              <span>{product.name}</span>
              <span>{product?.category?.name}</span>
              <span>{product?.brand?.name}</span>
              <span>{product.price}</span>
              <span>
                <Link to={`/admin/product/${product.id}`}>view</Link>
              </span>
            </Table.Row>
          )} />
      </Table>
  )
}

export default ProductsTable