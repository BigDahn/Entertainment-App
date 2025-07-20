import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editMovie } from "../services/getMovies";
import toast from "react-hot-toast";

export function useEditMovie() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ newMovieData, MovieId }) => editMovie(MovieId, newMovieData),
    onSuccess: () => {
      toast.success("Movie Update Successful");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      //console.log();
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
