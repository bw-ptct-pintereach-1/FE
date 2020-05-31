import React from 'react';
import "./Nav.scss";
import { NavLink, Link, useHistory } from "react-router-dom";

const Nav2 = () => {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser")
        history.push("/");
    }
    return (
        <div className="nav-container">
            <h1 className="nav-header">Pintreach</h1>
            <div className="nav2-links">

                <NavLink to="/login"><button onClick={ logout}>Logout</button></NavLink>
                <NavLink to="/articles">Articles</NavLink>
            </div>
        </div>
    )
}

export default Nav2;
