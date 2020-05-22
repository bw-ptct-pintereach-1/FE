import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Login + Registration Components */}
      {/* Home will be the protected Route */}
      <Home />
    </div>
  );
}

export default App;
