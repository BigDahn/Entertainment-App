import React from "react";
import MovieTile from "./MovieTile";
import SeriesTile from "./SeriesTile";
import RatedTile from "./RatedTile";

function MainTileComp() {
  return (
    <div className="flex items-center gap-[3rem] ">
      <MovieTile />
      <SeriesTile />
      <RatedTile />
    </div>
  );
}

export default MainTileComp;
