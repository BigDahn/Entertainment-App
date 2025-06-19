import React from "react";
import Button from "../ui/Button";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useGoBack } from "../hooks/useGoBack";
import { useMovie } from "./useMovie";
import Loading from "../ui/Loading";

function MovieDetails() {
  const { data, isLoading, error } = useMovie();

  const goBack = useGoBack();

  if (isLoading) {
    return (
      <div className="m-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-auto h-screen flex items-center justify-center flex-col gap-2">
        <p className="text-[14px] font-bold capitalize text-gray-600">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <main className="px-4 w-full">
      <div className="flex w-full justify-end  mt-2 ">
        <Button
          style="bg-gray-50 shadow-sm px-3 py-2 flex items-center gap-2 cursor-pointer"
          onClick={() => goBack()}
        >
          <ArrowLeftIcon className="size-4" /> Back
        </Button>
      </div>
      <div>
        {data?.data.map((s) => {
          const {
            id,
            title,
            description,
            image,
            year,
            rating,

            stars,
            director,
            category,
            tv_rating,
          } = s;
          return (
            <main
              key={id}
              className="flex justify-between gap-4 w-full items-start h-full"
            >
              <div className="  ">
                <h3 className="uppercase text-[25px] text-center">
                  {title} ({year})
                </h3>
                <div className="bg-yellow-50 min-w-[26rem] ">
                  <img src={image} className="h-[490px] w-full " />
                </div>
              </div>
              <div className="mt-8.5">
                <h3 className="text-[16px] leading-[30px] tracking-wide">
                  {description}
                </h3>
                <div className="flex items-start gap-3">
                  <h3>Stars:</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {stars.map((s) => {
                      return (
                        <h3 className="bg-gray-50 rounded-sm py-1.5 px-3 shadow-md">
                          {s}
                        </h3>
                      );
                    })}
                  </div>
                </div>
              </div>
            </main>
          );
        })}
      </div>
    </main>
  );
}

export default MovieDetails;
