import React, { Component } from "react";

import Type from "./Type";

class TypeList extends Component {
  render() {
    return this.props.types.map((type) => {
      return (
        <li key={type.name}>
          <Type name={type.name} url={type.url} />
        </li>
      );
    });
  }
}

export default TypeList;
