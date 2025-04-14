import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useUser } from "../../features/Auth/useUser"
import Spinner from "../../ui/Spinner"
import toast from "react-hot-toast"


interface Props {
  children: React.ReactNode
}

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gary-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedAdminRoute({ children }: Props) {
  const navigate = useNavigate()
  const { isPending, user, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isPending) {
      if (!isAuthenticated) {
        navigate("/admin-login", { replace: true });
      } else if (user?.role !== "admin") {
        navigate("/admin-login", { replace: true });
        toast.error("Access restricted");
      }
    }
  }, [isAuthenticated, navigate, isPending, user])

  if (isPending) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  }

  if (!isAuthenticated || user?.role !== "admin") return null;

  return children
}

export default ProtectedAdminRoute