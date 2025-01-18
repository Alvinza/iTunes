import React, { useState } from 'react';

/**
 * SearchBar Component
 * Renders a form with search input and media type selection
 * @param {Object} props
 * @param {Function} props.onSearch - Callback function to handle search
 */
const SearchBar = ({ onSearch }) => {
  // State for search term and media type
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('all');

  /**
   * Handles form submission
   * Prevents default form behavior and calls onSearch with current term and media
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, media);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search term"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{marginRight: "1rem"}}
      />
      <select value={media} onChange={(e) => setMedia(e.target.value)} className='select'>
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movies</option>
        <option value="podcast">Podcasts</option>
      </select>
      <button className='btn btn-primary' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;