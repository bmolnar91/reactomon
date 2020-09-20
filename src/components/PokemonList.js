import React from "react";
import { PropTypes } from "prop-types";

import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return props.pokemons.map((pokemon) => (
    <li key={pokemon.name}>
      <Pokemon pokemon={pokemon} />
    </li>
  ));
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
