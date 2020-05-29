import React from "react";

import { getArticles } from "../actions/index";
import { connect } from "react-redux";

export const UpdateArticleForm = (props) => {
  console.log("articles test", props.articles);
  return <div></div>;
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, {})(UpdateArticleForm);
