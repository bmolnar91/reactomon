import React, { Component } from "react";

import PokemonDetails from "../PokemonDetails";

class PokemonDetailsPage extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Pokemon Details</h2>
        <PokemonDetails nameId={this.props.match.params.id}></PokemonDetails>
      </div>
    );
  }
}

export default PokemonDetailsPage;
