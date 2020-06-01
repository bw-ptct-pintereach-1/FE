import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SimpleMenu from "./Menu";
import Blue from '@material-ui/core/colors/blue';

export const Navigation = (props) => {

  const blue = Blue[300];
  return (
    <div className="nav">
      <AppBar className= "app-bar" position="static" color={blue}>
      <Typography className = "nav-h1" variant="h1">Articles</Typography>
        <img  className = "logo"src={require("../cover.png")}  />
        
        <div className={"nav-button"}>

          <NavLink className="add-text" to="/add"> Add Article </NavLink>
          <SimpleMenu />
        </div>
        
      </AppBar>{" "}
    </div>
  );
};

export default Navigation;
