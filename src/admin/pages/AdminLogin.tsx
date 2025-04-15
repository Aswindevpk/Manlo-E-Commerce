import AdminLoginForm from "../features/Auth/AdminLoginForm";
import AuthLayout from "../../features/Auth/AuthLayout";

function AdminLogin() {
  return (
    <AuthLayout header="Log in to Admin">
      <AdminLoginForm />
    </AuthLayout>
  )
}

export default AdminLogin;
