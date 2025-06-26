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
    <main className="px-4  w-full h-full overflow-x-scroll">
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
              className="flex justify-between gap-4 w-full items-start min-h-[100vh] "
            >
              <div className="flex flex-col gap-1.5  ">
                <div>
                  <h3 className="uppercase text-[25px] font-semibold ">
                    {title}
                  </h3>
                  <div className="flex gap-1 text-[13px] font-semibold">
                    <h6>{year}</h6>&#46;
                    <h6>{tv_rating}</h6>&#46;
                    <h6>1hr,30min</h6>
                  </div>
                </div>{" "}
                <div className="bg-yellow-50 min-w-[26rem] ">
                  <img src={image} className="h-[30rem] w-full " />
                </div>
              </div>
              <div className="mt-13 flex flex-col gap-5">
                <h3 className="text-[16px] leading-[30px] tracking-wide">
                  {description}
                </h3>
                <div
                  className={`${
                    stars?.length >= 1
                      ? "flex  items-center gap-4 px-4 bg-blue-600 rounded-sm py-3"
                      : "flex  items-center gap-4 px-4 bg-gray-600 rounded-sm py-3"
                  }`}
                >
                  {stars?.length >= 1 && (
                    <h3 className="text-[17px] font-semibold text-white ">
                      Stars:
                    </h3>
                  )}

                  {stars?.length >= 1 ? (
                    <div className="grid grid-cols-3 gap-2 ">
                      {stars?.map((s) => {
                        return (
                          <h3 className="bg-white rounded-sm py-1 text-[13px] font-semibold px-2 shadow-md">
                            {s}
                          </h3>
                        );
                      })}
                    </div>
                  ) : (
                    <h3 className="text-[20px] font-semibold text-white text-center w-full ">
                      Stars: No Data Available yet..
                    </h3>
                  )}
                </div>

                <div className="flex items-start font-semibold bg-blue-600 py-3 rounded-sm text-[20px] text-white justify-center gap-1">
                  <h3>Movie Rating:</h3>
                  <div className="w-7 h-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#fcc419"
                      stroke="#fcc419"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-[12px]">{rating}/10</h3>{" "}
                </div>
                <div className="flex gap-2 bg-blue-600 py-3 text-white rounded-sm font-semibold text-[20px] w-full justify-center">
                  <h1 className="font-semibold "> Director:</h1>
                  <h3>{director}</h3>
                </div>
                <div
                  className={`${
                    category.length >= 1
                      ? "bg-blue-600 rounded-sm py-3"
                      : "bg-gray-600  py-3  text-[20px] rounded-sm text-white font-semibold"
                  }`}
                >
                  {category.length >= 1 ? (
                    <div className="flex gap-4 justify-center ">
                      {category?.map((s) => {
                        return (
                          <h3 className=" rounded-full  text-center font-semibold text-white ">
                            {s}
                          </h3>
                        );
                      })}
                    </div>
                  ) : (
                    <h3 className="text-[20px] font-semibold text-white text-center">
                      {" "}
                      Category: No Data Available yet..
                    </h3>
                  )}
                </div>
                {trending === true ? (
                  <h3 className="bg-blue-600 py-3 text-center text-[20px] rounded-sm text-white font-semibold">
                    This movie is currently trending !!!!
                  </h3>
                ) : (
                  <h3 className="bg-gray-600 py-3 text-center text-[20px] rounded-sm text-white font-semibold">
                    This movie is not trending !!!!
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
