import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";


function useLogin() {
    const navigate = useNavigate();
    const { mutate: login, isPending } = useMutation({
      mutationFn: ({ email, password }: { email: string; password: string }) =>
        loginApi({
          email,
          password,
        }),
      onSuccess: () => {
        navigate("/", { replace: true });
      },
      onError: (err) => {
        console.log(err)
        toast.error(err.message);
      },
    });
  
    return { login, isPending };
}

export default useLogin