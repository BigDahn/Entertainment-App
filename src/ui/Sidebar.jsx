import { Cog6ToothIcon, FilmIcon, UserIcon } from "@heroicons/react/16/solid";
import { VideoCameraIcon } from "@heroicons/react/20/solid";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";
import { useSelector } from "react-redux";

function Sidebar() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  return (
    <div
      className={`${
        isDarkMode
          ? "border-r bg-[#18212f] border-r-gray-600 font-medium text-[18px] row-[1/-1] flex flex-col py-5  gap-[3rem] justify-between "
          : "border-r border-r-gray-100 font-medium text-[18px] row-[1/-1] flex flex-col py-5  gap-[3rem] justify-between "
      }`}
    >
      <div className=" flex flex-col gap-[2rem] h-[90%]">
        <div className="px-1 flex flex-col items-center justify-center ">
          <img src="/logo.svg" className="w-[3rem]" />
        </div>

        <ul className="flex flex-col gap-3 ">
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

      <div
        className={`${
          isDarkMode
            ? "flex m-auto  gap-2 w-[90%] items-end  bg-[#18212f] justify-center  rounded-sm py-1"
            : "flex m-auto  gap-2 w-[90%] items-end  bg-gray-200 justify-center  rounded-sm py-1"
        }`}
      >
        <div className="flex items-center gap-3 justify-center">
          <img src="/icon-light-theme.svg" />
          <Theme />
          <img src="/icon-dark-theme.svg" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
//#272757

//className="flex m-auto  gap-2 w-[90%] items-end  bg-gray-200 justify-center  rounded-sm py-1"
