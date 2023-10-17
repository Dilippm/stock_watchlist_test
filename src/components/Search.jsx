import React, { useState } from "react";
import "./search.css";
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for companies..."
        id="search-bar"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
