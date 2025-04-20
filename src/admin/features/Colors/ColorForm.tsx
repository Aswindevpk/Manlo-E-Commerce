import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import { Color } from "../../types";
import useCreateColor from "./useCreateColor";
import useUpdateColor from "./useUpdateColor";

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

const Swatch = styled.div<{ color: string }>`
    background-color: ${(props) => props.color || 'transparent'};
    height: 2rem;
    aspect-ratio:1/1;
`;




interface Props {
    colorToEdit?: Color | undefined;
    onCloseModal?: () => void;
}

function ColorForm({ colorToEdit, onCloseModal }: Props) {
    const isEditSession = Boolean(colorToEdit?.id)
    const { id: editId, ...editValues } = colorToEdit || {};

    const { isCreating, createColor } = useCreateColor()
    const { isUpdating, updateColor } = useUpdateColor()

    const isWorking = isCreating || isUpdating

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Color>({
        defaultValues: isEditSession ? editValues : {
            name: "",
            hex_code: "",
        }
    });

    const onSubmit: SubmitHandler<Color> = (data) => {
        const formattedData = {
            name: data.name,
            hex_code: data.hex_code,
        };

        if (isEditSession && editId) {
            updateColor({ id: editId, newColor: formattedData })
        } else {
            createColor({ newColor: formattedData })
        }
        onCloseModal?.()
    };

    const curHexCode = watch("hex_code")



    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Color Name" error={errors.name?.message}>
                <StyledInput
                    type="text"
                    {...register("name", { required: "color name is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="hex code" error={errors.hex_code?.message}>
                <StyledInput
                    type="text"
                    {...register("hex_code", { required: "hex_code is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="color preview">
                <div>
                <Swatch color={curHexCode} />
                </div>
            </FormRowVertical>
            <div></div>
            <Button
                type="submit"
                disabled={isWorking}>
                {isEditSession ? "Update Color" : "Create Color"}
            </Button>
        </StyledForm>
    )
}

export default ColorForm