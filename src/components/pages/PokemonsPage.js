import React, { Component } from "react";
import axios from "axios";

import PokemonList from "../PokemonList";

class PokemonsPage extends Component {
  state = {
    next: null,
    previous: null,
    results: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) =>
      this.setState({
        next: res.data.next,
        previous: res.data.previous,
        results: res.data.results,
      })
    );
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "left", padding: "15px" }}>Pokemons</h2>
        <ol>
          <PokemonList pokemons={this.state.results} />
        </ol>
      </div>
    );
  }
}

export default PokemonsPage;
