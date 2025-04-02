import { useState } from "react";
import supabase from "../services/supabase";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function VerifyOtp() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email") || ""; // Get email from URL

    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        const { error } = await supabase.auth.verifyOtp({
            email,
            token: otp,
            type: "signup" // 'signup' means verifying after registration
        });

        if (error) {
            setMessage(error.message);
        } else {
            navigate('/')
            setMessage("✅ Email verified! You can now log in.");
        }
    };

    return (
        <form onSubmit={handleVerifyOtp}>
            <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
            <button type="submit">Verify OTP</button>
            <p>{message}</p>
        </form>
    );
}
