import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Navigation = (props) => {
  return (
    <div className={"nav"}>
      <AppBar position="static" color="primary">
        <Typography variant="h1">Pintereach</Typography>
        <div className={"nav-button"}>
          <NavLink to="/add"> Add Article </NavLink>
        </div>
      </AppBar>{" "}
    </div>
  );
};

export default Navigation;
