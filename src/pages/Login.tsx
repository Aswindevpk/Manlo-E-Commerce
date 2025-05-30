import LoginForm from "../features/Auth/LoginForm";
import AuthLayout from "../features/Auth/AuthLayout";

function Login() {
  return (
    <AuthLayout header="Log in to your Account">
      <LoginForm />
    </AuthLayout>
  )
}

export default Login;
