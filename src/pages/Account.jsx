import { useSelector } from "react-redux";
import UpdatePasswordForm from "../Authentication/UpdatePasswordForm";
import UpdateUserForm from "../Authentication/UpdateUserForm";

function Account() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <main
      className={`${
        isDarkMode
          ? "px-3 py-3 flex flex-col gap-4 text-gray-200"
          : "px-3 py-3 flex flex-col gap-4"
      }`}
    >
      <h1 className="text-[20px] font-normal">Update Your Account </h1>

      <div className="m-auto w-full flex flex-col items-start px-[3rem]  gap-6">
        <div
          className={`${
            isDarkMode
              ? "flex flex-col bg-gray-800 rounded-sm max-w-[80%] w-[700px] py-4 px-5 gap-2"
              : "flex flex-col bg-white rounded-sm max-w-[80%] w-[700px] py-4 px-5 gap-2"
          }`}
        >
          <h1>Update User Data</h1>
          <UpdateUserForm />
        </div>
        <div
          className={`${
            isDarkMode
              ? "flex flex-col bg-gray-800 rounded-sm max-w-[80%] w-[700px] py-4 px-5 gap-2"
              : "flex flex-col bg-white rounded-sm max-w-[80%] w-[700px] py-4 px-5 gap-2"
          }`}
        >
          <h1>Update Password</h1>
          <UpdatePasswordForm />
        </div>
      </div>
    </main>
  );
}

export default Account;
