import React from "react";

import PieChart from "./PieChartBoard";
import TrendingMovies from "./TrendingMovies";
import TrendingSeries from "./TrendingSeries";
import { useAllMovies } from "./useAllMovies";
import LineChartBoard from "./LineChartBoard";
import PieChartBoard from "./PieChartBoard";
import MovieTile from "./MovieTile";
import MainTileComp from "./MainTileComp";
import { useAllSeries } from "./useAllSeries";

function MainDashboard() {
  const { data } = useAllMovies();
  const { data: series } = useAllSeries();

  return (
    <main className=" grid-rows-[auto_20rem_8.7rem] grid grid-cols-[1fr_1fr_1fr_1fr]  px-3 gap-3  overflow-hidden ">
      <div className="row-start-1 col-span-2 ">
        <MainTileComp data={data} series={series} />
      </div>
      <div className="py-3 row-start-2 col-span-2   bg-white rounded-sm  shadow-sm">
        <h2 className="px-4">
          Number of Movies released per year (Not Official yet!!!)
        </h2>
        <LineChartBoard data={data} />
      </div>
      <div className="py-3 row-span-2  col-span-2 bg-white rounded-sm shadow-sm  ">
        <h2 className="px-4">Movies by Category (Not Official yet!!!)</h2>
        <PieChartBoard data={data} />
      </div>
      <div className="py-3 row-start-3 col-span-2 bg-white rounded-sm  shadow-sm">
        <TrendingMovies data={data} />
      </div>
      <div className="py-3 row-start-3 col-span-2 bg-white rounded-sm  shadow-sm ">
        <TrendingSeries series={series} />
      </div>
    </main>
  );
}

export default MainDashboard;
