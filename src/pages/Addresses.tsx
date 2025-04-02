import styled from "styled-components";
import Button from "../ui/Button";
import AddressItem from "../ui/AddressItem";
import AddressForm from "../features/Cart/AddressForm";
import useGetAddressList from "../features/Profile/useGetAddressList";



const AddressList = styled.section`
    display: grid;
    margin: 4rem 0rem;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`;


function Addresses() {
    const {addressList,isLoading}=useGetAddressList()

    if(isLoading || !addressList){
        return <h1>h</h1>
    }

    return (
        <>
            <h1>Saved Addresses</h1>
            <AddressList>
                {addressList.map(address=><AddressItem address={address}/>)}
            </AddressList>
            <Button type="submit">Add New Address</Button>
            {/* <AddressForm /> */}
        </>
    )
}

export default Addresses