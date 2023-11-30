import React from "react";
import Search from "./Search";
import ItemForm from "./ItemForm";

function Header( { search, handleSearch, sortByLocation } ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        handleSearch={handleSearch}
        search={search}
      />
      <div>
      <button onClick={sortByLocation}>Sort By Location</button>
      </div>
      <br />
      {/* <ItemForm /> */}
    </header>
  );
}

export default Header;