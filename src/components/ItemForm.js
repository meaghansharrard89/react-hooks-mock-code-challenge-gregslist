import React, { useState } from "react";

function ItemForm( { updateNewItem } ){
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    });

    function handleChange(e){
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
    }

    function handleSubmit(e){
        e.preventDefault();
        const newItem = {
            description: formData.description,
            image: formData.image,
            location: formData.location
        }
    fetch('http://localhost:6001/listings', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    })
    .then((res) => res.json())
    .then(updateNewItem)
    setFormData({
        description: "",
        image: "",
        location: ""
    })
}

    return (
    <div>
    <h3>Add an item!</h3>
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Description"
            name="description"
            value={formData.name}
            onChange={handleChange}
        />
        <br/>
        <input 
            type="text"
            placeholder="Image"
            name="image"
            value={formData.image}
            onChange={handleChange}
        />
        <br/>
        <input 
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
        />
        <br/>
        <button type="submit">Submit</button>
	</form>
    </div>
    )
}

export default ItemForm;