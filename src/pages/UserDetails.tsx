import styled from "styled-components";
// import useGetUser from "../features/Profile/useGetUser";
// import Spinner from "../ui/Spinner";
import UserForm from "../features/Profile/userForm";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;


function UserDetails() {
  // const { isLoading, userDetail } = useGetUser()

  // if (isLoading) {
  //   return <Spinner />
  // }
  return (
    <div>
      <Profile>
        <h2>Your Account</h2>
        <div>
          <UserForm/>
        </div>
      </Profile>
    </div>
  )
}

export default UserDetails