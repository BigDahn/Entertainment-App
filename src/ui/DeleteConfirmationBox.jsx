import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { closeDeleteModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import { useDeleteMovie } from "../Movies/useDeleteMovie";
import { useGetPathName } from "../hooks/useGetPathName";
import { useDeleteSeries } from "../Series/UseDeleteSeries";

function DeleteConfirmationBox() {
  const { optionsId: id } = useSelector((store) => store.Entertainment);
  const { path } = useGetPathName();
  const { mutate: DeleteBtn, isLoading } = useDeleteMovie();
  const { mutate: DeleteSeries, isLoading: isDeleting } = useDeleteSeries();
  const dispatch = useDispatch();
  return (
    <main className="bg-white max-w-[31rem] py-3 px-4 rounded-md">
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
            style="bg-gray-300 px-6 py-1.5 text-[13px] rounded-lg cursor-pointer"
            onClick={() => dispatch(closeDeleteModal())}
          >
            Cancel
          </Button>
          {path === "movies" ? (
            <Button
              style="bg-red-500 px-6 py-1.5 text-[13px] rounded-lg cursor-pointer"
              onClick={() => {
                DeleteBtn({ id, path }), dispatch(closeDeleteModal());
              }}
            >
              Delete
            </Button>
          ) : (
            <Button
              style="bg-red-500 px-6 py-1.5 text-[13px] rounded-lg cursor-pointer"
              onClick={() => {
                DeleteSeries({ id, path }), dispatch(closeDeleteModal());
              }}
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

export default DeleteConfirmationBox;
