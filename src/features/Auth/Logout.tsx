import ButtonIcon from "../../ui/ButtonIcon"
import SpinnerMini from "../../ui/SpinnerMini"
import { useLogout } from "./useLogout"
import { CiLogin } from "react-icons/ci"

function Logout() {
    const { logout, isPending } = useLogout()
    return (
        <ButtonIcon disabled={isPending} onClick={() => logout()}>
            {!isPending ? <CiLogin size={30} /> : <SpinnerMini />}
        </ButtonIcon>
    )
}

export default Logout