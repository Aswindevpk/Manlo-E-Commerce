import { CiEdit } from "react-icons/ci";
import styled from "styled-components";
import Button from "../ui/Button";
import { useUser } from "../features/Auth/useUser";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;


function UserDetails() {
  const {user} = useUser()

  return (
    <div>
      <Profile>
        <h2>Hello! User.</h2>
        <div>
          <h4>Email: {user?.email}</h4>
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