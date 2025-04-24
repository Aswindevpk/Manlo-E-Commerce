import ClickableIcon from "../../ui/ClickableIcon"
import SpinnerMini from "../../ui/SpinnerMini"
import { useLogout } from "./useLogout"
import { CiLogin } from "react-icons/ci"

function Logout() {
    const { logout, isPending } = useLogout()
    return (
        <ClickableIcon as="button" disabled={isPending} onClick={() => logout()}>
            {!isPending ? <CiLogin size={30} /> : <SpinnerMini />}
        </ClickableIcon>
    )
}

export default Logout