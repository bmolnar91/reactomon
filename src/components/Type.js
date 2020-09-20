import React from "react";
import PropTypes from "prop-types";

const Type = (props) => {
  return <React.Fragment>{props.name}</React.Fragment>;
};

Type.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Type;
