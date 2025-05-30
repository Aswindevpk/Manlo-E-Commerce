import styled from "styled-components"
import ButtonIcon from "./ClickableIcon"
import { HiOutlineUser } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import Logout from "../features/Auth/Logout"


const StyledHeaderMenu = styled.ul`
display: flex;
gap: 0.4rem;
`

function HeaderMenu() {
    const navigate = useNavigate()
    return (
        <StyledHeaderMenu>
            <li>
                <ButtonIcon onClick={() => navigate("/account")}>
                    <HiOutlineUser />
                </ButtonIcon>
            </li>
            <li>
                <Logout />
            </li>
        </StyledHeaderMenu>
    )
}

export default HeaderMenu