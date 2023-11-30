import React, { useState } from "react";

function Search( { search, handleSearch } ) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleChange(e){
    handleSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;