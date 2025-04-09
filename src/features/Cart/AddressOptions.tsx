import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetAddressList from "../Profile/useGetAddressList";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Fieldset = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  gap: 2rem;
`;


const Label = styled.label`
  border: 2px solid var(--color-grey-200);
  border-radius:var(--border-radius-sm);
  display: flex;
  padding: 2rem;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  cursor: pointer;
`;

const RadioInput = styled.input`
  accent-color: #393e46; /* Dark gray from your color palette */
`;


const AddressOptions = ({onSelectAddress}) => {
  const { addressList, isLoading } = useGetAddressList()
  const [selectId, setSelectId] = useState<null|string>(null);

  if (isLoading) {
    return <Spinner />
  }

  const handleSelect = (id: string) => {
    setSelectId(id);
    onSelectAddress(id); // Pass the selected address ID to parent
  };
  return (
    <>
      <Heading as="h5">
        Select Address
      </Heading>
      <Form>
        <Fieldset>
          {addressList?.map(address => (
            <Label>
              <RadioInput
                type="radio"
                name="delivery"
                value={address.id}
                checked={selectId === address.id}
                onChange={(e) => handleSelect(e.target.value)}
              />
              {address.first_name} {address.last_name} - {address.phone} <br></br>
              {address.line1}, {address.line2}, {address.city} - {address.pincode}
            </Label>
          ))}
        </Fieldset>
      </Form>
    </>
  );
};

export default AddressOptions;
