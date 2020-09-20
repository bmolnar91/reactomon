import React, { Component } from "react";
import axios from "axios";

import capitalize from "../util/stringHelper";

class PokemonDetails extends Component {
  state = {
    id: null,
    name: null,
    baseExperience: null,
    height: null,
    weight: null,
    abilities: [],
    types: [],
    image: {},
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then((res) =>
        this.setState({
          id: res.data.id,
          name: capitalize(res.data.name),
          baseExperience: res.data.base_experience,
          height: res.data.height,
          weight: res.data.weight,
          abilities: res.data.abilities,
          types: res.data.types,
          image: res.data.sprites.front_default,
        })
      );
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={this.state.image} alt="" />
        <p>Name: {this.state.name}</p>
        <p>Base experience: {this.state.baseExperience}</p>
        <p>Height: {this.state.height}</p>
        <p>Weight: {this.state.weight}</p>
        <p>
          Abilities:
          {this.state.abilities.map((ability) => {
            return <li key={ability.ability.name}>{ability.ability.name}</li>;
          })}
        </p>
        <p>
          Types:
          {this.state.types.map((type) => {
            return <li key={type.type.name}>{type.type.name}</li>;
          })}
        </p>
      </div>
    );
  }
}

export default PokemonDetails;
