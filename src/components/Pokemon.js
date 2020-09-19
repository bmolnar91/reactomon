import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class Pokemon extends Component {
  state = {
    id: null,
    baseExperience: null,
    height: null,
    weight: null,
    abilities: [],
    forms: [],
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then((res) =>
      this.setState({
        id: res.data.id,
        baseExperience: res.data.base_experience,
        height: res.data.height,
        weight: res.data.weight,
        abilities: res.data.abilities,
        forms: res.data.forms,
      })
    );
  }

  render() {
    const { name, url } = this.props.pokemon;

    return (
      <React.Fragment>
        {/* <Route path={url}></Route> */}
        <Link to={url}>{name}</Link>
      </React.Fragment>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
