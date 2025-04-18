import Button from "../../../ui/Button"
import Modal from "../../../ui/Modal";
import Confirm from "../../components/Confirm";
import useBlockCustomer from "./useBlockCustomer"

interface BlockToggleProps {
    is_blocked: boolean;
    userId: string | undefined; // or number, depending on how the user ID is stored
}

function BlockToggle({ is_blocked, userId }: BlockToggleProps) {
    const { isPending, ToggleCustomer } = useBlockCustomer()

    const actionName = is_blocked ? "Un-Block" : "Block";

    function handleClick() {
        ToggleCustomer({ customerId: userId, newData: { is_blocked: !is_blocked } })
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
                    actionDesc={`Are your sure want to ${actionName} this user?`}
                    onConfirm={() => handleClick()}
                    disabled={isPending}
                />
            </Modal.Window>
        </Modal>
    )
}

export default BlockToggle