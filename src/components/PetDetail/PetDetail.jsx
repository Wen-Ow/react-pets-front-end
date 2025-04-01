import React from "react";

const PetDetail = (props) => {
  if (!props.selected) {
    return <h2>No pet selected</h2>;
  }

  return (
    <div>
      <h1>Pet Detail</h1>
      <h2>Name: {props.selected.name}</h2>
      <p>Age: {props.selected.age} </p>
      <p>Breed: {props.selected.breed} </p>
      <div>
        <button onClick={() => props.handleFormView(props.selected)}>Edit Pet</button>
        <button onClick={() => props.handleDelete(props.selected._id)}>Delete Pet</button>
      </div>
    </div>
  );
};

export default PetDetail;
