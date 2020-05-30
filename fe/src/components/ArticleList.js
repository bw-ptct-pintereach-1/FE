import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";

import { deleteArticle, getArticles } from "../actions/index";

export const ArticleList = ({
  articles,
  currentUser,
  deleteArticle,
  getArticles,
}) => {
  const deleteArticles = (article) => {
    deleteArticle(article);
    getArticles();
  };

  return (
    <div>
      {articles.map((article) => (
        <div className={"article-div"}>
          <Typography variant="h2">{article.title}</Typography>
          <Typography variant="h4"> Topic: {article.category_name}</Typography>

          <Link key={article.id} to={`/articles/${article.id}`}>
            <Button varriant="outline" color="primary">
              More Info
            </Button>
          </Link>
          <Button
            varriant="outline"
            color="primary"
            onClick={() => {
              deleteArticles(article);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, { deleteArticle, getArticles })(
  ArticleList
);
