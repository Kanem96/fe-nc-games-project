import React, { useEffect, useState } from "react";

const Filter = ({ setSearchParams, category }) => {
  const [filter, setFilter] = useState("");
  const [filterOrder, setFilterOrder] = useState("asc");
  useEffect(() => {
    if (filter.length > 0)
      setSearchParams(
        category
          ? `category=${category}&sort_by=${filter}&order=${filterOrder}`
          : `sort_by=${filter}&order=${filterOrder}`
      );
  }, [filter, filterOrder]);

  return (
    <form className="filter-form">
      <select
        className="filter-dropdown"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="" disabled>
          {" "}
          Select a Filter
        </option>
        <option value="created_at">Sort by Date</option>
        <option value="comment_count">Sort by Comments</option>
        <option value="votes">Sort by Votes</option>
      </select>
      <select
        className="filter-dropdown"
        value={filterOrder}
        onChange={(event) => setFilterOrder(event.target.value)}
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </form>
  );
};

export default Filter;
