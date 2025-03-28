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
    </div>
  );
};

export default PetDetail;
