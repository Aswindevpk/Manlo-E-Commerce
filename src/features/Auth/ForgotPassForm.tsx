import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import useForgotPass from "./useFogotPass";


function ForgotPassForm() {
    const [email, setEmail] = useState("test@example.com");
    
    const { isPending, forgotPass } = useForgotPass()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email) return
        forgotPass({ email}, {
          onSettled: () => {
            setEmail("")
          }
        })
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <FormRowVertical label="Email">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    {isPending ? <SpinnerMini /> : "Sent Email Link"}</Button>
            </FormRowVertical>
        </Form>
    )
}

export default ForgotPassForm