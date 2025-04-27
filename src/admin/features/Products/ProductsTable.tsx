import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetProducts from "./useGetProducts";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { formatCurrency } from "../../../utils/helpers";
import Row from "../../../ui/Row";
import Tag from "../../ui/Tag";
import ListProductToggle from "./ListProductToggle";


function ProductsTable() {
  const { isLoading, products } = useGetProducts()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Table columns="1fr 10rem 10rem 10rem 10rem 1fr">
      <Table.Header>
        <span>Product Title</span>
        <span>Category</span>
        <span>status</span>
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
            <Tag type={product.is_listed ? "green" : "red"}>{product.is_listed ? "listed" : "un-listed"}</Tag>
            <span>{product?.brand?.name}</span>
            <span>{formatCurrency(product.price)}</span>
            <Row type="horizontal">
              <span>
                <Button as={Link} to={`/admin/product/${product.id}`}>view</Button>
              </span>
              <ListProductToggle is_listed={product.is_listed} productId={product.id} />
            </Row>
          </Table.Row>
        )} />
    </Table>
  )
}

export default ProductsTable