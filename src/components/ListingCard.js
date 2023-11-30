import React, { useState } from "react";

function ListingCard( { item, handleDelete } ) {
  const { id, description, image, location } = item;
  const [isClicked, setAsNotClicked] = useState(false)

  function handleClick(){
    setAsNotClicked((isClicked) => !isClicked)
  }

  function handleDeleteClick(e){
    e.preventDefault();
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
  })
      .then((res) => res.json())
      .then(() => handleDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isClicked ? (
          <button 
            className="emoji-button favorite active"
            onClick={handleClick}>★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;