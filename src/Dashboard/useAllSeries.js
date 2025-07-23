import { useQuery } from "@tanstack/react-query";
import { getAllSeries } from "../services/getSeries";

export function useAllSeries() {
  const { data, isLoading } = useQuery({
    queryFn: getAllSeries,
    queryKey: ["allseries"],
  });

  return { data, isLoading };
}
