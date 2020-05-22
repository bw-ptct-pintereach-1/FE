import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Button } from "semantic-ui-react";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Home will be the protected Route */}
      <Home />
    </div>
  );
}

export default App;
