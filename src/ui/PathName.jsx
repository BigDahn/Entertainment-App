import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { closeDeleteModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import { useDeleteMovie } from "../Movies/useDeleteMovie";
import { useGetPathName } from "../hooks/useGetPathName";
import { useDeleteSeries } from "../Series/UseDeleteSeries";
import MiniLoader from "./MiniLoader";

function PathName() {
  const {
    options: { id },
    isDarkMode,
  } = useSelector((store) => store.Entertainment);

  const { path } = useGetPathName();
  const { mutate: DeleteBtn, isPending } = useDeleteMovie();
  const { mutate: DeleteSeries, isPending: isDeleting } = useDeleteSeries();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3">
      <h3 className="capitalize font-semibold text-[20px]">
        {` Delete this ${path}?`}
      </h3>
      <p className="text-[15px]">
        {` Are you sure you want to delete this ${path}? This action will remove
    this ${path} and cannot be reversed!`}
      </p>
      <div className="flex justify-end gap-4 pt-3">
        <Button
          style={`${
            isDarkMode
              ? "bg-gray-200 text-black px-6 py-1.5 text-[13px] rounded-lg cursor-pointer"
              : "bg-gray-300 px-6 py-1.5 text-[13px] rounded-lg cursor-pointer"
          }`}
          onClick={() => dispatch(closeDeleteModal())}
        >
          Cancel
        </Button>
        {path === "movies" ? (
          <Button
            style="bg-red-500 px-6 py-2 w-[6rem] text-[13px] rounded-sm cursor-pointer flex items-center justify-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isPending}
            onClick={() => {
              DeleteBtn({ id, path }), dispatch(closeDeleteModal());
            }}
          >
            {isPending ? <MiniLoader /> : <p>Delete</p>}
          </Button>
        ) : (
          <Button
            style="bg-red-500 px-6 py-2 w-[6rem] text-[13px] rounded-sm text-white cursor-pointer flex items-center justify-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isDeleting}
            onClick={() => {
              DeleteSeries({ id, path }), dispatch(closeDeleteModal());
            }}
          >
            {isDeleting ? <MiniLoader /> : <p>Delete</p>}
          </Button>
        )}
      </div>
    </div>
  );
}

export default PathName;
