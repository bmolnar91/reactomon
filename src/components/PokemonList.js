import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return props.pokemons.map((pokemon) => (
    <Li key={pokemon.name} primary>
      <Pokemon pokemon={pokemon} />
    </Li>
  ));
};

const Li = styled.li`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 22px;
  color: red;
  ${(props) =>
    props.primary &&
    css`
      color: orange;
    `};
`;

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
