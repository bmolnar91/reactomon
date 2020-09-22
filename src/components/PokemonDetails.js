import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { PokemonContext } from "./PokemonContext";
import capitalize from "../util/stringHelper";

const PokemonDetails = (props) => {
  const [caughtPokemons, setCaughtPokemons] = useContext(PokemonContext);

  const [state, setState] = useState({
    id: null,
    name: null,
    baseExperience: null,
    height: null,
    weight: null,
    abilities: [],
    types: [],
    image: {},
    caught: null,
  });

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`).then((res) =>
      setState({
        id: res.data.id,
        name: capitalize(res.data.name),
        baseExperience: res.data.base_experience,
        height: res.data.height,
        weight: res.data.weight,
        abilities: res.data.abilities,
        types: res.data.types,
        image: res.data.sprites.front_default,
        caugth: false,
      })
    );
  }, []);

  const catchPokemon = (e) => {
    setCaughtPokemons((prevPokemons) => {
      return prevPokemons.filter((pokemon) => pokemon.id === state.id).length >
        0
        ? [...prevPokemons]
        : [...prevPokemons, { ...state, caugth: true }];
    });
  };

  const CatchButton = (props) => {
    return <button onClick={catchPokemon}>Catch!</button>;
  };

  return (
    <div style={{ textAlign: "left", margin: "15px" }}>
      <img src={state.image} alt="" />
      <p>Name: {state.name}</p>
      <p>Base experience: {state.baseExperience}</p>
      <p>Height: {state.height}</p>
      <p>Weight: {state.weight}</p>
      <p>
        Abilities:
        {state.abilities.map((ability) => {
          return <li key={ability.ability.name}>{ability.ability.name}</li>;
        })}
      </p>
      <p>
        Types:
        {state.types.map((type) => {
          return <li key={type.type.name}>{type.type.name}</li>;
        })}
      </p>
      <CatchButton></CatchButton>
    </div>
  );
};

export default PokemonDetails;
