import React from "react";
import { Route } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export const Navigation = () => {
  return (
    <div className={"nav"}>
      <Header size="huge">Pintereach</Header>
      <Button>Saved List</Button>
    </div>
  );
};

export default Navigation;
