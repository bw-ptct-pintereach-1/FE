import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Navigation = (props) => {
  return (
    <div className={"nav"}>
      <AppBar position="static" color="secondary">
        <Typography variant="h1">Pintereach</Typography>
        <div className={"nav-button"}>
          <NavLink className = "add-text" to="/add"> Add Article </NavLink>
        </div>
      </AppBar>{" "}
    </div>
  );
};

export default Navigation;
