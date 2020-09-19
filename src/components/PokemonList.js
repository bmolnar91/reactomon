import React, { Component } from "react";
import { PropTypes } from "prop-types";

import Pokemon from "./Pokemon";

class PokemonList extends Component {
  render() {
    return this.props.pokemonList.map((pokemon) => (
      <li key={pokemon.name}>
        <Pokemon pokemon={pokemon} />
      </li>
    ));
  }
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};

export default PokemonList;
