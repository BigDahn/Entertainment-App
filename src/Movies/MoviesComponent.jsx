import { useMovies } from "./useMovies";
import Loading from "../ui/Loading";
import MovieTable from "./MovieTable";
import Button from "../ui/Button";
import DeleteConfirmationBox from "../ui/DeleteConfirmationBox";
import { useDispatch, useSelector } from "react-redux";
import { openNewMovie } from "../feature/EntertainmentSlice/EntertainmentSlice";
import MovieTableOperation from "./MovieTableOperation";
import { useSearchParams } from "react-router-dom";
import { useGetPathName } from "../hooks/useGetPathName";

function MoviesComponent() {
  const [searchParams] = useSearchParams();
  const { path } = useGetPathName();
  const { movies, isLoading, error, count } = useMovies();
  const dispatch = useDispatch();
  const { isDeleteModal, newMovie } = useSelector(
    (store) => store.Entertainment
  );

  console.log(isDeleteModal);
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
  const sortBy = searchParams.get("sortby") || "title-asc";

  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;

  const sortedData =
    field === "title" && direction === "asc"
      ? movies.sort((a, b) => a[field].localeCompare(b[field]))
      : field === "title" && direction === "desc"
      ? movies.sort((a, b) => b[field].localeCompare(a[field]))
      : movies?.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <>
      <main className="py-4 px-6 flex flex-col gap-3   h-screen ">
        <div className="flex justify-between items-center">
          <h3 className="text-[20px] font-semibold">All Movies</h3>
          <MovieTableOperation />
        </div>

        <MovieTable movies={sortedData} count={count} />
        <div className="pb-2">
          {!newMovie && (
            <Button
              style="bg-blue-800 font-semibold text-white  text-[12px] rounded-sm py-1.5 px-1.5 max-w-30 shadow-sm cursor-pointer shadow-md"
              onClick={() => dispatch(openNewMovie())}
            >
              Add New Movie
            </Button>
          )}
        </div>
      </main>

      {isDeleteModal.isOpen && isDeleteModal.name === path && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300/40">
          <DeleteConfirmationBox />
        </div>
      )}
    </>
  );
}

export default MoviesComponent;
