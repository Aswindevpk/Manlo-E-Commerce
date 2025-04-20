import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import { Brand } from "../../types";
import useCreateBrand from "./useCreateBrand";
import useUpdateBrand from "./useUpdateBrand";

const StyledForm = styled.form`
    min-width: 25vw;
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  /* Checkbox-specific styles */
  ${props => props.type === 'checkbox' && css`
    width: auto;
    height: 1.8rem;
    width: 1.8rem;
    accent-color: #007bff;
    margin-right: 0.8rem;
  `}
`;



interface Props {
    brandToEdit?: Brand | undefined;
    onCloseModal?: () => void;
}

function BrandForm({ brandToEdit, onCloseModal }: Props) {
    const isEditSession = Boolean(brandToEdit?.id)
    const { id: editId, ...editValues } = brandToEdit || {};

    const { isCreating, createBrand } = useCreateBrand()
    const { isUpdating, updateBrand } = useUpdateBrand()

    const isWorking = isCreating || isUpdating

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Brand>({
        defaultValues: isEditSession ? editValues : {
            name: ""
        }
    });

    const onSubmit: SubmitHandler<Brand> = (data) => {
        const formattedData = {
            name: data.name
        };

        if (isEditSession && editId) {
            updateBrand({ id: editId, newData: formattedData })
        } else {
            createBrand({ newData: formattedData })
        }
        onCloseModal?.()
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Brand Name" error={errors.name?.message}>
                <StyledInput
                    type="text"
                    {...register("name", { required: "brand name is required" })}
                />
            </FormRowVertical>
            <div></div>
            <Button
                type="submit"
                disabled={isWorking}>
                {isEditSession ? "Update Brand" : "Create Brand"}
            </Button>
        </StyledForm>
    )
}

export default BrandForm;