import React from "react";
import SortBy from "../ui/SortBy";
import { useSearchParams } from "react-router-dom";

function SeriesTableOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortby") || "title-asc";
  function handleSelectOptions(e) {
    searchParams.set("sortby", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <SortBy
        options={[
          { value: "title-asc", label: "Sort by title (A-Z)" },
          { value: "title-desc", label: "Sort by title (Z-A)" },
          { value: "year-asc", label: "Sort by year (low first)" },
          { value: "year-desc", label: "Sort by year (high first)" },
          { value: "ratings-asc", label: "Sort by rating (low first)" },
          { value: "ratings-desc", label: "Sort by rating (high first)" },
        ]}
        value={sortBy}
        handleSelectOptions={handleSelectOptions}
      />
    </div>
  );
}

export default SeriesTableOperations;
