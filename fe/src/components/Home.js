import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getArticles } from "../actions/index.js";
import Navigation from "./Navigation";
import ArticlesList from "./ArticleList";
import Article from "./Article";

// SavedArticles initial state will be an empty array.

export const Home = (props) => {
  useEffect(() => {
    props.getArticles();
  }, []);

  // const getArticles = () => {
  // axiosWithAuth()//axios.get here that will be passed down using my Articles Context.

  return (
    <Router>
      <div>
        <Navigation />
        <ArticlesList />

        <Route
          path="/articles/:id"
          render={(props) => <Article {...props} getArticles={getArticles} />}
        ></Route>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { getArticles })(Home);
