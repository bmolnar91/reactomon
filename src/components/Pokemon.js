import React, { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
    return <React.Fragment>{this.props.name}</React.Fragment>;
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Pokemon;
