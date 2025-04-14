import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as ApiLogin } from "../../services/apiAuth";


function useAdminLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ApiLogin,
    onSuccess: (user) => {
        queryClient.setQueryData(["user"], user);
        navigate("/admin", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isPending };
}

export default useAdminLogin;
