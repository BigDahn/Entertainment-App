import React from "react";
import { useMovies } from "./useMovies";
import Loading from "../ui/Loading";

function MoviesComponent() {
  const { movies, isLoading, error } = useMovies();

  console.log(movies);

  if (isLoading)
    return (
      <div className="m-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div>
      {movies.map((s) => {
        const { id, title, description, image, year, rating } = s;
        return (
          <main key={id} className="flex">
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{year}</h3>
            <h6>{rating}</h6>
          </main>
        );
      })}
    </div>
  );
}

export default MoviesComponent;
