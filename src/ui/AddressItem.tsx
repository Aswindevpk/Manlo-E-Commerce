import { CiEdit } from "react-icons/ci"
import Button from "./Button"
import styled from "styled-components";

const Container = styled.div`
    border: 2px solid var(--color-brand-600);
    min-height: 100px;
    max-height: 200px;
    padding: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
`;

function AddressItem({address}) {
    const recipent = `${address.first_name} ${address.last_name} - ${address.phone}`
    const fullAddress = `${address.address_line1}, ${address.address_line2}, ${address.city}, ${address.country.country_name} - ${address.pincode}`
    return (
        <Container>
            <div>
                <h5>Recipent : {recipent}</h5>
                <h5>Address  : {fullAddress}</h5>
            </div>
            <div>
                <Button size="small">
                    <CiEdit size={20} />
                </Button>
            </div>
        </Container>
    )
}

export default AddressItem