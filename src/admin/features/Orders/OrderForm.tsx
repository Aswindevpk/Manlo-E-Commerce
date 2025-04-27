import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import { useParams } from "react-router-dom";
import useUpdateOrder from "./useUpdateOrder";


const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem;
`;

const StyledButtonRow = styled.div`
    align-self: end;
    height: 100%;
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


type orderUpdate = {
    shipping_status: "ordered" | "processing" | "shipped" | "delivered";
  };


const statuses = ["ordered", "processing", "shipped", "delivered"];



function OrderForm() {
    const { orderId } = useParams()
    const { isUpdating, updateOrder } = useUpdateOrder()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<orderUpdate>();

    const onSubmit: SubmitHandler<orderUpdate> = (data) => {
        updateOrder({ id: orderId, updateData: data })
    };


    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Change Shipping status" error={errors.shipping_status?.message}>
                <StyledSelect
                    disabled={isUpdating}
                    {...register("shipping_status", { required: "size is required" })}>
                    <option value="" disabled>Select a size</option>
                    {statuses?.map((status, index) => (
                        <option key={index} value={status} >{status}</option>
                    ))}
                </StyledSelect>
            </FormRowVertical>
            <FormRowVertical>
                <StyledButtonRow>
                    <Button
                        type="submit">
                        Update order
                    </Button>
                </StyledButtonRow>
            </FormRowVertical>
        </StyledForm>
    )
}

export default OrderForm;