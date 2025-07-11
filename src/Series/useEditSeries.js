import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editSeries } from "../services/getSeries";

export function useEditSeries() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, newSeriesData }) => editSeries({ id, newSeriesData }),
    onSuccess: () => {
      toast.success("Series Updated Successfully"),
        queryClient.invalidateQueries({ queryKey: ["series"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
