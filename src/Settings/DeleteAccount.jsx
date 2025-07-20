import React from "react";
import Button from "../ui/Button";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

function DeleteAccount() {
  return (
    <div className="bg-white w-full px-3 py-2 rounded-sm">
      <h2 className="text-[17px] text-red-500 font-medium border-b border-gray-200 ">
        {" "}
        Delete Account
      </h2>
      <p className="text-[13px] py-2">
        Once you delete your account, there is no going back. Please be certain.
      </p>
      <div className="flex justify-end">
        <Button style="text-[13px] bg-transparent border-1 px-3 py-2 rounded-sm text-red-600 cursor-pointer flex items-center gap-1 shadow-md">
          <ExclamationTriangleIcon className="size-4 text-red-500" /> Delete
          Your Account
        </Button>
      </div>
    </div>
  );
}

export default DeleteAccount;
