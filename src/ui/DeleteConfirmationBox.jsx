import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { useGetPathName } from "../hooks/useGetPathName";

import PathName from "./PathName";
import { closeDeleteModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import { useGetUser } from "../Authentication/useGetUser";
import { useDeleteAccount } from "../Settings/useDeleteAccount";

function DeleteConfirmationBox() {
  const { path } = useGetPathName();
  const { mutate, isPending } = useDeleteAccount();
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  const dispatch = useDispatch();

  const { user } = useGetUser();

  return (
    <main
      className={`${
        isDarkMode
          ? "bg-gray-800 max-w-[31rem] py-3 px-4 rounded-md text-gray-200"
          : "bg-white max-w-[31rem] py-3 px-4 rounded-md"
      }`}
    >
      {path !== "settings" ? (
        <PathName />
      ) : (
        <div className="flex flex-col gap-3">
          <h3 className="capitalize font-semibold text-[20px]">
            {` Delete this User?`}
          </h3>
          <p className="text-[14px]">
            {` Are you sure you want to delete this account?  Once you delete your account, there is no going back. Please be certain!`}
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

            <Button
              style="bg-red-500 px-6 py-2 w-[6rem] text-[13px] rounded-sm text-white cursor-pointer flex items-center justify-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
              // disabled={isPending}
              onClick={() => {
                mutate(user.id), dispatch(closeDeleteModal());
              }}
            >
              <p>Delete</p>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}

export default DeleteConfirmationBox;
