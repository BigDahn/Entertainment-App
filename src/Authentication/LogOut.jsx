import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import { useLogOut } from "./useLogOut";
import { useSelector } from "react-redux";

function LogOut() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  const { logoutFn } = useLogOut();
  return (
    <button
      className={`${
        isDarkMode
          ? "bg-[#18212f] border-gray-500 shadow-sm rounded-sm px-[0.3rem] py-2.5 flex items-center cursor-pointer"
          : "bg-gray-50 shadow-sm rounded-sm px-[0.3rem] py-2.5 flex items-center cursor-pointer"
      }`}
      onClick={() => logoutFn()}
    >
      {" "}
      <ArrowRightEndOnRectangleIcon
        className="size-4 text-blue-500"
        role="button"
      />
    </button>
  );
}

export default LogOut;
