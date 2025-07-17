import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../services/AuthService";

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutFn, isPending } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { logoutFn, isPending };
}
