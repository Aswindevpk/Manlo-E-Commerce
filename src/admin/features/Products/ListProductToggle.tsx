import Button from "../../../ui/Button"
import Modal from "../../../ui/Modal";
import Confirm from "../../components/Confirm";
import useListProduct from "./useListProduct";

interface BlockToggleProps {
    is_listed: boolean;
    productId: string | undefined; // or number, depending on how the user ID is stored
}

function ListProductToggle({ is_listed, productId }: BlockToggleProps) {
    const { isPending, ToggleProduct } = useListProduct()

    const actionName = is_listed ? "Un-List" : "List";

    function handleClick() {
        ToggleProduct({ id:productId, newProduct:{is_listed:!is_listed} } )
    }

    return (
        <Modal>
            <Modal.Open opens="blockToggle">
                <Button disabled={isPending}>
                    {actionName}
                </Button>
            </Modal.Open>
            <Modal.Window name="blockToggle">
                <Confirm
                    actionName={actionName}
                    actionDesc={`Are your sure want to ${actionName} this product?`}
                    onConfirm={() => handleClick()}
                    disabled={isPending}
                />
            </Modal.Window>
        </Modal>
    )
}

export default ListProductToggle