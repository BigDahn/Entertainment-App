import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import Loading from "../ui/Loading";
import SortBy from "../ui/SortBy";
import NewSeriesForm from "./NewSeriesForm";
import SeriesTable from "./SeriesTable";
import SeriesTableOperations from "./SeriesTableOperations";
import { useSeries } from "./useSeries";
import { useGetPathName } from "../hooks/useGetPathName";
import DeleteConfirmationBox from "../ui/DeleteConfirmationBox";
import { openCreateForm } from "../feature/EntertainmentSlice/EntertainmentSlice";

function MainSeriesComp() {
  const { path } = useGetPathName();
  const dispatch = useDispatch();
  const { series, isLoading, count } = useSeries();
  const { isDeleteModal, addNew, isDarkMode } = useSelector(
    (store) => store.Entertainment
  );

  if (isLoading)
    return (
      <div className="m-auto h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  return (
    <main
      className={`${
        isDarkMode
          ? "px-5 py-3 flex flex-col gap-3 text-gray-200"
          : "px-5 py-3 flex flex-col gap-3"
      }`}
    >
      <div className="flex justify-between ">
        <h3>All Series</h3>
        <SeriesTableOperations />
      </div>
      <SeriesTable series={series} count={count} />
      <div className="pb-2">
        {(!addNew.isOpen || addNew.name !== path) && (
          <Button
            style="bg-blue-500 font-normal text-white  text-[12px] rounded-sm py-1.5 px-1.5 max-w-30 shadow-sm cursor-pointer shadow-md"
            onClick={() => dispatch(openCreateForm(path))}
          >
            Add New Series
          </Button>
        )}
      </div>
      {addNew.isOpen && addNew.name === path && <NewSeriesForm />}
      {isDeleteModal.isOpen && isDeleteModal.name === path && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300/40">
          <DeleteConfirmationBox />
        </div>
      )}
    </main>
  );
}

export default MainSeriesComp;
