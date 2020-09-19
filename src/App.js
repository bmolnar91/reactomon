import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import PokemonsPage from "./components/pages/PokemonsPage";
import TypesPage from "./components/pages/TypesPage";
import PokemonDetailsPage from "./components/pages/PokemonDetailsPage";

import "./App.css";

class App extends Component {
  state = {
    next: null,
    previous: null,
    pokemonList: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) =>
      this.setState({
        next: res.data.next,
        previous: res.data.previous,
        pokemonList: res.data.results,
      })
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <PokemonsPage pokemonList={this.state.pokemonList} />
              )}
            />
            <Route path="/pokemons/:id" component={PokemonDetailsPage} />
            <Route path="/types" component={TypesPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
