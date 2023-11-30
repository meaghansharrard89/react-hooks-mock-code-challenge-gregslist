import React, { useState } from "react";

function Search( { search, handleSearch } ) {
  const [localSearch, setLocalSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(localSearch);
  }

  function handleChange(e){
    setLocalSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={localSearch}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;