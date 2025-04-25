import { CiEdit } from "react-icons/ci"
import Button from "./Button"
import styled from "styled-components";
import Row from "./Row";
import { GoTrash } from "react-icons/go";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import useDeleteAddress from "../features/Profile/useDeleteAddress";
import AddressForm from "../features/Cart/AddressForm";

const Container = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 100px;
  max-height: 200px;
  padding: 1.5rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e7eb;
`;

interface Address {
    id:string | null
    first_name: string;
    last_name: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  }

function AddressItem({ address }:{address:Address}) {
    const { isDeleting, deleteAddress } = useDeleteAddress()

    const recipent = `${address.first_name} ${address.last_name} - ${address.phone}`
    const fullAddress = `${address.line1}, ${address.line2}, ${address.city} - ${address.pincode}`
    return (
        <Container>
            <div>
                <h5>Recipent : {recipent}</h5>
                <h5>Address  : {fullAddress}</h5>
            </div>
            <Modal>
                <Row type="vertical">
                    <Modal.Open opens="delete">
                        <Button size="small">
                            <GoTrash size={20} />
                        </Button>
                    </Modal.Open>
                    <Modal.Window name="delete">
                        <ConfirmDelete
                            resourceName="cabins"
                            disabled={isDeleting}
                            onConfirm={() => {
                                if (address.id)
                                    deleteAddress(address.id)
                            }} />
                    </Modal.Window>
                    <Modal.Open opens="edit">
                        <Button size="small">
                            <CiEdit size={20} />
                        </Button>
                    </Modal.Open>
                    <Modal.Window name="edit">
                        <AddressForm addressToEdit={address} />
                    </Modal.Window>
                </Row>
            </Modal>

        </Container >
    )
}

export default AddressItem