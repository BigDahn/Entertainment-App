import { useQuery } from "@tanstack/react-query";
import { getSeriesById } from "../services/getSeries";
import { useParams } from "react-router-dom";

export function useSeriesDetails() {
  const { seriesId: id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryFn: () => getSeriesById(id),
    queryKey: ["series"],
  });
  return { data, isLoading, error };
}
