import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch]= useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then((data) => setItems(data))
  }, [])

  function handleDelete(deletedItem){
    const updatedList = items.filter((item) => item.id != deletedItem)
    setItems(updatedList)
  }

  function handleSearch(event){
    console.log(event)
    setSearch(event)
  }

  const filteredItems = items.filter((i) => 
    i.description.toLowerCase().includes(search.toLowerCase())
  )

  function sortByLocation(){
    const sortedItems = [...items].sort((a, b) => a.location.localeCompare(b.location))
    setItems(sortedItems);
  }

  function updateNewItem(newItem){
    setItems([...items, newItem])
  }

  return (
    <div className="app">
      <Header 
        handleSearch={handleSearch}
        search={search}
        sortByLocation={sortByLocation}
      />
      <ListingsContainer 
        items={filteredItems}
        handleDelete={handleDelete}
      />
      <ItemForm 
        updateNewItem={updateNewItem}
      />
    </div>
  );
}

export default App;