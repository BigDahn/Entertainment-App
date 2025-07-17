import Avatar from "../Authentication/Avatar";
import LogOut from "../Authentication/LogOut";

function Header() {
  return (
    <main className="border-b border-b-gray-100   flex justify-end px-4 items-center ">
      <div className="flex gap-[1rem] items-center">
        <Avatar />
        <LogOut />
      </div>
    </main>
  );
}

export default Header;
