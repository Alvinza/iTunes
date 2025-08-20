import React from "react";

/**
 * Props:
 * - favorites: Array of favorite items
 * - onRemove: Function to remove a selected item from favorites
 */

const Favorites = ({ favorites, onRemove }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>

      {/* Render each favorite item */}
      {favorites.map((item, index) => (
        <div key={index} className="favorite-item">
          {/* Display item name (collectionName if available, otherwise trackName) */}
          <h4>{item.collectionName || item.trackName}</h4>
          <button
            onClick={() => onRemove(item)}
            className="btn btn-danger"
            style={{ marginBottom: "1rem" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
