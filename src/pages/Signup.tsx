import SignupForm from "../features/Auth/SignupForm";
import AuthLayout from "../components/AuthLayout";

function Signup() {
  return (
    <AuthLayout header="Create a New Account">
      <SignupForm />
    </AuthLayout>
  )
}

export default Signup;
