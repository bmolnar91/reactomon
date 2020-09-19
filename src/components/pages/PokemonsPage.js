import React from "react";

import PokemonList from "../PokemonList";

class PokemonsPage extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Pokemons</h2>
        <ol>
          <PokemonList pokemonList={this.props.pokemonList} />
        </ol>
      </div>
    );
  }
}

export default PokemonsPage;
