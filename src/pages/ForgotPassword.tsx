import ForgotPassForm from "../features/Auth/ForgotPassForm";
import AuthLayout from "../features/Auth/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout header="Enter Email to get Reset Link.">
      <ForgotPassForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
