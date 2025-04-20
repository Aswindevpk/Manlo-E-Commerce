import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import { Category } from "../../types";
import useCreateCategory from "./useCreateCategory";
import useUpdateCategory from "./useUpdateCategory";

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 20rem 1fr;
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

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit:cover;
`;



interface Props {
    categoryToEdit?: Category | undefined;
    onCloseModal?: () => void;
    parentId?:string | null;
}

function CategoryForm({ categoryToEdit, onCloseModal, parentId=null }: Props) {
    const isEditSession = Boolean(categoryToEdit?.id)
    const { id: editId, ...editValues } = categoryToEdit || {};

    //hook form setup
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Category>({
        defaultValues: isEditSession ? editValues : {
            name: "",
            image: "",
            parent_id: parentId,
        }
    });

    const imageFile = watch('image') as FileList | string;
    
    //preview for selected image
    //if already provided uses that
    const preview = imageFile instanceof FileList && imageFile.length > 0
        ? URL.createObjectURL(imageFile[0])
        : imageFile;


    const { isCreating, createCategory } = useCreateCategory()
    const { isUpdating, updateCategory } = useUpdateCategory()

    const isWorking = isCreating || isUpdating

    const onSubmit: SubmitHandler<Category> = (data) => {
        const image =
        typeof data.image === "string"
          ? data.image
          : data.image instanceof FileList && data.image.length > 0
            ? data.image[0]
            : null;

        const filteredData = {
            name:data.name,
            slug:data.name.toLowerCase(),
            parent_id:data.parent_id
        }

        const payload = { ...filteredData, image }


        if (isEditSession && editId) {
            updateCategory({ id: editId, newData: payload })
            onCloseModal?.()
        } else {
            createCategory({ newData: payload })
            onCloseModal?.()
        }
    };


    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Category photo" error={errors?.name?.message}>
                <>
                    {preview &&
                        <StyledImg src={preview as string} />
                    }
                    <StyledInput
                        id="image"
                        disabled={isWorking}
                        type="file"
                        accept="image/*"
                        {...register("image",
                            { required: isEditSession ? false : "This field is required." }
                        )} />
                </>
            </FormRowVertical>
            <FormRowVertical label="Category Name" error={errors.name?.message}>
                <StyledInput
                    type="text"
                    {...register("name", { required: "Category name is required" })}
                />
            </FormRowVertical>
            <Button
                type="submit"
                disabled={isWorking}>
                {isEditSession ? "Update Category" : "Create Category"}
            </Button>
        </StyledForm>
    )
}

export default CategoryForm