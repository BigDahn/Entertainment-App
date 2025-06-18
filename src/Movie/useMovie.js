import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../services/getMovies";
import { useParams } from "react-router-dom";

export function useMovie() {
  const { movieId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovie(movieId),
  });

  return { data, isLoading, error };
}
