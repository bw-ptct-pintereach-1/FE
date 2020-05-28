import React from "react";
import { connect } from "react-redux";

export const ArticleInfo = (props) => {
  console.log(props.currentUser);
  const id = props.articles.find(
    (article) => `${article.id}` === props.match.params.id
  );
  console.log(id);
  return (
    <div>
      <h1>{id.title}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
  currentUser: state.currentUser,
});
export default connect(mapStateToProps, {})(ArticleInfo);
