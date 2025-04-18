import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import { Link } from "react-router-dom";
import useGetVariants from "./useGetVariants";


function VariantsTable({productId}:{productId:string | undefined}) {
  const { isLoading, variants } = useGetVariants({productId})

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <span>Variant Title</span>
        <span>Color</span>
        <span>Sku</span>
        <span>Action</span>
      </Table.Header>
      <Table.Body
        data={variants}
        render={(variant) => (
          <Table.Row key={variant.id}>
            <span>{variant.name}</span>
            <span>{variant.color?.name}</span>
            <span>{variant.sku}</span>
            <span>
              <Link to={`/admin/variant/${variant.id}`}>view</Link>
            </span>
          </Table.Row>
        )} />
    </Table>
  )
}

export default VariantsTable