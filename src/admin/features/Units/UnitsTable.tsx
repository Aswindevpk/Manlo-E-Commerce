import Table from "../../components/Table";
import Spinner from "../../../ui/Spinner";
import useGetUnits from "./useGetUnits";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import UnitForm from "./UnitForm";


function UnitsTable({ variantId }: { variantId: string | undefined }) {
  const { isLoading, units } = useGetUnits({ variantId })

  if (isLoading || !units) {
    return <Spinner />
  }

  return (
    <Table columns="1fr 1fr 1fr">
      <Table.Header>
        <span>Size Name</span>
        <span>Stock quantity</span>
        <span>Action</span>
      </Table.Header>
      <Table.Body
        data={units}
        render={(unit) => (
          <Table.Row key={unit.id}>
            <span>{unit?.size?.name}</span>
            <span>{unit.stock_quantity}</span>
            <Modal>
              <Modal.Open opens="create-unit">
                <Button>
                  Edit Unit
                </Button>
              </Modal.Open>
              <Modal.Window name="create-unit">
                <UnitForm variantId={variantId} unitToEdit={unit} />
              </Modal.Window>
            </Modal>
          </Table.Row>
        )} />
    </Table>
  )
}

export default UnitsTable