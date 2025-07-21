import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUpUser } from "../services/AuthService";

export function useSignup() {
  const { mutate, isPending } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success("Account Successfully created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutate, isPending };
}
