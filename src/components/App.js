import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("")
  
  const filteredItems = items.filter((i) =>
    i.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((data) => setItems(data))
  }, [])

  
  function handleDelete(deletedItem){
    const updatedList = items.filter((item) => item.id !== deletedItem);
    setItems(updatedList);
  }

  function handleSearch(item){
    setSearch(item)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer 
        items={filteredItems}
        handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
