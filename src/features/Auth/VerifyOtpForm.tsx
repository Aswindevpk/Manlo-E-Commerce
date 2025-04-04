import { useSearchParams } from 'react-router-dom';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import { useState } from 'react';
import Button from '../../ui/Button';
import SpinnerMini from '../../ui/SpinnerMini';
import useVerifyOtp from './useVerifyOtp';
import Form from '../../ui/Form';


function VerifyOtpForm() {
    const [otp, setOtp] = useState("102456");
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email") || "";

    const { isPending, verifyOtp } = useVerifyOtp()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!otp || !email) return
        verifyOtp({ email, otp }, {
            onSettled: () => {
                setOtp("")
            }
        })
    };


    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <FormRowVertical label="OTP">
                <Input
                    type="otp"
                    placeholder="Enter Otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    disabled={isPending}
                    required
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button
                    type="submit"
                    size="large"
                    disabled={isPending}
                >
                    {isPending ? <SpinnerMini /> : "Verify OTP"}</Button>
            </FormRowVertical>
        </Form>
    )
}

export default VerifyOtpForm