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
            trending,
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
                <h3 className="uppercase text-[25px] ">{title}</h3>
                <div className="flex gap-1 text-[13px]">
                  <h6>{year}</h6>
                  <h6>{tv_rating}</h6>
                  <h6>1hr,30min</h6>
                </div>
                <div className="bg-yellow-50 min-w-[26rem] ">
                  <img src={image} className="h-[490px] w-full " />
                </div>
              </div>
              <div className="mt-13 flex flex-col gap-5">
                <h3 className="text-[16px] leading-[30px] tracking-wide">
                  {description}
                </h3>
                <div className="flex  items-center gap-4 px-4 bg-gray-500 rounded-sm py-3">
                  <h3 className="text-[17px] font-semibold text-white">
                    Stars:
                  </h3>
                  {stars?.length >= 1 ? (
                    <div className="grid grid-cols-3 gap-2">
                      {stars?.map((s) => {
                        return (
                          <h3 className="bg-gray-50 rounded-sm py-1 text-[15px] font-normal px-2 shadow-md">
                            {s}
                          </h3>
                        );
                      })}
                    </div>
                  ) : (
                    <h3 className="text-[17px] font-semibold text-white text-center">
                      No Data Available yet.. Click the edit button to add new
                      data
                    </h3>
                  )}
                </div>

                <div>rating</div>
                <div className="flex gap-2 bg-blue-600 py-3 text-white rounded-sm font-semibold text-[20px] w-full justify-center">
                  <h1 className="font-semibold "> Director:</h1>
                  <h3>{director}</h3>
                </div>
                <div className="bg-blue-600 rounded-sm py-3">
                  {category.length >= 1 ? (
                    <div className="grid grid-cols-4 ">
                      {category?.map((s) => {
                        return (
                          <h3 className=" rounded-full   w-[90%] text-center font-semibold text-white ">
                            {s}
                          </h3>
                        );
                      })}
                    </div>
                  ) : (
                    <h3 className="text-[15px] font-semibold text-white text-center">
                      {" "}
                      No Data Available yet.. Click the edit button to add new
                      category
                    </h3>
                  )}
                </div>
                {trending === true ? (
                  <h3 className="bg-blue-600 py-3 text-center text-[20px] rounded-sm text-white font-semibold">
                    This movie is currently trending !!!!
                  </h3>
                ) : (
                  <h3 className="bg-gray-500 py-3 text-center text-[20px] rounded-sm text-white font-semibold">
                    This movie is outdated !!!!
                  </h3>
                )}
              </div>
            </main>
          );
        })}
      </div>
    </main>
  );
}

export default MovieDetails;
