import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Article from "./Article";

export const ArticleList = (props) => {
  return (
    <div className={"article-div"}>
      {props.articles.map((article) => (
        <Link key={article.id} to={`/articles/${article.id}`}>
          <Article article={article} />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, {})(ArticleList);
