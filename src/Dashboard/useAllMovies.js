import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../services/getMovies";

export function useAllMovies() {
  const { data, isLoading } = useQuery({
    queryFn: getAllMovies,
    queryKey: ["movie"],
  });

  return { data, isLoading };
}
