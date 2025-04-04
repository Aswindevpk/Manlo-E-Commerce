import { useMutation } from "@tanstack/react-query"
import { verifyEmailOtp } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function useVerifyOtp() {
    const navigate = useNavigate()
    const { mutate: verifyOtp, isPending } = useMutation({
        mutationFn: verifyEmailOtp,
        onSuccess:()=>{
            navigate("/")
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { verifyOtp, isPending };
}

export default useVerifyOtp