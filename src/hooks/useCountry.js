import { useQuery } from "@tanstack/react-query";
import { country } from "../helper/country";

export function useCountry() {
  const { data, isLoading } = useQuery({
    queryKey: ["country"],
    queryFn: () => country(),
  });

  return { data, isLoading };
}
