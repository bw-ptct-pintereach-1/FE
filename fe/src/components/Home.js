import React from "react";

import Navigation from "./Navigation";
import ArticlesList from "./ArticleList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <ArticlesList />
      </div>
    </Router>
  );
};
export default Home;
