import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType =(filtersType)=>{
    //update filters.type state
    setFilters({type: filtersType})
  }
  const onFindPetsClick=()=>{
    if(filters.type === 'all'){
      fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(petsData => setPets(petsData))
    }else{
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(res => res.json())
      .then(petsData => setPets(petsData))
    }
  }
  const onAdoptPet=(id)=>{
    const findPetObj = pets.find(pet => pet.id === id)
    findPetObj.isAdopted = true
    
    const newPets = pets.map(pet => {
      if(pet.id === id){
        return findPetObj
      }else{
        return pet
      }
    })
    setPets(newPets)
  }
  console.log(pets)
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;