import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Favourites from './components/Favourites';

/**
 * Main App Component
 * Manages application state and coordinates communication between components
 */
function App() {
  // State management for search results, favourites and API token
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [token, setToken] = useState('');

  // Fetch authentication token on component mount
  useEffect(() => {
    const fetchToken = async () => {
      const { data } = await axios.post('https://itunes-backend-1snu.onrender.com/api/token');
      setToken(data.token);
    };
    fetchToken();
  }, []);

  /**
   * Handles search functionality
   * Makes API call to iTunes search endpoint with authentication
   * @param {string} term - Search term
   * @param {string} media - Media type filter
   */
  const handleSearch = async (term, media) => {
    try {
      const { data } = await axios.get('https://itunes-backend-1snu.onrender.com/api/search', {
        params: { term, media },
        headers: { Authorization: token },
      });
      setResults(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  /**
   * Adds an item to favourites list
   * @param {Object} item - Item to add to favourites
   */
  const addToFavourites = (item) => {
    setFavourites([...favourites, item]);
  };

  /**
   * Removes an item from favourites list
   * @param {Object} item - Item to remove from favourites
   */
  const removeFromFavourites = (item) => {
    setFavourites(favourites.filter(fav => fav.trackId !== item.trackId));
  };

  return (
    <div className="App container">
      <h1>iTunes Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <Results results={results} onAddToFavourites={addToFavourites} />
      <Favourites favourites={favourites} onRemove={removeFromFavourites} />
    </div>
  );
}

export default App;
