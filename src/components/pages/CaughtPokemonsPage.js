import React, { useContext } from "react";
import { PokemonContext } from "../PokemonContext";

const CaughtPokemonsPage = (props) => {
  const [caughtPokemons, setCaughtPokemons] = useContext(PokemonContext);

  return (
    <div
      style={{
        textAlign: "left",
        margin: "15px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {caughtPokemons.map((caughtPokemon) => {
        return (
          <div>
            <img src={caughtPokemon.image} alt="" />
            <p>Name: {caughtPokemon.name}</p>
            <p>Base experience: {caughtPokemon.baseExperience}</p>
            <p>Height: {caughtPokemon.height}</p>
            <p>Weight: {caughtPokemon.weight}</p>
            <p>
              Abilities:
              {caughtPokemon.abilities.map((ability) => {
                return (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                );
              })}
            </p>
            <p>
              Types:
              {caughtPokemon.types.map((type) => {
                return <li key={type.type.name}>{type.type.name}</li>;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CaughtPokemonsPage;
