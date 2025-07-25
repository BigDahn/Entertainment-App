import React from "react";

function MovieTile({ data }) {
  return (
    <div className="bg-white px-[1rem]  flex flex-col py-1.5 items-center  rounded-md ">
      <h1>Total Movie</h1>
      <h3 className="font-semibold text-[30px]">{data?.length}</h3>
    </div>
  );
}

export default MovieTile;
