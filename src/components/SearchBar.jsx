import React, { useContext, useState } from "react";
import "./style/SearchBar.css"; // Import the CSS file
import { MyContext } from "./context/searchcontext";

const SearchBar = () => {
  let [query, setQuery] = useState("");
  let { searchsong, setSearchsong } = useContext(MyContext);

  const handleInputChange = (e) => {
    query = e.target.value;
    setQuery(query);
    searchsong = query.toLowerCase();
    setSearchsong(searchsong);
    console.log(searchsong);
  };

  const handleSearch = () => {
    // console.log(`Searching for: ${query}`);
    // Implement your search logic here
    searchsong = query.toLowerCase();
    setSearchsong(searchsong);
    console.log(searchsong);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Song, Artist"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l6-6m0 0l-6-6m6 6H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
