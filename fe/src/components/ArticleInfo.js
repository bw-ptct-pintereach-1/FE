import React from "react";
import { connect } from "react-redux";

export const ArticleInfo = (props) => {
  const id = props.articles.find(
    (article) => `${article.id}` === props.match.params.id
  );

  return (
    <div>
      <h1>{id.title}</h1>

      <button
        onClick={() => {
          props.history.push(`/update/${id.id}`);
        }}
      >
        Update Article
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, {})(ArticleInfo);
