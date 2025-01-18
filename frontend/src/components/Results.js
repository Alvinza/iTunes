import React from 'react';

/**
 * Results Component
 * Displays search results from iTunes API
 * @param {Object} props
 * @param {Array} props.results - Array of search results from iTunes
 * @param {Function} props.onAddToFavourites - Callback to add item to favourites
 */
const Results = ({ results, onAddToFavourites }) => {
  return (
    <div className="results">
      {results.map((item, index) => (
        <div key={index} className="result-item">
          <img src={item.artworkUrl100} alt="cover" />
          <h3>{item.collectionName || item.trackName}</h3>
          <p>{item.artistName}</p>
          <button 
            onClick={() => onAddToFavourites(item)} 
            className='btn btn-success'
            style={{marginBottom: "1rem"}}
          >
            Add to Favourites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Results;