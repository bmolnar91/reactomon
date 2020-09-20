import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import PokemonsPage from "./components/pages/PokemonsPage";
import TypesPage from "./components/pages/TypesPage";
import PokemonDetailsPage from "./components/pages/PokemonDetailsPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/pokemons" component={PokemonsPage} />
            <Route path="/pokemons/:id" component={PokemonDetailsPage} />
            <Route exact path="/types" component={TypesPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
