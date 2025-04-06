import Button from "../../../ui/Button"
import useBlockCustomer from "./useBlockCustomer"

function BlockToggle({ is_blocked, userId }) {
    const { isRemoving, ToggleCustomer } = useBlockCustomer()
    function handleClick(e) {
        ToggleCustomer({ customerId: userId, data: { is_blocked: !is_blocked } })
    }
    return (
        <Button onClick={(e) => handleClick(e)} disabled={isRemoving}>
            {is_blocked ? "Un-Block" : "Block"}
        </Button>
    )
}

export default BlockToggle