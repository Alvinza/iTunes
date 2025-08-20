import React from 'react';

/**
 * Displays search results from iTunes API
 *  {Object} props
 *  {Array} props.results - Array of search results from iTunes
 * {Function} props.onAddToFavorites - Callback to add item to favorites
 */
const Results = ({ results, onAddToFavorites }) => {
  return (
    <div className="results">
      {results.map((item, index) => (
        <div key={index} className="result-item">
          <img src={item.artworkUrl100} alt="cover" />
          <h3>{item.collectionName || item.trackName}</h3>
          <p>{item.artistName}</p>
          <button 
            onClick={() => onAddToFavorites(item)} 
            className='btn btn-outline-primary'
            style={{marginBottom: "1rem"}}
          >
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Results;