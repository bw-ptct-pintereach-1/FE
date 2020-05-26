import React, { useState } from "react";

import Navigation from "./Navigation";
import ArticlesList from "./ArticleList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// SavedArticles initial state will be an empty array.

export const Home = () => {
  const [articles, setArticles] = useState([]);

  // const getArticles = () => {
  // axiosWithAuth()//axios.get here that will be passed down using my Articles Context.

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
