import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changePassword } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export function useChangePassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: ChangePasswordFn, isPending: isChanging } = useMutation({
    mutationFn: changePassword,
    onSuccess: (user) => {
      toast.success("Password Reset Successful ");
      queryClient.setQueryData(["user"], user);
      navigate("/login", {
        replace: true,
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { ChangePasswordFn, isChanging };
}
