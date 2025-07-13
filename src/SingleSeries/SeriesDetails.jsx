import React from "react";
import Button from "../ui/Button";
import { BackspaceIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useGoBack } from "../hooks/useGoBack";
import { useSeriesDetails } from "./useSeriesDetails";
import Loading from "../ui/Loading";

function SeriesDetails() {
  const goBack = useGoBack();
  const { data, error, isLoading } = useSeriesDetails();

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
  console.log(data);
  const {
    id,
    title,
    description,
    poster,
    year,
    ratings,
    trending,
    number_of_season,
    stars,
    director,
    category,
    tv_pg,
  } = data[0];

  return (
    <main className="px-4  w-full  grid gap-2">
      <div className="flex w-full justify-end  mt-2 ">
        <Button
          style="flex items-center gap-2 text-[11px] cursor-pointer border border-gray-300 bg-white text-gray-700 px-2 py-1 rounded-md shadow-sm hover:bg-gray-50"
          onClick={() => goBack()}
        >
          <ArrowLeftIcon className="size-3" />
          Back
        </Button>
      </div>

      <main
        key={id}
        className="flex justify-evenly gap-4 max-w-[1000px]   items-start "
      >
        <div className="flex flex-col gap-1.5  justify-items-start max-w-[800px] h-[100%] bg-amber-400 ">
          <div>
            <h3 className="uppercase text-[20px] font-normal ">{title}</h3>
            <div className="flex gap-1 text-[13px] font-normal">
              <h6>{year}</h6>&#46;
              <h6>{tv_pg}</h6>&#46;
              <h6>1hr,30min</h6>
            </div>
          </div>{" "}
          <img
            src={poster}
            className="  object-contain  max-h-[370px] max-w-full "
          />
        </div>
        <div className=" flex flex-col gap-2  max-w-[650px]">
          <h3 className="text-[11px] max-w-[100%] leading-[25px] tracking-wide">
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
              <h3 className="text-[17px] font-semibold text-white ">Stars:</h3>
            )}

            {stars?.length >= 1 ? (
              <div className="grid grid-cols-3 gap-2 ">
                {stars?.map((s) => {
                  return (
                    <h3 className="bg-white rounded-sm py-1 text-[13px] font-semibold px-1.5 text-center shadow-md">
                      {s.name}
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
            <h3 className="text-[12px]">{ratings}/10</h3>{" "}
          </div>
          <div className="flex gap-2 bg-blue-600 py-3 text-white rounded-sm font-semibold text-[20px] w-full justify-center">
            <h1 className="font-semibold "> Director:</h1>
            <h3>{director}</h3>
          </div>
          <div
            className={`${
              category?.length >= 1
                ? "bg-blue-600 rounded-sm py-3"
                : "bg-gray-600  py-3  text-[20px] rounded-sm text-white font-semibold"
            }`}
          >
            {category?.length >= 1 ? (
              <div className="flex gap-4 justify-center ">
                {category?.map((s) => {
                  return (
                    <h3 className=" rounded-full  text-center font-semibold text-white ">
                      {s.category}
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
    </main>
  );
}

export default SeriesDetails;

{
  /* <img src={poster} className="h-[100%] w-full " /> */
}
