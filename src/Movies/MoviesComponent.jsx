import React from "react";
import { useMovies } from "./useMovies";
import Loading from "../ui/Loading";
import MovieTable from "./MovieTable";

function MoviesComponent() {
  const { movies, isLoading, error } = useMovies();

  if (isLoading)
    return (
      <div className="m-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );

  return <MovieTable movies={movies} />;
}

export default MoviesComponent;
