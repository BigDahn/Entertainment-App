import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editMovie } from "../services/getMovies";

export function useEditMovie() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newMovieData, MovieId }) => editMovie(MovieId, newMovieData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      //console.log();
    },
    onError: (err) => console.log(err),
  });

  return { mutate, isLoading };
}
