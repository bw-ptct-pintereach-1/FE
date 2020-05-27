import React from "react";

import { connect } from "react-redux";
import Article from "./Article";

export const ArticleList = (props) => {
  return (
    <div className={"article-div"}>
      {props.articles.map((article) => (
        <h1>{article.title}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, {})(ArticleList);
