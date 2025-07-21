import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export function useDeleteAccount() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (user) => deleteUser(user),
    onSuccess: () => {
      queryClient.removeQueries(["user"]);
      toast.success("Account deleted");
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { mutate, isPending };
}
