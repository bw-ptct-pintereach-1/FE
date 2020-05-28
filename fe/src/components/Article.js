import React from "react";
import { Card, Icon, Image, CardDescription } from "semantic-ui-react";

export const Article = ({ title, category_name }) => {
  console.log("id", category_name);

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>

          <CardDescription>{category_name}</CardDescription>
        </Card.Content>
      </Card>
    </div>
  );
};
export default Article;
