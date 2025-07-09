import { useQuery } from "@tanstack/react-query";
import { getSeries } from "../services/getSeries";
import { useSearchParams } from "react-router-dom";

export function useSeries() {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortby")
    ? searchParams.get("sortby")
    : "title-asc";

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const [field, direction] = sortBy.split("-");

  const Sortby = { field, direction };

  const { data: { data: series, count } = {}, isLoading } = useQuery({
    queryKey: ["series", Sortby, page],
    queryFn: () => getSeries({ Sortby, page }),
  });

  return { series, isLoading, count };
}
