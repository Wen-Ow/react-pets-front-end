import { useState, useEffect } from "react";
import "./App.css";
import * as petService from "./services/petService.js";
import PetList from "./components/PetList/PetList.jsx";
import PetDetail from "./components/PetDetail/PetDetail.jsx";
import PetForm from "./components/PetForm/PetForm.jsx";

function App() {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelect = (pet) => {
    setSelected(pet);
  };

  const handleAddPet = async (formData) => {
    try {
      const newPet = await petService.create(formData);
      // console.log(newPet)
      if (newPet.err) {
        throw new Error(newPet.err);
      }
      setPets([...pets, newPet]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePet = async (formData) => {
    try {
      const updatedPet = await petService.update(formData);
      if (updatedPet.err) throw new Error(updatedPet.err);
      // updated into state only the pet we updated
      const updatedPets = pets.map((pet) => {
        if (pet._id === updatedPet._id) {
          return updatedPet;
        }

        return pet;
      });
      setPets(updatedPets);
      setSelected(updatedPet);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();

        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }

        setPets(fetchedPets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPets();
  }, []);

  const handleFormView = (pet) => {
    // if no pet id lets setSelected to null
    if (!pet._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleDelete = async (id) => {
    try {
      const deletePet = await petService.deletePet(id);
      if (deletePet.err) throw new Error(deletePet.err);
      // updated into state only the pet we updated
      const deletePets = pets.filter((pet) => pet._id !== id);
      setPets(deletePets);
      setSelected(null);
      // setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PetList
        pets={pets}
        handleAddPet={handleAddPet}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm handleAddPet={handleAddPet} handleUpdatePet={handleUpdatePet} selected={selected} />
      ) : (
        <PetDetail selected={selected} handleFormView={handleFormView} handleDelete={handleDelete} />
      )}
    </>
  );
}

export default App;
