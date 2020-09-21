import React, { useState, createContext } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [caughtPokemons, setCaughtPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={[caughtPokemons, setCaughtPokemons]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
