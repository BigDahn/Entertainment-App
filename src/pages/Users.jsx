import SignUpform from "../Authentication/SignUpform";
import { useSelector } from "react-redux";

function Users() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <main className="px-6 py-3 flex flex-col gap-3">
      <h3 className={`${isDarkMode ? "text-gray-200" : "text-black"}`}>
        Add A New User
      </h3>

      <SignUpform />
    </main>
  );
}

export default Users;
