import React, { useEffect } from "react";
import { useGetUser } from "../Authentication/useGetUser";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const { isPending, isAuthenticated } = useGetUser();
  console.log(isAuthenticated, isPending);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );

  if (isPending)
    return (
      <div className="h-screen flex items-center justify-center w-screen m-auto">
        <Loading />
      </div>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
