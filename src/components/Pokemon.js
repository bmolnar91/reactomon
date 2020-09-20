import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class Pokemon extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then((res) =>
      this.setState({
        id: res.data.id,
      })
    );
  }

  render() {
    const { name } = this.props.pokemon;

    return (
      <React.Fragment>
        <Link to={`/pokemons/${this.state.id}`}>{name}</Link>
      </React.Fragment>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
