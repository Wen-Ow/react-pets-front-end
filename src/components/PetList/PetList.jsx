import React, { useState } from "react";

const PetList = ({ pets, handleSelect }) => {
  // const [pets, setPets] = useState([])

  if (!pets.length) {
    return <div>No Pets Found</div>;
  }

  // src/components/PetList/PetList.jsx

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {!pets.length ? (
          <h2>No Pets Yet!</h2>
        ) : (
          <ul>
            {pets.map((pet) => (
              <li key={pet._id} onClick={() => handleSelect(pet)} style={{ cursor: "pointer" }}>
                <strong>Name:</strong> {pet.name} <strong>Age:</strong> {pet.age} <strong>Breed:</strong> {pet.breed}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default PetList;
