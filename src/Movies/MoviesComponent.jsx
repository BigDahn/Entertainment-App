import React from "react";
import { useMovies } from "./useMovies";
import Loading from "../ui/Loading";
import MovieTable from "./MovieTable";
import Button from "../ui/Button";
import { getMovies } from "../services/getMovies";

function MoviesComponent() {
  const { movies, isLoading, error } = useMovies();

  if (isLoading)
    return (
      <div className="m-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );

  if (error) {
    return (
      <div className="m-auto h-screen flex items-center justify-center flex-col gap-2">
        <p className="text-[14px] font-bold capitalize text-gray-600">
          {error.message}
        </p>

        <Button
          style="px-4 py-1.5 rounded-sm bg-gray-300"
          onClick={() => getMovies()}
        >
          Reload
        </Button>
      </div>
    );
  }
  return (
    <main className="py-3 px-6">
      <h3>All Movies</h3>
      <MovieTable movies={movies} />
    </main>
  );
}

export default MoviesComponent;
