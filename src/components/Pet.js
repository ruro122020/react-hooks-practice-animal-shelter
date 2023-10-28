import React from "react";

function Pet({pet}) {
  const {id, type, gender, age, weight, name, isAdopted} = pet
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender} : {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;