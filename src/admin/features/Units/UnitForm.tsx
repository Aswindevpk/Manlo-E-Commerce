import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import { Unit } from "../../types";
import Spinner from "../../../ui/Spinner";
import useCreateUnit from "./useCreateUnit";
import useUpdateUnit from "./useUpdateUnit";
import useGetUnitSizes from "./useGetUnitSizes";

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
    unitToEdit?: Unit | undefined;
    onCloseModal?: () => void;
    variantId: string | undefined;
}

function UnitForm({ unitToEdit, variantId, onCloseModal }: Props) {
    const isEditSession = Boolean(unitToEdit?.id)
    const { id: editId, ...editValues } = unitToEdit || {};

    const { isLoading, unitSizes } = useGetUnitSizes({ variantId })


    const { isCreating, createUnit } = useCreateUnit()
    const { isUpdating, updateUnit } = useUpdateUnit(editId)


    const isWorking = isCreating || isUpdating

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Unit>({
        defaultValues: isEditSession ? editValues : {
            variant_id: variantId,
            stock_quantity: 0,
            size_id: ""
        }
    });

    if (isLoading || !unitSizes) {
        return <Spinner />
    }

    const onSubmit: SubmitHandler<Unit> = (data) => {
        const formattedData = {
            variant_id: data.variant_id,
            stock_quantity: data.stock_quantity,
            size_id: data.size_id
        };
        if (isEditSession && editId) {
            updateUnit({ id: editId, newUnit: formattedData })
        } else {
            createUnit({ newUnit: formattedData })
        }
        onCloseModal?.()
    };


    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Size Name" error={errors.size_id?.message}>
                <StyledSelect
                    disabled={isEditSession}
                    {...register("size_id", { required: "size is required" })}
                    defaultValue={isEditSession ? unitToEdit?.size_id : ""}>
                    <option value="" disabled>Select a size</option>
                    {unitSizes?.map(size => (
                        <option key={size.id} value={size.id} >{size.name}</option>
                    ))}
                </StyledSelect>
            </FormRowVertical>
            <FormRowVertical label="Stock Quantity" error={errors.stock_quantity?.message}>
                <StyledInput
                    type="number"
                    {...register("stock_quantity", { required: "stock quantity is required" })}>
                </StyledInput>
            </FormRowVertical>
            <Button
                type="submit"
                disabled={isWorking}>
                {isEditSession ? "Update Unit" : "Create Unit"}
            </Button>
        </StyledForm>
    )
}

export default UnitForm