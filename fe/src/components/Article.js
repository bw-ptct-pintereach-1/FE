import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export const Article = () => {
  return (
    <div>
      <Card>
        <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Article</Card.Header>

          <Card.Description>Article text </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};
export default Article;
