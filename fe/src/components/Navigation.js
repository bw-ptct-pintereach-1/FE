import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export const Navigation = () => {
  return (
    <div className={"nav"}>
      <Header size="huge">Pintereach</Header>
      <NavLink to="/add"> Add Article </NavLink>
    </div>
  );
};

export default Navigation;
