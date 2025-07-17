import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import { useLogOut } from "./useLogOut";

function LogOut() {
  const { logoutFn } = useLogOut();
  return (
    <button
      className="bg-gray-50 shadow-sm rounded-sm px-[0.3rem] py-2.5 flex items-center cursor-pointer"
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
