import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginAuth } from "../services/AuthService";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }) => LoginAuth({ email, password }),
    onSuccess: (user) => {
      console.log(user.user);
      queryClient.setQueryData(["user"], user);
      toast.success("Login Successful.. Welcome back");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Invalid details");
    },
  });
  return { isPending, mutate };
}
