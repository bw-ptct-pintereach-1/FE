import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

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
    axiosWithAuth()
      .post("/auth/login", logState)
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("token", res.data.token);
        console.log("Token", res.data.payload);

        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("Err is:", err);
      });
  };

  return (
    <>
      <h1>Sign into Pintereach</h1>
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
