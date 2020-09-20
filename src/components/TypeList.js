import React from "react";
import PropTypes from "prop-types";

import Type from "./Type";

const TypeList = (props) => {
  return props.types.map((type) => {
    return (
      <li key={type.name}>
        <Type name={type.name} url={type.url} />
      </li>
    );
  });
};

TypeList.propTypes = {
  types: PropTypes.array.isRequired,
};

export default TypeList;
