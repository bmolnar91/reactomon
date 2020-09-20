import React, { useState, useEffect } from "react";
import axios from "axios";

import TypeList from "../TypeList";

const TypesPage = (props) => {
  const [state, setState] = useState({
    next: null,
    previous: null,
    results: [],
  });

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then((res) =>
      setState({
        next: res.data.next,
        previous: res.data.previous,
        results: res.data.results,
      })
    );
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "left", padding: "15px" }}>Types</h2>
      <ol>
        <TypeList types={state.results} />
      </ol>
    </div>
  );
};

export default TypesPage;
