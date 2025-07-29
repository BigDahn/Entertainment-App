import React from "react";

function TrendingSeries({ series }) {
  return (
    <div className="px-3 overflow-y-scroll overflow-x-hidden h-full flex flex-col gap-1">
      <h2 className="text-[14px] font-semibold">Trending Series</h2>
      <div className="text-[10px] grid-cols-[3fr_1fr_0.8fr_1fr] grid grid-rows-[auto] text-c font-semibold ">
        <div className="">Title</div>
        <div className="">Ratings</div>
        <div>Country</div>
        <div className="">Year</div>
      </div>
      {series
        ?.filter((s) => s.trending)
        .sort((a, b) => b.ratings - a.ratings)
        ?.map((s) => {
          const { country, title, ratings, year } = s;
          return (
            <div className="grid-cols-[3fr_1fr_0.8fr_1fr] grid grid-rows-[auto]  bg-gray-200 py-2  rounded-sm ">
              <h2 className="text-[10px]">{title}</h2>
              <h2 className="text-[10px] ml-4">{ratings}</h2>

              <div className="flex items-center gap-2 ml-3">
                {s.country === null ? (
                  <p className="text-[10px]">N/A</p>
                ) : (
                  <img
                    src={country[0].flag}
                    alt="flag"
                    className="w-[16px] text-[6px] "
                  />
                )}
              </div>
              <h2 className="text-[10px]">{year}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default TrendingSeries;
