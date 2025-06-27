import { Cog6ToothIcon, FilmIcon, UserIcon } from "@heroicons/react/16/solid";
import { VideoCameraIcon } from "@heroicons/react/20/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="border-r border-r-gray-100 font-medium text-[18px] row-[1/-1] flex flex-col py-7  gap-[3rem] bg-red-700">
      <div className="px-4">
        <h1>Logo here</h1>
      </div>

      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            // className="flex items-center gap-3  px-4  bg-blue-950 py-3 text-white"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center gap-3  px-4  bg-[#f9fafb] py-3 text-[#1f2937] rounded-tr-full rounded-br-full transition-all delay-3X~00 ease-linear"
                : "flex items-center gap-3  px-4  py-3 text-[#4b5563] hover:bg-gray-400 rounded-tr-full rounded-br-full transition-all delay-300 ease-linear "
            }
            to="dashboard"
          >
            <HomeModernIcon className="size-5 " /> <span>DashBoard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center gap-3  px-4  bg-[#f9fafb] py-3 text-[#1f2937] rounded-tr-full rounded-br-full"
                : "flex items-center gap-3  px-4  py-3 text-[#4b5563] hover:bg-gray-400 rounded-tr-full rounded-br-full "
            }
            to="movies"
          >
            <FilmIcon className="size-5 " /> Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center gap-3  px-4  bg-[#f9fafb] py-3 text-[#1f2937] rounded-tr-full rounded-br-full"
                : "flex items-center gap-3  px-4  py-3 text-[#4b5563] hover:bg-gray-400 rounded-tr-full rounded-br-full "
            }
            to="series"
          >
            <VideoCameraIcon className="size-5 " /> Series
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center gap-3  px-4  bg-[#f9fafb] py-3 text-[#1f2937] rounded-tr-full rounded-br-full"
                : "flex items-center gap-3  px-4  py-3 text-[#4b5563] hover:bg-gray-400 rounded-tr-full rounded-br-full "
            }
            to="account"
          >
            <UserIcon className="size-5 " /> Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center gap-3  px-4  bg-[#f9fafb] py-3 text-[#1f2937] rounded-tr-full rounded-br-full"
                : "flex items-center gap-3  px-4  py-3 text-[#4b5563] hover:bg-gray-400 rounded-tr-full rounded-br-full "
            }
            to="settings"
          >
            <Cog6ToothIcon className="size-5 " /> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
