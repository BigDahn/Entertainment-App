import React from "react";

function TrendingSeries({ series }) {
  return (
    <div className="px-3 overflow-y-scroll overflow-x-hidden h-full flex flex-col gap-1">
      <h2 className="text-[14px] font-semibold">Trending Series</h2>
      {series
        ?.filter((s) => s.trending)
        ?.map((s) => {
          return (
            <div className="flex gap-3 items-center bg-gray-200 py-1 rounded-sm px-2">
              <h2 className="text-[12px]">{s.title}</h2>
              <h2 className="text-[12px]">{s.ratings}</h2>
              <h2 className="text-[12px]">{s.year}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default TrendingSeries;
