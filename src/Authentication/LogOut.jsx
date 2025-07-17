import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import { useLogOut } from "./useLogOut";

function LogOut() {
  const {logoutFn} = useLogOut()
  return <ArrowRightEndOnRectangleIcon className="size-6" role="button" onClick={()=>logoutFn()} />;
}

export default LogOut;
