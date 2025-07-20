import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie } from "../services/getMovies";
import toast from "react-hot-toast";

export function useDeleteMovie() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, path }) => deleteMovie(id, path),
    onSuccess: () => {
      toast.success("Movie Deleted successful");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isPending };
}
