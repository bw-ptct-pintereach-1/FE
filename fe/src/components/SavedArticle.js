import React from "react";

export const SavedArticle = () => {
  return (
    <div>
      <Card>
        <Image src="eye.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Article</Card.Header>

          <Card.Description>Article text </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};
