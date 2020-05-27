import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Registration from "./components/Registration";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/protected" component={Home} />
      </div>
    </Router>
  );
}

export default App;
