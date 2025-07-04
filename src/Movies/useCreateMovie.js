import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewMovie } from "../services/getMovies";

export function useCreateMovie() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newMovieData }) => createNewMovie({ newMovieData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => console.log(err),
  });

  return { mutate, isLoading };
}
