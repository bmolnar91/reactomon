import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={{ float: "left" }}>
        Home
      </Link>
      <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#eeefff",
  textAlign: "center",
  padding: "10px",
};

export default Navbar;
