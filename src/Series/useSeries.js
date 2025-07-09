import { useQuery } from "@tanstack/react-query";
import { getSeries } from "../services/getSeries";
import { useSearchParams } from "react-router-dom";

export function useSeries() {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortby")
    ? searchParams.get("sortby")
    : "title-asc";

  console.log(sortBy);

  const [field, direction] = sortBy.split("-");

  const Sortby = { field, direction };

  const {
    data: series,
    isLoading,
    count,
  } = useQuery({
    queryKey: ["series", Sortby],
    queryFn: () => getSeries({ Sortby }),
  });

  return { series, isLoading, count };
}
