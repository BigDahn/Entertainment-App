import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/AuthService";
import toast from "react-hot-toast";

export function useUpdateDetails() {
  const queryClient = useQueryClient();
  const { mutate: UpdateDetail, isPending: isUpdating } = useMutation({
    mutationFn: updateUser,
    onSuccess: (user) => {
      toast.success("profile updated successfully");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { UpdateDetail, isUpdating };
}
