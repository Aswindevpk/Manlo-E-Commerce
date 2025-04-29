import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useCreateAddress } from "../Profile/useCreateAddress";
import SpinnerMini from "../../ui/SpinnerMini";
import { useEditAddress } from "../Profile/useEditAddress";

const StyledForm = styled.form`
  padding: 2.4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 2rem;
  min-width: 280px;

  > div:nth-child(3),
  > div:nth-child(4) {
    grid-column: span 2;
  }

  > div:last-child {
    grid-column: span 2;
    justify-self: start;
  }

  p {
    color: red;
    font-size: 1.2rem;
    margin-top: 0.4rem;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
`;

interface AddressData {
    id:string | null
    first_name: string;
    last_name: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  }

  interface AddressFormProps {
    addressToEdit?: AddressData | {id:string|null}
  }

function AddressForm({ addressToEdit }:AddressFormProps) {
    const isEditSession = Boolean(addressToEdit?.id)
    const { id: editId, ...editValues } = addressToEdit || {};

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<AddressData>({
        defaultValues: isEditSession ? editValues : {
            first_name: "",
            last_name: "",
            line1: "",
            line2: "",
            city: "",
            state: "",
            pincode: "",
            phone: ""
        }
    });

    const { createAddress, isCreating } = useCreateAddress();
    const { editAddress, isEditing } = useEditAddress();

    const isWorking = isCreating || isEditing

    const onSubmit: SubmitHandler<AddressData> = (data) => {
        const formattedData = {
            first_name: data.first_name,
            last_name: data.last_name,
            line1: data.line1,
            line2: data.line2,
            city: data.city,
            state: data.state,
            pincode: data.pincode,
            phone: data.phone,
        };

        if (isEditSession && editId) {
            editAddress({ id: editId, newAddressData: formattedData }, {
                onSuccess: () => {
                    reset()
                }
            })
        } else {
            createAddress({ newAddress: formattedData },
                {
                    onSuccess: () => reset(), // clears form after submit
                });
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    type="text"
                    placeholder="First Name"
                    disabled={isWorking}
                    {...register("first_name", { required: "First name is required" })}
                />
                {errors.first_name && <p>{errors.first_name.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Last Name"
                    disabled={isWorking}
                    {...register("last_name", { required: "Last name is required" })}
                />
                {errors.last_name && <p>{errors.last_name.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Address Line 1"
                    disabled={isWorking}
                    {...register("line1", { required: "Address is required" })}
                />
                {errors.line1 && <p>{errors.line1.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Address Line 2"
                    disabled={isWorking}
                    {...register("line2")}
                />
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="City"
                    disabled={isWorking}
                    {...register("city", { required: "City is required" })}
                />
                {errors.city && <p>{errors.city.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="State"
                    disabled={isWorking}
                    {...register("state", { required: "State is required" })}
                />
                {errors.state && <p>{errors.state.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Pincode"
                    disabled={isWorking}
                    {...register("pincode", {
                        required: "Pincode is required",
                        pattern: {
                            value: /^[0-9]{6}$/,
                            message: "Invalid pincode format",
                        },
                    })}
                />
                {errors.pincode && <p>{errors.pincode.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Phone Number"
                    disabled={isWorking}
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number",
                        },
                    })}
                />
                {errors?.phone && <p>{errors?.phone?.message}</p>}
            </div>

            <div>
                <Button
                    disabled={isWorking}
                    type="submit">
                    {isEditSession ?
                        isWorking ? <SpinnerMini /> : "Update Address" :
                        isWorking ? <SpinnerMini /> : "Add Address"}
                </Button>
            </div>
        </StyledForm>
    );
}

export default AddressForm;
