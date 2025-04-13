import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import useGetUser from "./useGetUser";
import useUpdateUser from "./useUpdateUser";
import { useEffect } from "react";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledForm = styled.form`
 max-width: 50rem;
 margin: 2rem auto;
 display: flex;
 flex-direction: column;
 gap: 2rem;
`;

const Input = styled.input`
width: 100%;
 font-size: 1.4rem;
 padding: 0.8rem 1.2rem;
`;

interface FormValues {
  username: string;
  email: string;
}


function UserForm() {
  const { userDetail, isLoading } = useGetUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
  }); // Populate form once data is loaded

  useEffect(() => {
    if (userDetail) {
      reset({
        username: userDetail.username || "",
      });
    }
  }, [userDetail, reset]);

  const onSubmit = (data:FormValues) => {
    updateUser({ userId: userDetail.id, updatedData: data });
  };

  if (isLoading) return <p>Loading user...</p>;

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>username</p>
        <Input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      {/* <div>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div> */}
      <Button type="submit" disabled={isUpdating}>
        {isUpdating ? <SpinnerMini/> : "Update Profile"}
      </Button>
    </StyledForm>
  );
}

export default UserForm;
