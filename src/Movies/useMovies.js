import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/getMovies";
import { useSearchParams } from "react-router-dom";

export function useMovies() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isLoading,
    data: { data: movies, count } = {},
    error,
  } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies({ page }),
  });

  return { isLoading, movies, count, error };
}
