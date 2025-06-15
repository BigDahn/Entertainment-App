import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import React from "react";

function Header() {
  return (
    <main className="border-b border-b-gray-100   flex justify-end px-4 items-center ">
      <div className="flex gap-5">
        <h3>avatar</h3>
        <ArrowRightEndOnRectangleIcon className="size-6" role="button" />
      </div>
    </main>
  );
}

export default Header;
