import styled from "styled-components";
import Button from "../../ui/Button"

const StyledConfirm = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

interface Props {
    actionName: string;
    actionDesc: string;
    onConfirm: () => Promise<void> | void;
    disabled: boolean;
    onCloseModal?: () => void;
}


function Confirm({ actionName, actionDesc, onConfirm, onCloseModal, disabled }: Props) {

    const handleConfirm = async () => {
        try {
            await onConfirm();
            onCloseModal?.();
        } catch (error) {
            console.error("Confirmation failed:", error);
        }
    };
    return (
        <StyledConfirm>
            <h2>Confirm {actionName}</h2>
            <p>{actionDesc}</p>
            <div>
                <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
                    Cancel
                </Button>
                <Button variation="danger" disabled={disabled} onClick={handleConfirm}>
                    {actionName}
                </Button>
            </div>
        </StyledConfirm>
    )
}

export default Confirm