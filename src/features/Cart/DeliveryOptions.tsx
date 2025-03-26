import  { useState } from "react";
import styled from "styled-components";

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

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState("free");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected delivery: ${selectedOption}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Label>
          <RadioInput
            type="radio"
            name="delivery"
            value="free"
            checked={selectedOption === "free"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Free Shipping
        </Label>
        <Label>
          <RadioInput
            type="radio"
            name="delivery"
            value="next-day"
            checked={selectedOption === "next-day"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Next Day Delivery - $20
        </Label>
      </Fieldset>
    </Form>
  );
};

export default DeliveryOptions;
