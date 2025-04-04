import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useUser } from "../features/Auth/useUser"
import Spinner from "../ui/Spinner"


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

function UserProtectedRoute({ children }: Props) {
  const navigate = useNavigate()

  const { isPending, isAuthenticated, user } = useUser()

  useEffect(() => {
    if (!isPending && (!isAuthenticated || user?.role !== "user")) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate, isPending, user])

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if (!isAuthenticated || user?.role !== "user") return null;

  return <>{children}</>
}

export default UserProtectedRoute