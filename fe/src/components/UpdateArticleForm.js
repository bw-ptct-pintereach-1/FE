import React, { useState } from "react";

import { getArticles, editArticle } from "../actions/index";
import { connect } from "react-redux";

export const UpdateArticleForm = (props) => {
  const user_id = localStorage.getItem("currentUser");

  const id = props.articles.find(
    (article) => `${article.id}` === props.match.params.id
  );
  console.log("articles test", props.articles);
  console.log("Update ID", id);

  return (
    <div>
      <form>
        <input></input>
        <input></input>
        <input></input>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { getArticles, editArticle })(
  UpdateArticleForm
);
