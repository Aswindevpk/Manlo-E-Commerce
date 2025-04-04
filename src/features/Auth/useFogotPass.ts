import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useForgotPass() {
  const { mutate: forgotPass, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success("Link sent to Email, Check Email!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { forgotPass, isPending };
}

export default useForgotPass;
