import React, { useState } from "react";
import { addArticle, getArticles } from "../actions/index";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";

export const AddArticleForm = (props) => {
  const user_id = localStorage.getItem("currentUser");
  console.log("user_id", user_id);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    category_id: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addArticle(user_id, newArticle);
    props.getArticles();
    props.history.push("/articles");
  };
  const handleChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <Typography variant="h1">Add Your Own Articles</Typography>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newArticle.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Content"
          name="content"
          value={newArticle.content}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category_id"
          value={newArticle.category_id}
          onChange={handleChange}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { addArticle, getArticles })(
  AddArticleForm
);
