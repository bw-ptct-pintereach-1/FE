import React from "react";
import { Card, Icon, Image, CardDescription } from "semantic-ui-react";

export const Article = ({
  history,
  title,
  category_name,
  deleteArticles,
  key,
}) => {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>

          <CardDescription>{category_name}</CardDescription>
          <button>More Info</button>
          <button>Delete</button>
        </Card.Content>
      </Card>
    </div>
  );
};
export default Article;
