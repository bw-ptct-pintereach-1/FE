import React from "react";
import { connect } from "react-redux";
import faker from "faker";

export const ArticleInfo = (props) => {
  const id = props.articles.find(
    (article) => `${article.id}` === props.match.params.id
  );
  console.log("ID Test", id);

  const pic = faker.image.animals();
  console.log(pic);

  return (
    <div className="article-title">
      <h1>{id.title}</h1>
      <img src={pic} />
      <h2>{id.content}</h2>

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
