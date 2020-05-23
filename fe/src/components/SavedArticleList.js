import React from "react";

export const SavedArticleList = () => {
  return (
    <div>
      <div className={"article-div"}>
        <Grid columns={4} divided>
          <Grid.Row>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
            <Grid.Column>
              <SavedArticle />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
