import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Favorites from "./components/Favorites";

/**
 * Main App Component
 * Handles global state for search results, favourites, and authentication
 */
function App() {
 
  const [results, setResults] = useState([]);       // Stores search results
  const [favorites, setFavorites] = useState([]); // Stores favorite items
  const [token, setToken] = useState("");           // Stores authentication token

  // Fetch Authentication Token
  useEffect(() => {
    const fetchToken = async () => {
      const { data } = await axios.post(
        "https://itunes-backend-1snu.onrender.com/api/token"
      );
      setToken(data.token);
    };
    fetchToken();
  }, []);

  // -------------------- Handle Search --------------------
  const handleSearch = async (term, media) => {
    // term = search keyword, media = type of content (music, movies, etc.)
    try {
      const { data } = await axios.get(
        "https://itunes-backend-1snu.onrender.com/api/search",
        {
          params: { term, media },
          headers: { Authorization: token },
        }
      );
      setResults(data); // update results with API response
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const addToFavorites = (item) => {
    // add selected item to favourites
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    // remove item from favourites by trackId
    setFavorites(favorites.filter((fav) => fav.trackId !== item.trackId));
  };

  return (
   <div className="App container">
  <h1>iTunes Search App</h1>

  <div className="row">
    <div className="col-md-8">
      <SearchBar onSearch={handleSearch} />
    </div>
    <div className="col-md-4">
      <Favorites favorites={favorites} onRemove={removeFromFavorites} />
    </div>
  </div>

  <Results results={results} onAddToFavorites={addToFavorites} />
</div>

  );
}

export default App;
