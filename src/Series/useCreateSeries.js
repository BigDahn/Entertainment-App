import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewSeries } from "../services/getSeries";

export function useCreateSeries() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newSeriesData }) => addNewSeries({ newSeriesData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["series"] });
    },
    onError: (err) => console.log(err),
  });
  return { mutate, isLoading };
}
