import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export const Navigation = (props) => {
  return (
    <div className={"nav"}>
      <h1>Pintereach</h1>
      <div className={"nav-button"}>
        <NavLink to="/add"> Add Article </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
