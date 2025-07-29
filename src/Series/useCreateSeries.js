import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewSeries } from "../services/getSeries";
import toast from "react-hot-toast";

export function useCreateSeries() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ newSeriesData }) => addNewSeries({ newSeriesData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["series"] });
      toast.success("Series Successfully Created");
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isPending };
}
