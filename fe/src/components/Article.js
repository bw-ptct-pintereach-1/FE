import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export const Article = ({ title }) => {
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
