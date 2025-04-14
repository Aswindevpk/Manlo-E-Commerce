import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      if (data.isEmailVerified) {
        //if user email is already verified
        //set user for login
        queryClient.setQueryData(["user"], data.user);
        navigate("/", { replace: true });

      } else {
        //if email is not verified
        toast.success("Verification email sent! Please check your inbox.");
        navigate(`/verify-otp?email=${encodeURIComponent(data.email)}`);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isPending };
}

export default useLogin;
