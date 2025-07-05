import React from "react";

function SortBy({ options }) {
  console.log(options);
  return (
    <>
      <select className="bg-[#fff] border-1 rounded-sm border-gray-400 px-1 outline-none w-[15rem] py-1.5 text-[14px]">
        {options.map((s) => {
          return (
            <option value={s.value} className="text-[13px] px-1 py-1">
              {s.label}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SortBy;
