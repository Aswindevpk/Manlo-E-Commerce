import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledForm = styled.form`
    padding: 2.4rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;

    > div:nth-child(3),
    > div:nth-child(4){
        grid-column:span 2;
    }
`;
const Input = styled.input`
    width: 100%;
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
`;

function AddressForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input type="text" placeholder="First Name" {...register("firstName", { required: "First name is required" })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
                <Input type="text" placeholder="Last Name" {...register("lastName", { required: "Last name is required" })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
                <Input type="text" placeholder="Address"  {...register("address", { required: "Address is required" })} />
                {errors.address && <p>{errors.address.message}</p>}
            </div>

            <div>
                <Input type="text" placeholder="Address 2"  {...register("address2")} />
            </div>

            <div>
                <Input type="text" placeholder="Country"  {...register("country", { required: "Country is required" })} />
                {errors.country && <p>{errors.country.message}</p>}
            </div>

            <div>
                <Input type="text" placeholder="City"  {...register("city", { required: "City is required" })} />
                {errors.city && <p>{errors.city.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Zip/Postal Code"
                    {...register("pincode", {
                        required: "Pincode is required",
                        pattern: { value: /^[0-9]{6}$/, message: "Invalid pincode format" },
                    })}
                />
                {errors.pincode && <p>{errors.pincode.message}</p>}
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Phone Number"
                    {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
                    })}
                />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
            <div>

                <Button type="submit">Add address</Button>
            </div>
        </StyledForm>
    )
}

export default AddressForm