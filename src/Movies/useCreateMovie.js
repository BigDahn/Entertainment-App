import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewMovie } from "../services/getMovies";
import toast from "react-hot-toast";

export function useCreateMovie() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newMovieData }) => createNewMovie({ newMovieData }),
    onSuccess: () => {
      toast.success("Movie successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
