import React, { useState } from "react";

const PetForm = ({ handleAddPet, selected, handleUpdatePet }) => {
  // state to track form data
  const initialState = {
    name: "",
    age: "",
    breed: "",
  };

  const [formData, setFormData] = useState(selected ? selected : initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if selected is not null, we need to run a new updatePetfunction
    selected ? handleUpdatePet(formData) : handleAddPet(formData);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />
        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" onChange={handleChange} value={formData.age} />
        <label htmlFor="breed">Breed</label>
        <input type="text" id="breed" name="breed" onChange={handleChange} value={formData.breed} />
        <button type="submit">{selected ? "Update Pet" : "Add New Pet"}</button>
      </form>
    </div>
  );
};

export default PetForm;
