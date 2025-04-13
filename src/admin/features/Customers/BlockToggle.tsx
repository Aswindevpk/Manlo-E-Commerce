import Button from "../../../ui/Button"
import useBlockCustomer from "./useBlockCustomer"

interface BlockToggleProps {
    is_blocked: boolean;
    userId: string; // or number, depending on how the user ID is stored
}

function BlockToggle({ is_blocked, userId }:BlockToggleProps) {
    const { isRemoving, ToggleCustomer } = useBlockCustomer()

    function handleClick() {
        ToggleCustomer({ customerId: userId, data: { is_blocked: !is_blocked } })
    }

    return (
        <Button onClick={() => handleClick()} disabled={isRemoving}>
            {is_blocked ? "Un-Block" : "Block"}
        </Button>
    )
}

export default BlockToggle