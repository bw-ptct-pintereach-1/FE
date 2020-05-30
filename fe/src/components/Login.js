import React, { useState } from "react";
// import { axiosWithAuth } from "../util/axiosWithAuth";
import axios from "axios";

import styled from "styled-components";

const H1 = styled.h1`
  font-size: 3em;
  font-family: "Lobster", cursive;
  color: palevioletred;
`;

const Login = (props) => {
  const [logState, setLogState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogState({ ...logState, [e.target.name]: e.target.value });
  };

  const open = (e) => {
    e.preventDefault();
    axios
      .post("https://pintreach1.herokuapp.com/auth/login", logState)
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("currentUser", res.data.user_id);

        console.log("Token", res.data.payload);

        props.history.push("/articles");
      })
      .catch((err) => {
        console.log("Err is:", err);
      });
  };

  return (
    <>
      <H1>Sign into Pintereach</H1>
      <div>
        <form onSubmit={open}>
          <input
            type="text"
            placeholder="Login"
            name="username"
            value={logState.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={logState.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
