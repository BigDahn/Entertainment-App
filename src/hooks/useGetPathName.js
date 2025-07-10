import { useLocation } from "react-router-dom";

export function useGetPathName() {
  const { pathname } = useLocation();

  const path = pathname.replaceAll("/", "");

  return { path };
}
