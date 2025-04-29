import styled from "styled-components";
// import useGetUser from "../features/Profile/useGetUser";
// import Spinner from "../ui/Spinner";
// import UserForm from "../features/Profile/userForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/Profile/UpdateUserDataForm";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;


function Account() {
  return (
    <Profile>
      <Heading as="h2">Update your account</Heading>

      <Row type="vertical">
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm/>
      </Row>

      <Row type="vertical">
        <Heading as="h3">Update password</Heading>
        {/* <UpdatePasswordForm/> */}
      </Row>
    </Profile>
  )
}

export default Account;