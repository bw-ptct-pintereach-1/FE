import React, { useState } from "react";
import Nav2 from "./Nav2";
import { getArticles, editArticle } from "../actions/index";
import { connect } from "react-redux";

export const UpdateArticleForm = (props) => {
  const user_id = localStorage.getItem("currentUser");
  const id = props.articles.find(
    (article) => `${article.id}` === props.match.params.id
  );
  console.log("articles test", props.articles);
  console.log("Update ID", id);

  const [currentArticle, setCurrentArticle] = useState(id);
  const [updatedArticle, setUpdatedArticle] = useState({
    id: id.id,
    title: "",
    content: "",
    category_id: id.category_id,
  });

  const handeleSubmit = (e) => {
    e.preventDefault();

    props.editArticle(user_id, updatedArticle);
    props.getArticles();
    props.history.push("/articles");
  };

  const handleChange = (e) => {
    setUpdatedArticle({
      ...updatedArticle,
      [e.target.name]: e.target.value,
    });
  };
  console.log("current article test", currentArticle);
  console.log("updated test", updatedArticle);

  return (
    <div className = "register-container">
      <Nav2/>
      <form onSubmit={handeleSubmit}>
      <h1>Edit your Article</h1>
        <input
          type="text"
          name="title"
          placeholder={currentArticle.title}
          value={updatedArticle.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder={currentArticle.content}
          onChange={handleChange}
          value={updatedArticle.content}
        />
        <input
          type="text"
          placeholder={currentArticle.category_id}
          onChange={handleChange}
          name="category_id"
          value={id.category_id}
        />
        <input type="submit" />
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
