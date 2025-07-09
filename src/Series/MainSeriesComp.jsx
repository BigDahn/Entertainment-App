import Button from "../ui/Button";
import Loading from "../ui/Loading";
import SortBy from "../ui/SortBy";
import NewSeriesForm from "./NewSeriesForm";
import SeriesTable from "./SeriesTable";
import SeriesTableOperations from "./SeriesTableOperations";
import { useSeries } from "./useSeries";

function MainSeriesComp() {
  const { series, isLoading, count } = useSeries();

  if (isLoading)
    return (
      <div className="m-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <main className="px-5 py-3 flex flex-col gap-3">
      <div className="flex justify-between ">
        <h3>All Series</h3>
        <SeriesTableOperations />
      </div>
      <SeriesTable series={series} count={count} />
      <div className="pb-2">
        <Button
          style="bg-blue-800 font-semibold text-white  text-[12px] rounded-sm py-1.5 px-1.5 max-w-30 shadow-sm cursor-pointer shadow-md"
          // onClick={() => dispatch(openNewMovie())}
        >
          Add New Movie
        </Button>
      </div>
      <NewSeriesForm />
    </main>
  );
}

export default MainSeriesComp;
