import React from "react";

import PieChart from "./PieChartBoard";
import TrendingMovies from "./TrendingMovies";
import TrendingSeries from "./TrendingSeries";
import { useAllMovies } from "./useAllMovies";
import LineChartBoard from "./LineChartBoard";
import PieChartBoard from "./PieChartBoard";

function MainDashboard() {
  const { data } = useAllMovies();

  console.log(data);
  return (
    <div className="grid grid-cols-4  grid-rows-4 h-[100%] overflow-y-hidden overflow-x-hidden ">
      <div className="py-3 col-span-2 row-start-1 row-end-4  ">
        <h2 className="px-4">
          Number of Movies released per year (Not Official yet!!!)
        </h2>
        <LineChartBoard data={data} />
      </div>
      <div className="  col-span-2 row-start-1 row-end-4 border-l border-gray-200">
        <PieChartBoard />
      </div>
      <div className="bg-amber-300 col-span-2 row-span-2">
        <TrendingMovies />
      </div>
      <div className="bg-purple-500 col-span-2 row-span-2">
        <TrendingSeries />
      </div>
    </div>
  );
}

export default MainDashboard;
