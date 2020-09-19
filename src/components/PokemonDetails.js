import React, { Component } from "react";

class PokemonDetails extends Component {
  render() {
    return (
      <div>
        <p>Bob {this.props.nameId}</p>
      </div>
    );
  }
}

export default PokemonDetails;
