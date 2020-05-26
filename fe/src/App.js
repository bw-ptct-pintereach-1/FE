import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Registration from "./components/Registration";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Registration} />

        {/* <PrivateRoute exact path="/protected" component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;
