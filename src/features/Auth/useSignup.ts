import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const navigate = useNavigate()

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("OTP Sent to email!");
      if(data.user?.email){
        navigate(`/verify-otp?email=${encodeURIComponent(data.user?.email)}`);
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isPending };
}

export default useSignup;
