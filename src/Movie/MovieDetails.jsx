import React from "react";
import Button from "../ui/Button";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useGoBack } from "../hooks/useGoBack";
import { useMovie } from "./useMovie";

function MovieDetails() {
  const { data, isLoading, error } = useMovie();

  //console.log(data);
  return (
    <div className="flex w-full justify-end px-4 mt-2 ">
      <Button
        style="bg-gray-50 shadow-sm px-3 py-2 flex items-center gap-2 cursor-pointer"
        onClick={useGoBack()}
      >
        <ArrowLeftIcon className="size-4" /> Back
      </Button>
    </div>
  );
}

export default MovieDetails;
