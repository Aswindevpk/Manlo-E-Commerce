import { CiEdit } from "react-icons/ci";
import styled from "styled-components";
import Button from "../ui/Button";
import useGetUser from "../features/Profile/useGetUser";
import Spinner from "../ui/Spinner";
import Modal from "../ui/Modal";
import UserForm from "../features/Profile/userForm";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;


function UserDetails() {
  const { isLoading, userDetail } = useGetUser()

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <Profile>
        <h2>Hello! User.</h2>
        <div>
          <h4>{userDetail?.username}</h4>
          <h4>Email: {userDetail?.email}</h4>
        </div>
        <Modal>
          <Modal.Open opens="cabin-form">
          <Button size="small">
            <CiEdit size={20} />
          </Button>
          </Modal.Open>
          <Modal.Window name="cabin-form">
            <UserForm />
          </Modal.Window>
        </Modal>
      </Profile>
    </div>
  )
}

export default UserDetails