import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";

function AddNewUser() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gray-800 text-gray-200 w-full px-3 py-2 rounded-sm"
          : "bg-white w-full px-3 py-2 rounded-sm"
      }`}
    >
      <h2 className="text-[17px] font-medium border-b border-gray-200 ">
        {" "}
        Add New User
      </h2>
      <p className="text-[13px] py-2">
        Adding a new user who also gets access to this dashboard
      </p>
      <div className="flex justify-end">
        <Button style="text-[13px] bg-blue-500 px-3 py-1.5 w-[8rem] flex justify-center rounded-sm text-white items-center gap-2 cursor-pointer">
          <UserCircleIcon className="size-4" />
          <Link to="/users">Add User</Link>
        </Button>
      </div>
    </div>
  );
}

export default AddNewUser;
