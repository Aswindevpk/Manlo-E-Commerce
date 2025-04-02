import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useUser } from "./useUser"
import Spinner from "../../ui/Spinner"


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

function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate()
  //1.load the authenticated user
  const { isPending, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/login")
  }, [isAuthenticated, navigate, isPending])

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if(isAuthenticated) return children
}

export default ProtectedRoute