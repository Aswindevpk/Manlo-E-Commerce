import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useUser } from "../features/Auth/useUser"
import Spinner from "../ui/Spinner"
import toast from "react-hot-toast"
import supabase from "../services/supabase"


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
    const logoutAndRedirect = async (message?: string) => {
      if(message) toast.error(message);
      await supabase.auth.signOut(); // Clear the JWT/session
      navigate("/login", { replace: true });
    };

    if (!isPending) {
      if (!isAuthenticated) {
        navigate("/login", { replace: true });
      } else if (user?.role !== "user") {
        logoutAndRedirect("Access restricted. Only users can view this page.");
      } else if (user?.isBlocked) {
        logoutAndRedirect("You are blocked from accessing the platform.");
      }
    }
  }, [isAuthenticated, navigate, isPending, user]);


  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if (!isAuthenticated || user?.role !== "user" || user.isBlocked) return null;

  return <>{children}</>
}

export default UserProtectedRoute