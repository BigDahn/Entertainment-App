import React from "react";
import MovieTile from "./MovieTile";
import SeriesTile from "./SeriesTile";
import RatedTile from "./RatedTile";

function MainTileComp({ data, series }) {
  return (
    <div className="flex items-center gap-[3rem] ">
      <MovieTile data={data} />
      <SeriesTile series={series} />
      <RatedTile />
    </div>
  );
}

export default MainTileComp;
