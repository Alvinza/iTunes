import React, { useState } from "react";

// SearchBar component: lets users enter a term and select media type to search
// {Object} props props.onSearch - Callback function to handle search
const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState(""); // Search input value
  const [media, setMedia] = useState("all"); // Selected media type

  // Handle form submit: prevent reload + call parent onSearch
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, media);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      {/* Search text input */}
      <input
        type="text"
        placeholder="Search term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ marginRight: "1rem" }}
      />

      {/* Dropdown for media type */}
      <select
        value={media}
        onChange={(e) => setMedia(e.target.value)}
        className="select"
      >
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movies</option>
        <option value="podcast">Podcasts</option>
      </select>

      {/* Submit button */}
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
