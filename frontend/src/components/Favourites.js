import React from 'react';

const Favourites = ({ favourites, onRemove }) => {
  return (
    <div className="favourites">
      <h2>Favourites</h2>
      {favourites.map((item, index) => (
        <div key={index} className="favourite-item">
          <h3>{item.collectionName || item.trackName}</h3>
          <button onClick={() => onRemove(item)}
           className='btn btn-danger'
           style={{marginBottom: "1rem"}}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
