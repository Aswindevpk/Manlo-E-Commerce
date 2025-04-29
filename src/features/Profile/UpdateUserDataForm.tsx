import styled from "styled-components";
import FormRowVertical from "../../ui/FormRowVertical";


function UpdateUserDataForm() {

    return (
        <StyledForm>
            <FormRowVertical label="Email" >
                <StyledInput
                    disabled
                    type="text">
                </StyledInput>
            </FormRowVertical>
            <FormRowVertical label="Username" >
                <StyledInput
                    type="text">
                </StyledInput>
            </FormRowVertical>
        </StyledForm>
    )
}

export default UpdateUserDataForm

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
`;