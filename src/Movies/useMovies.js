import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/getMovies";

export function useMovies() {
  const {
    isLoading,
    data: { data: movies,count } = {},
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(),
  });

  return { isLoading, movies, count, error };
}
