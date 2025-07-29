import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/AuthService";

export function useGetUser() {
  const { data: { user } = {}, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(user);
  return {
    user,
    isPending,
    isAuthenticated: user?.role === "authenticated",
  };
}
