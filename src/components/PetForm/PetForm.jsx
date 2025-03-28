import React, { useState } from "react";

const PetForm = ({ handleAddPet }) => {
  // state to track form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddPet(formData);
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
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
