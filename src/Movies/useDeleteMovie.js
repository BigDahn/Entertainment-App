import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie } from "../services/getMovies";

export function useDeleteMovie() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ id }) => deleteMovie(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => console.log(err),
  });
  return { mutate, isLoading };
}
