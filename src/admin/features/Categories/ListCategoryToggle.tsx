import Button from "../../../ui/Button"
import Modal from "../../../ui/Modal";
import Confirm from "../../components/Confirm";
import useListCategory from "./useListCategory";

interface BlockToggleProps {
    is_listed: boolean | undefined;
    categoryId: string | undefined; // or number, depending on how the user ID is stored
}

function ListCategoryToggle({ is_listed, categoryId }: BlockToggleProps) {
    const { isPending, ToggleCategory } = useListCategory()

    const actionName = is_listed ? "Un-List" : "List";

    function handleClick() {
        ToggleCategory({ categoryId, isListed: !is_listed } )
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
                    actionDesc={`Are your sure want to ${actionName} this category?`}
                    onConfirm={() => handleClick()}
                    disabled={isPending}
                />
            </Modal.Window>
        </Modal>
    )
}

export default ListCategoryToggle