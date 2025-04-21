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

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit:cover;
`;


interface Props {
    variantToEdit?: Variant | undefined;
    onCloseModal?: () => void;
    productId?:string | undefined;
}

function VariantForm({ variantToEdit, onCloseModal,productId }: Props) {
    const isEditSession = Boolean(variantToEdit?.id)
    const { id: editId, ...editValues } = variantToEdit || {};

    const { isLoading, colors } = useGetColors()

    const { isCreating, createVariant } = useCreateVariant()
    const { isUpdating, updateVariant } = useUpdateVariant(editId)


    const isWorking = isCreating || isUpdating

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Variant>({
        defaultValues: isEditSession ? editValues : {
            name: "",
            color_id: "",
            product_id: productId,
            sku: "",
            images: [
                { image_url: "" },
                { image_url: "" }
            ]
        }
    });

    const imageFile1 = watch('images.0.image_url') as FileList | string;
    const imageFile2 = watch('images.1.image_url') as FileList | string;

    //preview for selected image
    //if already provided uses that
    const preview1 = imageFile1 instanceof FileList && imageFile1.length > 0
        ? URL.createObjectURL(imageFile1[0])
        : imageFile1;

    const preview2 = imageFile2 instanceof FileList && imageFile2.length > 0
        ? URL.createObjectURL(imageFile2[0])
        : imageFile2;

    if (isLoading) {
        return <Spinner />
    }


    const onSubmit: SubmitHandler<Variant> = (data) => {

        data.images.map(image=>{
            const newImage = typeof image.image_url === "string"
            ? image.image_url
            : image.image_url instanceof FileList && image.image_url.length > 0
              ? image.image_url[0]
              : null;
            image.image_url = newImage
        })
        if (isEditSession && editId) {
            updateVariant({ id: editId, newVariant: data })
        } else {
            createVariant({ newVariant: data })
        }
        onCloseModal?.()
    };



    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Variant Image 1">
                <>
                    {preview1 &&
                        <StyledImg src={preview1 as string} />
                    }
                    <StyledInput
                        id="image1"
                        disabled={isWorking}
                        type="file"
                        accept="image/*"
                        {...register("images.0.image_url",
                            { required: isEditSession ? false : "image is required." }
                        )} />
                </>
            </FormRowVertical>
            <FormRowVertical label="Varient Image 2" >
                <>
                    {preview2 &&
                        <StyledImg src={preview2 as string} />
                    }
                    <StyledInput
                        id="image"
                        disabled={isWorking}
                        type="file"
                        accept="image/*"
                        {...register("images.1.image_url",
                            { required: isEditSession ? false : "This field is required." }
                        )} />
                </>
            </FormRowVertical>
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