import React from "react";
import SortBy from "../ui/SortBy";

function MovieTableOperation() {
  return (
    <SortBy
      options={[
        { value: "title-asc", label: "Sort by title (A-Z)" },
        { value: "title-desc", label: "Sort by title (Z-A)" },
        { value: "year-asc", label: "Sort by year (low first)" },
        { value: "year-desc", label: "Sort by year (high first)" },
        { value: "rating-asc", label: "Sort by rating (low first)" },
        { value: "rating-desc", label: "Sort by rating (high first)" },
      ]}
    />
  );
}

export default MovieTableOperation;
