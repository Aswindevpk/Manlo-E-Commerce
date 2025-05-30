import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: clamp(250px, 70vw, 400px);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

`;

interface Props{
  resourceName:string;
  onConfirm:()=>void;
  disabled:boolean;
  actionName?:string;
  onCloseModal?:()=>void;
}

function ConfirmDelete({actionName='Delete', resourceName, onConfirm, disabled,onCloseModal}:Props) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">{actionName} {resourceName}</Heading>
      <p>
        Are you sure you want to {actionName} this {resourceName}? This
        action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Yes, {actionName}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
