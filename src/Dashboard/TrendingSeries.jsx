import React from "react";

function TrendingSeries({ series }) {
  function getFlag(country) {
    return "/" + `${country}` + ".svg";
  }
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
        ?.map((s) => {
          return (
            <div className="grid-cols-[3fr_1fr_0.8fr_1fr] grid grid-rows-[auto]  bg-gray-200 py-2  rounded-sm ">
              <h2 className="text-[10px]">{s.title}</h2>
              <h2 className="text-[10px] ml-4">{s.ratings}</h2>

              <div className="flex items-center gap-2 ml-3">
                {s.country === null ? (
                  <p className="text-[10px]">N/A</p>
                ) : (
                  <img
                    src={getFlag(s.country)}
                    alt={s.country}
                    className="w-[16px] alt-[11px] "
                  />
                )}
              </div>
              <h2 className="text-[10px]">{s.year}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default TrendingSeries;
