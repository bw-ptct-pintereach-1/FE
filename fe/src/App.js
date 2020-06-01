import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";

import ArticleInfo from "./components/ArticleInfo";
import AddArticleForm from "./components/AddArticleForm";
import UpdateArticleForm from "./components/UpdateArticleForm";
import UserAccount from "./components/UserAccount";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/articles" component={Home} />
          <Route
            path="/articles/:id"
            render={(props) => <ArticleInfo {...props} />}
          />
          <Route
            path="/add"
            render={(props) => <AddArticleForm {...props} />}
          />

          <Route
            exact
            path="/update/:id"
            render={(props) => <UpdateArticleForm {...props} />}
          />

          <Route
            path="/user/:id"
            render={(props) => <UserAccount {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
