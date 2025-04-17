import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useForgotPass() {
  const { mutate: forgotPass, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success("If this email exists, you will receive a password reset link");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { forgotPass, isPending };
}

export default useForgotPass;
