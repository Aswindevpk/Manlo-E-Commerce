import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import { Variant } from "../../types";
import useCreateVariant from "./useCreateVariant";
import useUpdateVariant from "./useUpdateVariant";
import useGetColors from "../Colors/useColors";
import Spinner from "../../../ui/Spinner";

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem;
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


const StyledSelect = styled.select`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  background-color: var(--color-white);
  border-radius:2px;
  border: 1px solid var(--color-grey-500);
  transition: all 0.2s ease;
  appearance: none;
  cursor: pointer;
`;


interface Props {
    variantToEdit?: Variant | undefined;
    onCloseModal?: () => void;
}

function VariantForm({ variantToEdit, onCloseModal }: Props) {
    const isEditSession = Boolean(variantToEdit?.id)
    const { id: editId, ...editValues } = variantToEdit || {};

    const { isLoading, colors } = useGetColors()

    const { isCreating, createVariant } = useCreateVariant()
    const { isUpdating, updateVariant } = useUpdateVariant(editId)


    const isWorking = isCreating || isUpdating

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Variant>({
        defaultValues: isEditSession ? editValues : {
            name: "",
            color_id: "",
            product_id: "",
            sku: ""
        }
    });

    if (isLoading) {
        return <Spinner />
    }


    const onSubmit: SubmitHandler<Variant> = (data) => {
        const formattedData = {
            name: data.name,
            color_id: data.color_id,
            product_id: data.product_id,
            sku: data.sku
        };

        if (isEditSession && editId) {
            updateVariant({ id: editId, newVariant: formattedData })
        } else {
            createVariant({ newVariant: formattedData })
        }
        onCloseModal?.()
    };



    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Variant Name" error={errors.name?.message}>
                <StyledInput
                    type="text"
                    {...register("name", { required: "variant name is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="Select Color" error={errors.color_id?.message}>
                <StyledSelect
                    {...register("color_id", { required: "Color is required" })}
                    defaultValue={isEditSession ? variantToEdit?.color_id : ""}>
                    <option value="" disabled>Select a color</option>
                    {colors?.map(color => (
                        <option key={color.id} value={color.id} >{color.name}</option>
                    ))}
                </StyledSelect>
            </FormRowVertical>
            <FormRowVertical label="SKU" error={errors.sku?.message}>
                <StyledInput
                    type="text"
                    {...register("sku", { required: "sku is required" })}
                />
            </FormRowVertical>
            <div></div>
            <Button
                type="submit"
                disabled={isWorking}>
                {isEditSession ? "Update Variant" : "Create Variant"}
            </Button>
        </StyledForm>
    )
}

export default VariantForm