import VerifyOtpForm from "../features/Auth/VerifyOtpForm";
import AuthLayout from "../features/Auth/AuthLayout";

export default function VerifyOtp() {
    return (
        <AuthLayout header="Enter OTP to verify Email">
            <VerifyOtpForm />
        </AuthLayout>
    );
}
