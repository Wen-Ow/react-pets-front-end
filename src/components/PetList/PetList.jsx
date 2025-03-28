import React from "react";

const PetList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {!props.pets.length ? (
          <h2> No pets yet</h2>
        ) : (
          <ul>
            {props.pets.map((pet) => {
              return (
                <li
                  style={{ cursor: "pointer", color: "#646CFF" }}
                  key={pet._id}
                  onClick={() => props.handleSelect(pet)}
                >
                  {pet.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <button onClick={props.handleFormView}>{props.isFormOpen ? "Close Form" : "New Pet"}</button>
    </div>
  );
};

export default PetList;
