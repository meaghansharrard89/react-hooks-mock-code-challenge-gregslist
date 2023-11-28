import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { items, handleDelete }) {

  return (
    <main>
      <ul className="cards">
        {items.map((listItem) => 
          <ListingCard 
            key={listItem.id} 
            item={listItem}
            handleDelete={handleDelete}
          />
          )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
