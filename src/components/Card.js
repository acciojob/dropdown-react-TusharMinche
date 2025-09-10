import React from "react";

const Card = ({ state, city, landmark }) => {
  return (
    <div>
      <div id="state-name">{state.name}</div>
      <div id="state-description">{state.description}</div>

      <div id="city-name">{city.name}</div>
      <div id="city-description">{city.description}</div>

      <div id="landmark-name">{landmark.name}</div>
      <div id="landmark-description">{landmark.description}</div>
    </div>
  );
};

export default Card;
