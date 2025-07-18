import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword } from "../services/AuthService";
import toast from "react-hot-toast";

export function useResetPassword() {
  const queryClient = useQueryClient();
  const { mutate: resetPasswordFn, isPending: isResetting } = useMutation({
    mutationFn: ({ email }) => resetPassword(email),
    onSuccess: () => {
      toast.success("reset link sent to your email");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => {
      toast.error(err.message);
      console.log(err);
    },
  });
  return { resetPasswordFn, isResetting };
}
