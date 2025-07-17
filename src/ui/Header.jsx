import LogOut from "../Authentication/LogOut";

function Header() {
  return (
    <main className="border-b border-b-gray-100   flex justify-end px-4 items-center ">
      <div className="flex gap-5">
        <h3>avatar</h3>
        <LogOut />
      </div>
    </main>
  );
}

export default Header;
