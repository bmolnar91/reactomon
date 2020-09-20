import React, { useState, useEffect } from "react";
import axios from "axios";

import PokemonList from "../PokemonList";

const PokemonsPage = (props) => {
  const [state, setState] = useState({
    next: null,
    previous: null,
    results: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setIsLoading(true);
      setState({
        ...state,
        next: res.data.next,
        previous: res.data.previous,
        results: res.data.results,
      });
      setIsLoading(false);
    });
  }, []);

  let content = (
    <div>
      <h2 style={{ textAlign: "left", padding: "15px" }}>Pokemons</h2>
      <ol>
        <PokemonList pokemons={state.results} />
      </ol>
    </div>
  );

  return content;
};

export default PokemonsPage;
