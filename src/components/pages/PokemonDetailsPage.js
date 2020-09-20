import React from "react";

import PokemonDetails from "../PokemonDetails";

const PokemonDetailsPage = (props) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pokemon Details</h2>
      <PokemonDetails id={props.match.params.id}></PokemonDetails>
    </div>
  );
};

export default PokemonDetailsPage;
