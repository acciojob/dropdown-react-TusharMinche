import React from "react";

const Card = ({ state, city, landmark }) => {
  return (
    <div>
      <div id="state-title">{state.name}</div>
<div id="state-description">{state.description}</div>

<div id="city-title">{city.name}</div>
<div id="city-description">{city.description}</div>

<div id="landmark-title">{landmark.name}</div>
<div id="landmark-description">{landmark.description}</div>

    </div>
  );
};

export default Card;
