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

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen} />
      {isFormOpen ? <PetForm handleAddPet={handleAddPet} /> : <PetDetail selected={selected} />}
    </>
  );
}

export default App;
