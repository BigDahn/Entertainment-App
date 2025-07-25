import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="h-screen flex m-auto items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-[15px]">
          The page you are looking for could not be found...
        </h3>
        <Button
          onClick={() => navigate("/dashboard")}
          style="bg-blue-500 outline-none px-4 py-2 text-[13px] rounded-sm text-white font-semibold hover:bg-blue-600 transition-colors"
        >
          Go back to home
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
