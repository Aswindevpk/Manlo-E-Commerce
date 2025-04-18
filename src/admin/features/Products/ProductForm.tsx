import { SubmitHandler, useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import FormRowVertical from "../../../ui/FormRowVertical";
import Button from "../../../ui/Button";
import useGetCategories from "../Categories/useCategories";
import useGetBrands from "../Brands/useBrands";
import Spinner from "../../../ui/Spinner";
import useCreateProduct from "./useCreateProduct";
import { Product } from "../../types";
import useUpdateProduct from "./useUpdateProduct";

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
    productToEdit?: Product | undefined;
    onCloseModal?: () => void;
}

function ProductForm({ productToEdit, onCloseModal}: Props) {
    const isEditSession = Boolean(productToEdit?.id)
    const { id: editId, ...editValues } = productToEdit || {};
    const { isLoading: isLoadingCategory, categories } = useGetCategories()
    const { isLoading: isLoadingBrand, brands } = useGetBrands()

    //only subcategories needed for product
    const subCategories = categories?.filter(sub=>sub.parent_id !== null)

    const { isCreating, createProduct } = useCreateProduct()
    const { isUpdating, updateProduct } = useUpdateProduct(editId)


    const isWorking = isCreating || isUpdating
    const isLoading = isLoadingCategory || isLoadingBrand

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Product>({
        defaultValues: isEditSession ? editValues : {
            name: "",
            description: "",
            category_id: "",
            brand_id: "",
            price: 0,
            care_instruction: "",
            is_new: false
        }
    });

    if (isLoading) {
        return <Spinner />
    }

    const brand_id = productToEdit?.brand_id
    const category_id = productToEdit?.category_id

    const onSubmit: SubmitHandler<Product> = (data) => {
        const formattedData = {
            name: data.name,
            description: data.description,
            category_id: data.category_id,
            brand_id: data.brand_id,
            price: data.price,
            care_instruction: data.care_instruction,
            is_new: data.is_new
        };

        if (isEditSession && editId) {
            updateProduct({ id: editId, newProduct: formattedData })
        } else {
            createProduct({ newProduct: formattedData })
        }
        onCloseModal?.()
    };



    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormRowVertical label="Product Name" error={errors.name?.message}>
                <StyledInput
                    type="text"
                    {...register("name", { required: "product name is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="Select Category" error={errors.category_id?.message}>
                <StyledSelect
                    {...register("category_id", { required: "category is required" })}
                    defaultValue={isEditSession ? category_id : ""}>
                    <option value="" disabled>Select a category</option>
                    {subCategories?.map(cat => (
                        <option key={cat.id} value={cat.id} >{cat.name}</option>
                    ))}
                </StyledSelect>
            </FormRowVertical>
            <FormRowVertical label="Select Brand" error={errors.brand_id?.message}>
                <StyledSelect
                    {...register("brand_id", { required: "brand is required" })}
                    defaultValue={isEditSession ? brand_id : ""}>
                    <option value="" disabled>Select a Brand</option>
                    {brands?.map(brand => (
                        <option key={brand.id} value={brand.id} >{brand.name}</option>
                    ))}
                </StyledSelect>
            </FormRowVertical>
            <FormRowVertical label="Product Price" error={errors.price?.message}>
                <StyledInput
                    type="number"
                    {...register("price", { required: "price is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="Description" error={errors.description?.message}>
                <StyledInput
                    type="text"
                    {...register("description", { required: "Descriptoin is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="Care Instructions" error={errors.care_instruction?.message}>
                <StyledInput
                    type="text"
                    {...register("care_instruction", { required: "Descriptoin is required" })}
                />
            </FormRowVertical>
            <FormRowVertical label="Is New Stock" error={errors.is_new?.message}>
                <StyledInput
                    type="checkbox"
                    id="is_new"
                    {...register("is_new")}
                />
            </FormRowVertical>
            <div></div>
            <Button
                type="submit"
                disabled={isWorking}>
                {isEditSession ? "Update Product" : "Create Product"}
            </Button>
        </StyledForm>
    )
}

export default ProductForm