import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/getMovies";

export function useMovies() {
  const {
    isLoading,
    data: { data: movies } = {},
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(),
  });

  return { isLoading, movies, error };
}
