import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../feature/EntertainmentSlice/EntertainmentSlice";

function Theme() {
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  const dispatch = useDispatch();
  return (
    <div>
      <label
        htmlFor="check"
        className={`${
          isDarkMode
            ? "inline-flex w-[31px] h-[15px] items-center justify-center rounded-full bg-gray-600 cursor-pointer "
            : "inline-flex w-[31px] h-[15px] items-center justify-center rounded-full bg-[#18212f] cursor-pointer "
        }`}
      >
        <input
          type="checkbox"
          id="check"
          name="check"
          checked={isDarkMode}
          className="sr-only"
          onChange={() => dispatch(themeToggle())}
        />

        <div
          className={`${
            isDarkMode
              ? "relative translate-x-2 w-[15px] h-[15px] rounded-full bg-white transition-all ease-linear  duration-600"
              : "relative -translate-x-2 h-[15px] w-[15px] rounded-full bg-white  transition-all ease-linear duration-600"
          }`}
        ></div>
      </label>
    </div>
  );
}

export default Theme;
