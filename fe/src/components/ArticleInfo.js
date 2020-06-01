import React from "react";
import { connect } from "react-redux";
import faker from "faker";
import { Button, Typography } from "@material-ui/core";

export const ArticleInfo = (props) => {
  const id = props.articles.find(
    (article) => `${article.id}` === props.match.params.id
  );
  console.log("ID Test", id);

 

  return (
    <div className="article-title">
      <Typography variant="h1">{id.title || "Unknown Title"}</Typography>
      <p>Written by: {id.author || "unknown"}</p>
      <div className="nav-button">
        <Button
          varriant="outline"
          color="primary"
          onClick={() => {
            props.history.push(`/update/${id.id}`);
          }}
        >
          Update Article
        </Button>
      </div>
      <img src={faker.random.image()} />
      <br/>
      <Typography variant="h4">{id.content || faker.lorem.paragraphs()}</Typography>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});
export default connect(mapStateToProps, {})(ArticleInfo);
