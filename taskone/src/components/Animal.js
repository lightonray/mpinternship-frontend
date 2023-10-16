import React from 'react';

const Animal = ({ name, isMammal }) => {
  return (
    <div className="Animal">
     <div className="animal-info">
      <h2>{name}</h2>
      <p>Is a Mammal: {isMammal ? <strong>Yes</strong> : <strong>No</strong>}</p>
      </div>
    </div>
  );
};

export default Animal;