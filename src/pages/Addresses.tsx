import styled from "styled-components";
import Button from "../ui/Button";
import AddressItem from "../ui/AddressItem";
import AddressForm from "../features/Cart/AddressForm";
import useGetAddressList from "../features/Profile/useGetAddressList";
import Spinner from "../ui/Spinner";
import Modal from "../ui/Modal";



const AddressList = styled.section`
    display: grid;
    margin: 4rem 0rem;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;


function Addresses() {
    const { addressList, isLoading } = useGetAddressList()

    if (isLoading || !addressList) {
        return <Spinner />
    }

    return (
        <>
            <h1>Saved Addresses</h1>
            <AddressList>
                {addressList.map(address => <AddressItem key={address.id} address={address} />)}
            </AddressList>
            
            <Modal>
                <Modal.Open opens="cabin-form">
                    <Button type="submit">Add New Address</Button>
                </Modal.Open>
                <Modal.Window name="cabin-form">
                    <AddressForm addressToEdit={{id:null}} />
                </Modal.Window>
            </Modal>
        </>
    )
}

export default Addresses