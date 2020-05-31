import React from 'react';
import "./Nav.scss";
import { NavLink,Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className = "nav-container">
            <h1 className = "nav-header">Pintreach</h1>
                <div className = "nav-links">
                    <a href = "https://pintereachbrittany.netlify.app/">Home</a>
                    <NavLink to = "/login">Login</NavLink>
                    <NavLink to = "/">Register</NavLink>
                </div>
        </div>
    )
}

export default Nav
