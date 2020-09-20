import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Header>
      <Link to="/" style={{ float: "left" }}>
        Home
      </Link>
      <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
    </Header>
  );
}

const Header = styled.header`
  background-color: #eeefff;
  text-align: center;
  padding: 15px;
  &:hover {
    background-color: #eee6ff;
  }
`;

export default Navbar;
