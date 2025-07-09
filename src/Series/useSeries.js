import { useQuery } from "@tanstack/react-query";
import { getSeries } from "../services/getSeries";

export function useSeries() {
  const {
    data: series,
    isLoading,
    count,
  } = useQuery({
    queryKey: ["series"],
    queryFn: () => getSeries(),
  });

  return { series, isLoading, count };
}
