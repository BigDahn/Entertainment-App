import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteSeries } from "../services/getSeries";

export function useDeleteSeries() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, path }) => deleteSeries(id, path),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["series"] });
      toast.success("Series successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
