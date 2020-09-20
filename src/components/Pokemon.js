import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const Pokemon = (props) => {
  const { name, url } = props.pokemon;

  const [id, setId] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => setId(res.data.id));
  });

  return (
    <React.Fragment>
      <Link to={`/pokemons/${id}`}>{name}</Link>
    </React.Fragment>
  );
};

Pokemon.propTypes = { pokemon: PropTypes.object.isRequired };

export default Pokemon;
