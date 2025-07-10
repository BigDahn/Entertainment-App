import React from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../helper/constant";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const PageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === PageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (PageCount <= 1) return null;
  return (
    <main className="flex justify-between w-full py-3 text-[13px]">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to
        <span>
          {" "}
          {currentPage === PageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      {count >= 5 && (
        <div className="flex  items-center gap-4">
          <Button
            style="flex items-center text-[12px] bg-gray-50 py-1.5 px-3 rounded-md cursor-pointer"
            onClick={prevPage}
          >
            <ChevronLeftIcon className="size-4" /> Previous
          </Button>
          <Button
            style="flex items-center text-[12px] bg-gray-50 py-1.5 px-5 rounded-md cursor-pointer"
            onClick={nextPage}
          >
            Next <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      )}
    </main>
  );
}

export default Pagination;
