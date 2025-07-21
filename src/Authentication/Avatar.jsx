import React from "react";
import { useGetUser } from "./useGetUser";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Avatar() {
  const {
    user: {
      user_metadata: { fullname, avatar },
    },
  } = useGetUser();
  console.log(avatar);
  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] font-medium">{fullname}</span>
      {avatar === "" ? (
        <UserCircleIcon className="size-10" />
      ) : (
        <img
          src={avatar}
          className="object-cover object-center rounded-full h-[2.4rem] w-[2.4rem] aspect-square outline-1 outline-gray-200"
        />
      )}
    </div>
  );
}

export default Avatar;
