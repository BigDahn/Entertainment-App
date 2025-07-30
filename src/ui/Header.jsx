import { useSelector } from "react-redux";
import Avatar from "../Authentication/Avatar";
import LogOut from "../Authentication/LogOut";

function Header() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <main
      className={`${
        isDarkMode
          ? "border-b border-b-gray-800  bg-[#18212f] flex justify-end px-4 items-center "
          : "border-b border-b-gray-100   flex justify-end px-4 items-center "
      }`}
    >
      <div className="flex gap-[1rem] items-center">
        <Avatar />
        <LogOut />
      </div>
    </main>
  );
}

export default Header;
