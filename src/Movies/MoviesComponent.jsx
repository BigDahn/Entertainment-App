import { useMovies } from "./useMovies";
import Loading from "../ui/Loading";
import MovieTable from "./MovieTable";
import Button from "../ui/Button";
import DeleteConfirmationBox from "../ui/DeleteConfirmationBox";
import { useSelector } from "react-redux";

function MoviesComponent() {
  const { movies, isLoading, error } = useMovies();

  const { isDeleteModal } = useSelector((store) => store.Entertainment);

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
      </div>
    );
  }
  return (
    <>
      <main className="py-2 px-6 flex flex-col gap-3   h-screen ">
        <h3>All Movies</h3>
        <Button style="bg-gray-300 font-medium  text-[12px] rounded-sm py-1.5 px-1.5 max-w-30 shadow-sm cursor-pointer">
          Add New Movie
        </Button>
        <MovieTable movies={movies} />
      </main>
      {isDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300/40">
          <DeleteConfirmationBox />
        </div>
      )}
    </>
  );
}

export default MoviesComponent;
