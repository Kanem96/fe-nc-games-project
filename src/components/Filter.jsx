import React from "react";

const Filter = ({ setParams }) => {
  return (
    <form>
      <select name="" id="" defaultChecked>
        <option value="date">Sort by Date</option>
        <option value="comment_count">Sort by Comments</option>
        <option value="votes">Sort by Votes</option>
      </select>
      <select>
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
      </select>
    </form>
  );
};

export default Filter;
