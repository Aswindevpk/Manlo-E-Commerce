import { CiEdit } from "react-icons/ci";
import styled from "styled-components";
import Button from "../ui/Button";
import { useUser } from "../features/Auth/useUser";
import useGetUser from "../features/Profile/useGetUser";
import Spinner from "../ui/Spinner";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;


function UserDetails() {
  const { isLoading, userDetail } = useGetUser()

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
      <Profile>
        <h2>Hello! User.</h2>
        <div>
          <h4>{userDetail?.username}</h4>
          <h4>Email: {userDetail?.email}</h4>
        </div>
        <div>
          <Button size="small">
            <CiEdit size={20} />
          </Button>
        </div>
      </Profile>
    </div>
  )
}

export default UserDetails