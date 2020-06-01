import React from 'react';
import "./Nav.scss";
import { NavLink, Link, useHistory } from "react-router-dom";
import  SimpleMenu  from "./Menu";

const Nav2 = () => {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser")
        history.push("/");
    }
    return (
        <div className="nav-container">
            <img  className = "logo"src={require("../cover.png")}  />
            <div className="nav2-links">

                
                <NavLink to="/articles">Articles</NavLink>
                <SimpleMenu/>
            </div>
        </div>
    )
}

export default Nav2;
