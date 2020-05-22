import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Article from "./Article";

export const ArticleList = () => {
  return (
    <div className={"article-div"}>
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column>
            <Article />
          </Grid.Column>
          <Grid.Column>
            <Article />
          </Grid.Column>
          <Grid.Column>
            <Article />
          </Grid.Column>
          <Grid.Column>
            <Article />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Article />
          </Grid.Column>
          <Grid.Column>
            <Article />
          </Grid.Column>
          <Grid.Column>
            <Article />
          </Grid.Column>
          <Grid.Column>
            <Article />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default ArticleList;
