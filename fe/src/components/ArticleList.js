import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
          <h1>{article.title}</h1>
          <h3>{article.category_name}</h3>

          <Link key={article.id} to={`/articles/${article.id}`}>
            <button>More Info</button>
          </Link>
          <button
            onClick={() => {
              deleteArticles(article);
            }}
          >
            Delete
          </button>
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
