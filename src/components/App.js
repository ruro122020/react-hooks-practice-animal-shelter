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
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;