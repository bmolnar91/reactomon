import React, { Component } from "react";
import axios from "axios";

import TypeList from "../TypeList";

class TypesPage extends Component {
  state = {
    next: null,
    previous: null,
    results: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((res) =>
      this.setState({
        next: res.data.next,
        previous: res.data.previous,
        results: res.data.results,
      })
    );
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "left", padding: "15px" }}>Types</h2>
        <ol>
          <TypeList types={this.state.results} />
        </ol>
      </div>
    );
  }
}

export default TypesPage;
