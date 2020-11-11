import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="app">
      <h1>Home</h1>
      <Router>
        <Switch>
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
