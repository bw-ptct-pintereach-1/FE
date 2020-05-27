import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export const Article = (props) => {
  const { title } = props.article;
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>

          <Card.Description>Article text </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};
export default Article;
