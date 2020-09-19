import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/pages/Index";
import Pokemons from "./components/pages/Pokemons";
import Types from "./components/pages/Types";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Index} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/types" component={Types} />
        </div>
      </Router>
    );
  }
}

export default App;
